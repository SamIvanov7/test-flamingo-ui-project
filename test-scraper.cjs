const axios = require('axios');
const cheerio = require('cheerio');

// Simple blog scraper demonstration
class BlogScraper {
  constructor(config) {
    this.config = config;
  }

  async scrapeDevTo() {
    console.log('\n🔍 Scraping Dev.to JavaScript articles...\n');
    console.log('=' .repeat(60));
    
    try {
      const response = await axios.get('https://dev.to/t/javascript', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      const $ = cheerio.load(response.data);
      const posts = [];
      
      // Dev.to specific selectors
      $('.crayons-story').slice(0, 5).each((index, element) => {
        const $element = $(element);
        
        const title = $element.find('h2.crayons-story__title').text().trim();
        const author = $element.find('.crayons-story__author-name').text().trim();
        const url = 'https://dev.to' + $element.find('a.crayons-story__hidden-navigation-link').attr('href');
        const tags = [];
        $element.find('.crayons-story__tags a').each((_, tag) => {
          tags.push($(tag).text().trim());
        });
        
        const readTime = $element.find('.crayons-story__save time').text().trim();
        const reactions = $element.find('.crayons-story__reactions').text().trim();
        
        posts.push({
          title,
          author,
          url,
          tags,
          readTime,
          reactions
        });
      });
      
      return posts;
    } catch (error) {
      console.error('Error scraping Dev.to:', error.message);
      return [];
    }
  }

  async scrapeHackerNews() {
    console.log('\n🔍 Scraping Hacker News front page...\n');
    console.log('=' .repeat(60));
    
    try {
      const response = await axios.get('https://news.ycombinator.com', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      const $ = cheerio.load(response.data);
      const posts = [];
      
      $('.athing').slice(0, 5).each((index, element) => {
        const $element = $(element);
        const $next = $element.next();
        
        const title = $element.find('.titleline > a').first().text();
        const url = $element.find('.titleline > a').first().attr('href');
        const points = $next.find('.score').text();
        const author = $next.find('.hnuser').text();
        const comments = $next.find('a:contains("comment")').text();
        const age = $next.find('.age').text();
        
        posts.push({
          title,
          url: url?.startsWith('http') ? url : `https://news.ycombinator.com/${url}`,
          points,
          author,
          comments: comments || '0 comments',
          age
        });
      });
      
      return posts;
    } catch (error) {
      console.error('Error scraping Hacker News:', error.message);
      return [];
    }
  }

  async scrapeRedditProgramming() {
    console.log('\n🔍 Scraping Reddit r/programming...\n');
    console.log('=' .repeat(60));
    
    try {
      const response = await axios.get('https://old.reddit.com/r/programming/', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      const $ = cheerio.load(response.data);
      const posts = [];
      
      $('.thing').slice(0, 5).each((index, element) => {
        const $element = $(element);
        
        const title = $element.find('a.title').text();
        const url = $element.find('a.title').attr('href');
        const author = $element.find('.author').text();
        const upvotes = $element.find('.score.unvoted').text();
        const comments = $element.find('.comments').text();
        const timeAgo = $element.find('time').text();
        
        if (title && url) {
          posts.push({
            title,
            url: url.startsWith('http') ? url : `https://reddit.com${url}`,
            author,
            upvotes: upvotes || '0 points',
            comments: comments || '0 comments',
            timeAgo
          });
        }
      });
      
      return posts;
    } catch (error) {
      console.error('Error scraping Reddit:', error.message);
      return [];
    }
  }
}

// Display functions
function displayDevToPosts(posts) {
  console.log('\n📚 Dev.to JavaScript Articles:');
  console.log('─'.repeat(60));
  
  posts.forEach((post, index) => {
    console.log(`\n${index + 1}. ${post.title}`);
    console.log(`   👤 Author: ${post.author}`);
    console.log(`   🔗 URL: ${post.url}`);
    console.log(`   🏷️  Tags: ${post.tags.join(', ') || 'None'}`);
    console.log(`   ⏱️  Read time: ${post.readTime || 'N/A'}`);
    console.log(`   ❤️  Reactions: ${post.reactions || '0'}`);
  });
}

function displayHackerNewsPosts(posts) {
  console.log('\n📰 Hacker News Top Stories:');
  console.log('─'.repeat(60));
  
  posts.forEach((post, index) => {
    console.log(`\n${index + 1}. ${post.title}`);
    console.log(`   🔗 URL: ${post.url}`);
    console.log(`   👤 Author: ${post.author}`);
    console.log(`   ⬆️  Points: ${post.points}`);
    console.log(`   💬 ${post.comments}`);
    console.log(`   ⏰ ${post.age}`);
  });
}

function displayRedditPosts(posts) {
  console.log('\n👽 Reddit r/programming:');
  console.log('─'.repeat(60));
  
  posts.forEach((post, index) => {
    console.log(`\n${index + 1}. ${post.title}`);
    console.log(`   🔗 URL: ${post.url}`);
    console.log(`   👤 u/${post.author}`);
    console.log(`   ⬆️  ${post.upvotes}`);
    console.log(`   💬 ${post.comments}`);
  });
}

// Main execution
async function runDemo() {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║          🚀 BLOG SCRAPER DEMONSTRATION                  ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log('\nThis demo will scrape articles from popular tech sites.\n');
  
  const scraper = new BlogScraper();
  
  // Scrape Dev.to
  const devToPosts = await scraper.scrapeDevTo();
  if (devToPosts.length > 0) {
    displayDevToPosts(devToPosts);
  }
  
  // Scrape Hacker News
  const hnPosts = await scraper.scrapeHackerNews();
  if (hnPosts.length > 0) {
    displayHackerNewsPosts(hnPosts);
  }
  
  // Scrape Reddit
  const redditPosts = await scraper.scrapeRedditProgramming();
  if (redditPosts.length > 0) {
    displayRedditPosts(redditPosts);
  }
  
  // Summary
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║                    📊 SUMMARY                           ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(`\n✅ Successfully scraped:`);
  console.log(`   • ${devToPosts.length} posts from Dev.to`);
  console.log(`   • ${hnPosts.length} posts from Hacker News`);
  console.log(`   • ${redditPosts.length} posts from Reddit`);
  console.log(`\n📦 Total posts scraped: ${devToPosts.length + hnPosts.length + redditPosts.length}`);
  
  // Export example
  const allPosts = {
    devto: devToPosts,
    hackernews: hnPosts,
    reddit: redditPosts,
    timestamp: new Date().toISOString()
  };
  
  // Save to file
  const fs = require('fs');
  const outputFile = 'scraped-posts.json';
  fs.writeFileSync(outputFile, JSON.stringify(allPosts, null, 2));
  console.log(`\n💾 Results saved to: ${outputFile}`);
  
  console.log('\n✨ Demo complete!\n');
}

// Run the demo
runDemo().catch(console.error);