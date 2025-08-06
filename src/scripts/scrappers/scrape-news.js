#!/usr/bin/env node

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';

// Specialized news scraper
async function scrapeNewsArticle(url) {
  console.log('\n📰 NEWS ARTICLE SCRAPER');
  console.log('=' .repeat(60));
  console.log(`\n🔍 Fetching: ${url}\n`);
  
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    });
    
    const $ = cheerio.load(response.data);
    
    // Extract article data
    const article = {
      url: url,
      title: $('h1').first().text().trim() || 
             $('meta[property="og:title"]').attr('content') || 
             $('title').text().trim(),
      
      author: $('.author-name').text().trim() || 
              $('[itemprop="author"]').text().trim() ||
              $('meta[name="author"]').attr('content') || '',
      
      date: $('time').first().text().trim() || 
            $('time').attr('datetime') ||
            $('.date').text().trim() ||
            $('[itemprop="datePublished"]').text().trim() || '',
      
      description: $('meta[property="og:description"]').attr('content') || 
                   $('meta[name="description"]').attr('content') || '',
      
      image: $('meta[property="og:image"]').attr('content') || 
             $('img').first().attr('src') || '',
      
      content: '',
      paragraphs: [],
      relatedLinks: []
    };
    
    // Extract main content
    const contentSelectors = [
      'article .content',
      '.article-body',
      '[itemprop="articleBody"]',
      '.entry-content',
      '.post-content',
      'main p',
      'article p'
    ];
    
    for (const selector of contentSelectors) {
      if ($(selector).length > 0) {
        $(selector).each((_, el) => {
          const text = $(el).text().trim();
          if (text.length > 50) {
            article.paragraphs.push(text);
          }
        });
        if (article.paragraphs.length > 0) break;
      }
    }
    
    // If no structured content found, get all paragraphs
    if (article.paragraphs.length === 0) {
      $('p').each((_, el) => {
        const text = $(el).text().trim();
        if (text.length > 50 && text.length < 1000) {
          article.paragraphs.push(text);
        }
      });
    }
    
    article.content = article.paragraphs.join('\n\n');
    
    // Extract related links
    $('a[href*="/news/"], a[href*="/article/"]').slice(0, 10).each((_, el) => {
      const $link = $(el);
      const href = $link.attr('href');
      const text = $link.text().trim();
      
      if (href && text && text.length > 10) {
        article.relatedLinks.push({
          title: text,
          url: href.startsWith('http') ? href : new URL(href, url).href
        });
      }
    });
    
    // Display results
    console.log('📄 ARTICLE DETAILS');
    console.log('─'.repeat(60));
    console.log(`\n📌 Title: ${article.title}`);
    console.log(`👤 Author: ${article.author || 'Not found'}`);
    console.log(`📅 Date: ${article.date || 'Not found'}`);
    console.log(`🖼️  Image: ${article.image ? 'Yes' : 'No'}`);
    console.log(`📝 Paragraphs found: ${article.paragraphs.length}`);
    console.log(`🔗 Related links: ${article.relatedLinks.length}`);
    
    if (article.description) {
      console.log(`\n📋 Description:\n${article.description}`);
    }
    
    if (article.paragraphs.length > 0) {
      console.log(`\n📖 First paragraph:\n${article.paragraphs[0].substring(0, 300)}...`);
    }
    
    if (article.relatedLinks.length > 0) {
      console.log('\n🔗 Related Articles:');
      article.relatedLinks.slice(0, 5).forEach((link, i) => {
        console.log(`   ${i + 1}. ${link.title}`);
      });
    }
    
    // Save to file
    const filename = `article-${Date.now()}.json`;
    await fs.writeFile(filename, JSON.stringify(article, null, 2));
    console.log(`\n💾 Full article saved to: ${filename}`);
    
    return article;
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.response) {
      console.error(`   Status: ${error.response.status}`);
    }
    return null;
  }
}

// Main execution
const url = process.argv[2];

if (!url) {
  console.log(`
Usage: node scrape-news.js <article-url>

Example:
  node scrape-news.js https://www.japantimes.co.jp/news/2025/03/21/japan/crime-legal/illegal-online-gambling-strategy/
  `);
  process.exit(1);
}

scrapeNewsArticle(url).catch(console.error);