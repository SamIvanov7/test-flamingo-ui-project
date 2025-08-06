#!/usr/bin/env node

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';

class BlogScraper {
  constructor(config) {
    this.config = config;
  }

  async scrapeListPage(pageUrl) {
    try {
      console.log(`\n🔍 Fetching: ${pageUrl}`);
      const response = await axios.get(pageUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        timeout: 10000
      });
      
      const $ = cheerio.load(response.data);
      const posts = [];
      const { selectors } = this.config;
      
      // Try to auto-detect structure if no selectors provided
      const articles = selectors.articles ? 
        $(selectors.articles) : 
        $('article, .post, .entry, .item, [class*="article"], [class*="post"]');
      
      console.log(`Found ${articles.length} potential articles`);
      
      articles.each((_, element) => {
        const $element = $(element);
        
        const post = {
          title: this.extractText($element, selectors.title || 'h1, h2, h3, .title, [class*="title"]'),
          url: this.extractUrl($element, selectors.url || 'a[href], h2 a, h3 a, .title a'),
          author: this.extractText($element, selectors.author || '.author, [class*="author"], .by'),
          date: this.extractText($element, selectors.date || 'time, .date, [class*="date"], .published'),
          excerpt: this.extractText($element, selectors.excerpt || '.excerpt, .summary, .description, p:first'),
          tags: this.extractTags($element, selectors.tags || '.tag, .category, [class*="tag"]'),
          image: this.extractImage($element, selectors.image || 'img'),
        };

        if (post.title || post.url) {
          posts.push(post);
        }
      });

      // If no articles found, try to extract all links as a fallback
      if (posts.length === 0) {
        console.log('No articles found with selectors, extracting all links...');
        $('a[href]').each((_, element) => {
          const $element = $(element);
          const href = $element.attr('href');
          const text = $element.text().trim();
          
          if (href && text && text.length > 10) {
            posts.push({
              title: text,
              url: href.startsWith('http') ? href : new URL(href, pageUrl).href,
              excerpt: $element.parent().text().substring(0, 200)
            });
          }
        });
        
        // Limit to first 20 links
        posts.splice(20);
      }

      return posts;
    } catch (error) {
      console.error('Error scraping page:', error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
      }
      throw error;
    }
  }

  extractText($element, selector) {
    const text = $element.find(selector).first().text().trim();
    return text || $element.filter(selector).first().text().trim();
  }

  extractUrl($element, selector) {
    const href = $element.find(selector).first().attr('href') || 
                 $element.filter(selector).first().attr('href') || '';
    if (!href) return '';
    if (href.startsWith('http')) return href;
    if (href.startsWith('//')) return 'https:' + href;
    try {
      return new URL(href, this.config.baseUrl).href;
    } catch {
      return href;
    }
  }

  extractTags($element, selector) {
    const tags = [];
    $element.find(selector).each((_, el) => {
      const tag = cheerio.load(el).text().trim();
      if (tag) tags.push(tag);
    });
    return tags;
  }

  extractImage($element, selector) {
    const src = $element.find(selector).first().attr('src') || 
                $element.find(selector).first().attr('data-src') || '';
    if (!src) return '';
    if (src.startsWith('http')) return src;
    if (src.startsWith('//')) return 'https:' + src;
    if (src.startsWith('/')) {
      try {
        return new URL(src, this.config.baseUrl).href;
      } catch {
        return src;
      }
    }
    return src;
  }
}

