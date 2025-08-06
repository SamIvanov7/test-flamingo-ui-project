#!/usr/bin/env node

import { BlogScraper, scrapeBlogWithApify } from './dist/utils/blogScraper.js';
import { getConfigForPlatform } from './dist/config/scraperConfigs.js';
import fs from 'fs/promises';
import path from 'path';

const args = process.argv.slice(2);

function showHelp() {
  console.log(`
Blog Scraper CLI
================

Usage: node scraper-cli.js [command] [options]

Commands:
  scrape <url>              Scrape a single blog page
  scrape-all <url>          Scrape all pages with pagination
  scrape-post <url>         Scrape full post content
  export <url> <file>       Scrape and export to JSON file

Options:
  --platform <name>         Platform type (wordpress, medium, ghost, substack, devto, hashnode)
  --max-pages <n>           Maximum number of pages to scrape (default: 5)
  --output <format>         Output format: json, csv, markdown (default: json)
  --selectors <file>        Custom selectors JSON file

Examples:
  node scraper-cli.js scrape https://example.com/blog --platform wordpress
  node scraper-cli.js scrape-all https://medium.com/tag/javascript --platform medium --max-pages 3
  node scraper-cli.js export https://dev.to/t/react --platform devto blog-posts.json
  `);
}

async function loadCustomSelectors(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error loading custom selectors:', error);
    return null;
  }
}

async function exportToJSON(posts, outputFile) {
  const outputPath = path.resolve(outputFile);
  await fs.writeFile(outputPath, JSON.stringify(posts, null, 2));
  console.log(`✅ Exported ${posts.length} posts to ${outputPath}`);
}

async function exportToCSV(posts, outputFile) {
  const headers = ['title', 'url', 'author', 'date', 'excerpt', 'tags', 'imageUrl', 'readTime'];
  const csvContent = [
    headers.join(','),
    ...posts.map(post => 
      headers.map(h => {
        const value = post[h];
        if (Array.isArray(value)) return `"${value.join('; ')}"`;
        if (typeof value === 'string' && value.includes(',')) return `"${value}"`;
        return value || '';
      }).join(',')
    )
  ].join('\n');
  
  const outputPath = path.resolve(outputFile);
  await fs.writeFile(outputPath, csvContent);
  console.log(`✅ Exported ${posts.length} posts to ${outputPath}`);
}

async function exportToMarkdown(posts, outputFile) {
  const mdContent = posts.map(post => `
## ${post.title}

- **URL**: [${post.url}](${post.url})
- **Author**: ${post.author || 'Unknown'}
- **Date**: ${post.date || 'N/A'}
- **Read Time**: ${post.readTime || 'N/A'}
${post.tags?.length ? `- **Tags**: ${post.tags.join(', ')}` : ''}

${post.excerpt || 'No excerpt available.'}

---
`).join('\n');
  
  const outputPath = path.resolve(outputFile);
  await fs.writeFile(outputPath, mdContent);
  console.log(`✅ Exported ${posts.length} posts to ${outputPath}`);
}

async function main() {
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    return;
  }
  
  const command = args[0];
  const url = args[1];
  
  if (!url) {
    console.error('❌ Error: URL is required');
    showHelp();
    return;
  }
  
  const platformIndex = args.indexOf('--platform');
  const platform = platformIndex !== -1 ? args[platformIndex + 1] : 'custom';
  
  const maxPagesIndex = args.indexOf('--max-pages');
  const maxPages = maxPagesIndex !== -1 ? parseInt(args[maxPagesIndex + 1]) : 5;
  
  const outputIndex = args.indexOf('--output');
  const outputFormat = outputIndex !== -1 ? args[outputIndex + 1] : 'json';
  
  const selectorsIndex = args.indexOf('--selectors');
  const customSelectorsFile = selectorsIndex !== -1 ? args[selectorsIndex + 1] : null;
  
  let config;
  if (customSelectorsFile) {
    const customSelectors = await loadCustomSelectors(customSelectorsFile);
    if (customSelectors) {
      config = {
        baseUrl: new URL(url).origin,
        selectors: customSelectors,
        pagination: {
          selector: customSelectors.pagination || 'a[rel="next"]',
          limit: maxPages
        }
      };
    }
  }
  
  if (!config) {
    config = getConfigForPlatform(platform, new URL(url).origin);
  }
  
  const scraper = new BlogScraper(config);
  
  try {
    let posts = [];
    
    switch (command) {
      case 'scrape':
        console.log(`\n📄 Scraping ${url}...`);
        posts = await scraper.scrapeListPage(url);
        console.log(`\n✅ Found ${posts.length} posts\n`);
        
        posts.forEach((post, index) => {
          console.log(`${index + 1}. ${post.title}`);
          console.log(`   URL: ${post.url}`);
          console.log(`   Author: ${post.author || 'N/A'}`);
          console.log(`   Date: ${post.date || 'N/A'}\n`);
        });
        break;
        
      case 'scrape-all':
        console.log(`\n📚 Scraping all pages from ${url} (max: ${maxPages})...`);
        posts = await scraper.scrapeAllPages(url, maxPages);
        console.log(`\n✅ Scraped ${posts.length} posts across multiple pages\n`);
        
        const summary = {
          total: posts.length,
          withAuthors: posts.filter(p => p.author).length,
          withDates: posts.filter(p => p.date).length,
          withTags: posts.filter(p => p.tags && p.tags.length > 0).length
        };
        
        console.log('Summary:');
        console.log(`  Total posts: ${summary.total}`);
        console.log(`  With authors: ${summary.withAuthors}`);
        console.log(`  With dates: ${summary.withDates}`);
        console.log(`  With tags: ${summary.withTags}`);
        break;
        
      case 'scrape-post':
        console.log(`\n📖 Scraping full post from ${url}...`);
        const fullPost = await scraper.scrapeFullPost(url);
        console.log('\n✅ Post scraped successfully\n');
        
        console.log(`Title: ${fullPost.title}`);
        console.log(`Author: ${fullPost.author || 'N/A'}`);
        console.log(`Date: ${fullPost.date || 'N/A'}`);
        console.log(`Tags: ${fullPost.tags?.join(', ') || 'None'}`);
        console.log(`\nContent (first 500 chars):`);
        console.log(fullPost.content?.substring(0, 500) + '...');
        break;
        
      case 'export':
        const outputFile = args[2];
        if (!outputFile) {
          console.error('❌ Error: Output file is required for export command');
          return;
        }
        
        console.log(`\n💾 Exporting posts from ${url}...`);
        posts = await scraper.scrapeAllPages(url, maxPages);
        
        switch (outputFormat.toLowerCase()) {
          case 'csv':
            await exportToCSV(posts, outputFile);
            break;
          case 'markdown':
          case 'md':
            await exportToMarkdown(posts, outputFile);
            break;
          case 'json':
          default:
            await exportToJSON(posts, outputFile);
            break;
        }
        break;
        
      default:
        console.error(`❌ Unknown command: ${command}`);
        showHelp();
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);