#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function scrapeFavbet() {
  console.log('\n🚀 Starting Puppeteer scraper for favbet.ua...\n');
  console.log('=' .repeat(60));
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ]
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport and user agent
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Add extra headers
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    });

    console.log('📡 Navigating to https://favbet.ua...');
    
    try {
      await page.goto('https://favbet.ua', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      console.log('✅ Page loaded successfully\n');
      
      // Wait for content to load
      await page.waitForTimeout(3000);
      
      // Extract page title
      const title = await page.title();
      console.log(`📄 Page Title: ${title}\n`);
      
      // Try to extract sports/betting data
      console.log('🔍 Extracting content...\n');
      
      const data = await page.evaluate(() => {
        const results = {
          sports: [],
          matches: [],
          promotions: [],
          links: [],
          buttons: []
        };
        
        // Extract sports categories
        const sportElements = document.querySelectorAll('[class*="sport"], [data-sport], [class*="Sport"]');
        sportElements.forEach(el => {
          const text = el.textContent?.trim();
          if (text && text.length > 0 && text.length < 100) {
            results.sports.push(text);
          }
        });
        
        // Extract match/event data
        const matchElements = document.querySelectorAll('[class*="match"], [class*="event"], [class*="game"], [class*="Event"]');
        matchElements.forEach(el => {
          const text = el.textContent?.trim();
          if (text && text.length > 0 && text.length < 200) {
            results.matches.push(text);
          }
        });
        
        // Extract promotions/bonuses
        const promoElements = document.querySelectorAll('[class*="promo"], [class*="bonus"], [class*="offer"], [class*="Promo"]');
        promoElements.forEach(el => {
          const text = el.textContent?.trim();
          if (text && text.length > 0 && text.length < 200) {
            results.promotions.push(text);
          }
        });
        
        // Extract main navigation links
        const links = document.querySelectorAll('a[href]');
        const uniqueLinks = new Set();
        links.forEach(link => {
          const href = link.getAttribute('href');
          const text = link.textContent?.trim();
          if (href && text && text.length > 0 && text.length < 50) {
            uniqueLinks.add(JSON.stringify({ text, href }));
          }
        });
        results.links = Array.from(uniqueLinks).slice(0, 20).map(l => JSON.parse(l));
        
        // Extract buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
          const text = btn.textContent?.trim();
          if (text && text.length > 0 && text.length < 50) {
            results.buttons.push(text);
          }
        });
        
        // Get page structure
        results.pageInfo = {
          title: document.title,
          url: window.location.href,
          hasCanvas: document.querySelectorAll('canvas').length > 0,
          hasVideo: document.querySelectorAll('video').length > 0,
          formCount: document.querySelectorAll('form').length,
          imageCount: document.querySelectorAll('img').length,
          scriptCount: document.querySelectorAll('script').length
        };
        
        return results;
      });
      
      // Display extracted data
      console.log('📊 Extracted Data:\n');
      console.log('─'.repeat(60));
      
      if (data.pageInfo) {
        console.log('\n📄 Page Information:');
        console.log(`   Title: ${data.pageInfo.title}`);
        console.log(`   URL: ${data.pageInfo.url}`);
        console.log(`   Images: ${data.pageInfo.imageCount}`);
        console.log(`   Forms: ${data.pageInfo.formCount}`);
        console.log(`   Scripts: ${data.pageInfo.scriptCount}`);
      }
      
      if (data.sports.length > 0) {
        console.log('\n⚽ Sports Found:');
        [...new Set(data.sports)].slice(0, 10).forEach(sport => {
          console.log(`   • ${sport}`);
        });
      }
      
      if (data.matches.length > 0) {
        console.log('\n🎯 Matches/Events:');
        [...new Set(data.matches)].slice(0, 5).forEach(match => {
          console.log(`   • ${match.substring(0, 100)}`);
        });
      }
      
      if (data.promotions.length > 0) {
        console.log('\n🎁 Promotions:');
        [...new Set(data.promotions)].slice(0, 5).forEach(promo => {
          console.log(`   • ${promo.substring(0, 100)}`);
        });
      }
      
      if (data.links.length > 0) {
        console.log('\n🔗 Main Links:');
        data.links.slice(0, 10).forEach(link => {
          console.log(`   • ${link.text}: ${link.href}`);
        });
      }
      
      if (data.buttons.length > 0) {
        console.log('\n🔘 Buttons:');
        [...new Set(data.buttons)].slice(0, 10).forEach(btn => {
          console.log(`   • ${btn}`);
        });
      }
      
      // Take screenshot
      console.log('\n📸 Taking screenshot...');
      await page.screenshot({ 
        path: 'favbet-screenshot.png',
        fullPage: false 
      });
      console.log('   Screenshot saved as favbet-screenshot.png');
      
      // Save data to JSON
      const output = {
        url: 'https://favbet.ua',
        timestamp: new Date().toISOString(),
        ...data
      };
      
      await fs.writeFile('favbet-data.json', JSON.stringify(output, null, 2));
      console.log('\n💾 Data saved to favbet-data.json');
      
    } catch (navigationError) {
      console.error('❌ Navigation error:', navigationError.message);
      
      // Try alternative approach
      console.log('\n🔄 Trying alternative approach...');
      
      const response = await page.goto('https://favbet.ua', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });
      
      console.log(`Response status: ${response.status()}`);
      
      if (response.status() === 403) {
        console.log('\n⚠️  Site is blocking automated access');
        console.log('   The site has anti-bot protection (Cloudflare, etc.)');
      }
    }
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    await browser.close();
    console.log('\n✅ Browser closed');
  }
}

// Run the scraper
console.log('╔════════════════════════════════════════════════════════╗');
console.log('║          PUPPETEER WEB SCRAPER                          ║');
console.log('╚════════════════════════════════════════════════════════╝');

scrapeFavbet().catch(console.error);