// Platform configurations
const CONFIGS = {
  wordpress: {
    selectors: {
      articles: 'article, .post',
      title: 'h2.entry-title, h1.entry-title',
      url: 'h2.entry-title a, h1.entry-title a, .read-more',
      author: '.author-name, .by-author, .entry-author',
      date: '.entry-date, time.published',
      excerpt: '.entry-summary, .excerpt',
      tags: '.tag-links a, .tags a',
      image: '.post-thumbnail img, .featured-image img'
    }
  },
  medium: {
    selectors: {
      articles: 'article',
      title: 'h2, h3',
      url: 'a[data-post-id], a[href*="/p/"]',
      author: '[data-testid="authorName"], .author-name',
      date: 'time',
      excerpt: 'p:first-of-type, .subtitle',
      tags: 'a[href*="/tag/"]',
      image: 'img:first-of-type'
    }
  },
  devto: {
    selectors: {
      articles: '.crayons-story',
      title: 'h2.crayons-story__title',
      url: 'a.crayons-story__hidden-navigation-link',
      author: '.crayons-story__author-name',
      date: 'time',
      excerpt: '.crayons-story__snippet',
      tags: '.crayons-story__tags a',
      image: '.crayons-article__cover img'
    }
  },
  custom: {
    selectors: {
      articles: '',
      title: '',
      url: '',
      author: '',
      date: '',
      excerpt: '',
      tags: '',
      image: ''
    }
  }
};

// Main execution
const args = process.argv.slice(2);

function showHelp() {
  console.log(`
Blog Scraper CLI
================

Usage: node scraper-standalone.js scrape <url> [options]

Options:
  --platform <name>    Platform type (wordpress, medium, devto, custom)
  --output <file>      Export to JSON file
  --help              Show this help

Examples:
  node scraper-standalone.js scrape https://example.com/blog
  node scraper-standalone.js scrape https://dev.to --platform devto
  node scraper-standalone.js scrape https://site.com --output posts.json
  `);
}

async function main() {
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    return;
  }

  const command = args[0];
  const url = args[1];

  if (command !== 'scrape' || !url) {
    console.error('❌ Error: Please provide a URL to scrape');
    showHelp();
    return;
  }

  const platformIndex = args.indexOf('--platform');
  const platform = platformIndex !== -1 ? args[platformIndex + 1] : 'custom';
  
  const outputIndex = args.indexOf('--output');
  const outputFile = outputIndex !== -1 ? args[outputIndex + 1] : null;

  try {
    const urlObj = new URL(url);
    const config = {
      baseUrl: `${urlObj.protocol}//${urlObj.host}`,
      selectors: CONFIGS[platform]?.selectors || CONFIGS.custom.selectors
    };

    console.log(`\n📋 Scraping ${url}`);
    console.log(`🔧 Platform: ${platform}`);
    console.log('=' .repeat(60));

    const scraper = new BlogScraper(config);
    const posts = await scraper.scrapeListPage(url);

    console.log(`\n✅ Found ${posts.length} items\n`);

    // Display results
    posts.slice(0, 10).forEach((post, index) => {
      console.log(`${index + 1}. ${post.title || 'Untitled'}`);
      if (post.url) console.log(`   🔗 ${post.url}`);
      if (post.author) console.log(`   👤 ${post.author}`);
      if (post.date) console.log(`   📅 ${post.date}`);
      if (post.tags?.length) console.log(`   🏷️  ${post.tags.join(', ')}`);
      if (post.excerpt) console.log(`   📝 ${post.excerpt.substring(0, 100)}...`);
      console.log();
    });

    if (posts.length > 10) {
      console.log(`... and ${posts.length - 10} more items\n`);
    }

    // Save to file if requested
    if (outputFile) {
      const output = {
        url,
        platform,
        timestamp: new Date().toISOString(),
        count: posts.length,
        posts
      };
      await fs.writeFile(outputFile, JSON.stringify(output, null, 2));
      console.log(`💾 Saved to ${outputFile}`);
    }

    // Page analysis
    console.log('📊 Page Analysis:');
    console.log(`   Total items: ${posts.length}`);
    console.log(`   With titles: ${posts.filter(p => p.title).length}`);
    console.log(`   With URLs: ${posts.filter(p => p.url).length}`);
    console.log(`   With authors: ${posts.filter(p => p.author).length}`);
    console.log(`   With dates: ${posts.filter(p => p.date).length}`);
    console.log(`   With images: ${posts.filter(p => p.image).length}`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.code === 'ENOTFOUND') {
      console.error('   Could not resolve domain. Check the URL.');
    } else if (error.response?.status === 403) {
      console.error('   Access forbidden. The site may be blocking scrapers.');
    } else if (error.response?.status === 404) {
      console.error('   Page not found. Check the URL.');
    }
    process.exit(1);
  }
}

main().catch(console.error);