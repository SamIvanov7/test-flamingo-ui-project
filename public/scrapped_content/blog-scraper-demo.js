#!/usr/bin/env node

import axios from 'axios';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';

console.log('╔════════════════════════════════════════════════════════╗');
console.log('║       BLOG SCRAPER - WORKING DEMONSTRATION              ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

// Example 1: Scrape a tech blog
async function scrapeTechBlog() {
  console.log('📝 Example 1: Scraping TechCrunch Latest Articles\n');
  console.log('=' .repeat(60));
  
  try {
    const response = await axios.get('https://techcrunch.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const articles = [];
    
    $('.wp-block-post').slice(0, 5).each((_, element) => {
      const $el = $(element);
      const article = {
        title: $el.find('h2, h3').first().text().trim(),
        url: $el.find('a').first().attr('href'),
        excerpt: $el.find('.wp-block-post-excerpt__excerpt').text().trim(),
        author: $el.find('.wp-block-post-author__name').text().trim(),
        date: $el.find('time').text().trim()
      };
      
      if (article.title) {
        articles.push(article);
      }
    });
    
    console.log(`✅ Found ${articles.length} articles:\n`);
    articles.forEach((article, i) => {
      console.log(`${i + 1}. ${article.title}`);
      console.log(`   Author: ${article.author || 'N/A'}`);
      console.log(`   Date: ${article.date || 'N/A'}`);
      console.log(`   URL: ${article.url}\n`);
    });
    
    return articles;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

// Example 2: Scrape GitHub Trending
async function scrapeGitHubTrending() {
  console.log('📝 Example 2: Scraping GitHub Trending Repositories\n');
  console.log('=' .repeat(60));
  
  try {
    const response = await axios.get('https://github.com/trending', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const repos = [];
    
    $('.Box-row').slice(0, 5).each((_, element) => {
      const $el = $(element);
      const repo = {
        name: $el.find('h2 a').text().trim().replace(/\s+/g, ' '),
        url: 'https://github.com' + $el.find('h2 a').attr('href'),
        description: $el.find('p.text-gray').text().trim(),
        language: $el.find('[itemprop="programmingLanguage"]').text().trim(),
        stars: $el.find('.octicon-star').parent().text().trim(),
        forks: $el.find('.octicon-repo-forked').parent().text().trim()
      };
      
      if (repo.name) {
        repos.push(repo);
      }
    });
    
    console.log(`✅ Found ${repos.length} trending repositories:\n`);
    repos.forEach((repo, i) => {
      console.log(`${i + 1}. ${repo.name}`);
      console.log(`   Language: ${repo.language || 'N/A'}`);
      console.log(`   Stars: ${repo.stars || 'N/A'}`);
      console.log(`   Description: ${repo.description?.substring(0, 80) || 'N/A'}...`);
      console.log(`   URL: ${repo.url}\n`);
    });
    
    return repos;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

// Example 3: Scrape Product Hunt
async function scrapeProductHunt() {
  console.log('📝 Example 3: Scraping Product Hunt Top Products\n');
  console.log('=' .repeat(60));
  
  try {
    const response = await axios.get('https://www.producthunt.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const products = [];
    
    $('[data-test="post-item"]').slice(0, 5).each((_, element) => {
      const $el = $(element);
      const product = {
        name: $el.find('h3').text().trim(),
        tagline: $el.find('[class*="tagline"]').text().trim(),
        votes: $el.find('button[data-test="vote-button"] span').text().trim(),
        comments: $el.find('[href*="#comments"]').text().trim()
      };
      
      if (product.name) {
        products.push(product);
      }
    });
    
    if (products.length === 0) {
      console.log('⚠️  No products found (may require JavaScript rendering)\n');
    } else {
      console.log(`✅ Found ${products.length} products:\n`);
      products.forEach((product, i) => {
        console.log(`${i + 1}. ${product.name}`);
        console.log(`   Tagline: ${product.tagline || 'N/A'}`);
        console.log(`   Votes: ${product.votes || 'N/A'}`);
        console.log(`   Comments: ${product.comments || 'N/A'}\n`);
      });
    }
    
    return products;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

// Example 4: Using Puppeteer for JS-rendered sites
async function scrapeDynamicSite() {
  console.log('📝 Example 4: Scraping Dynamic JavaScript Site (with Puppeteer)\n');
  console.log('=' .repeat(60));
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    console.log('🔍 Loading React.dev blog...');
    await page.goto('https://react.dev/blog', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for content
    await page.waitForSelector('article', { timeout: 5000 });
    
    const posts = await page.evaluate(() => {
      const articles = document.querySelectorAll('article');
      return Array.from(articles).slice(0, 5).map(article => ({
        title: article.querySelector('h3')?.textContent?.trim() || '',
        date: article.querySelector('time')?.textContent?.trim() || '',
        excerpt: article.querySelector('p')?.textContent?.trim() || '',
        link: article.querySelector('a')?.href || ''
      }));
    });
    
    console.log(`✅ Found ${posts.length} blog posts:\n`);
    posts.forEach((post, i) => {
      console.log(`${i + 1}. ${post.title}`);
      console.log(`   Date: ${post.date}`);
      console.log(`   Excerpt: ${post.excerpt?.substring(0, 80)}...`);
      console.log(`   Link: ${post.link}\n`);
    });
    
    return posts;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  } finally {
    await browser.close();
  }
}

// Run all examples
async function runAllExamples() {
  const results = {
    timestamp: new Date().toISOString(),
    techcrunch: [],
    github: [],
    producthunt: [],
    dynamic: []
  };
  
  // Run examples
  results.techcrunch = await scrapeTechBlog();
  console.log('\n' + '─'.repeat(60) + '\n');
  
  results.github = await scrapeGitHubTrending();
  console.log('\n' + '─'.repeat(60) + '\n');
  
  results.producthunt = await scrapeProductHunt();
  console.log('\n' + '─'.repeat(60) + '\n');
  
  results.dynamic = await scrapeDynamicSite();
  
  // Save results
  await fs.writeFile('blog-scraper-results.json', JSON.stringify(results, null, 2));
  
  console.log('\n' + '═'.repeat(60));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(60));
  console.log(`✅ TechCrunch articles: ${results.techcrunch.length}`);
  console.log(`✅ GitHub trending repos: ${results.github.length}`);
  console.log(`✅ Product Hunt products: ${results.producthunt.length}`);
  console.log(`✅ Dynamic site posts: ${results.dynamic.length}`);
  console.log(`\n💾 All results saved to blog-scraper-results.json`);
  console.log('\n✨ Demo complete!\n');
}

// Run the demo
runAllExamples().catch(console.error);