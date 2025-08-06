import { BlogScraper, scrapeBlogWithApify } from './blogScraper';
import { getConfigForPlatform } from '../config/scraperConfigs';
import * as puppeteer from 'puppeteer';

async function basicScrapingExample() {
  console.log('Basic Blog Scraping Example');
  console.log('=' .repeat(50));
  
  const wordpressScraper = new BlogScraper(
    getConfigForPlatform('wordpress', 'https://example-blog.com')
  );
  
  try {
    console.log('\n1. Scraping blog list page...');
    const posts = await wordpressScraper.scrapeListPage('https://example-blog.com/blog');
    console.log(`Found ${posts.length} posts`);
    
    posts.slice(0, 3).forEach((post, index) => {
      console.log(`\nPost ${index + 1}:`);
      console.log(`  Title: ${post.title}`);
      console.log(`  URL: ${post.url}`);
      console.log(`  Author: ${post.author || 'N/A'}`);
      console.log(`  Date: ${post.date || 'N/A'}`);
    });
    
    if (posts.length > 0) {
      console.log('\n2. Scraping full post content...');
      const fullPost = await wordpressScraper.scrapeFullPost(posts[0].url);
      console.log(`\nFull Post Details:`);
      console.log(`  Title: ${fullPost.title}`);
      console.log(`  Content Length: ${fullPost.content?.length || 0} characters`);
      console.log(`  Tags: ${fullPost.tags?.join(', ') || 'None'}`);
    }
  } catch (error) {
    console.error('Error during scraping:', error);
  }
}

async function multiPlatformExample() {
  console.log('\nMulti-Platform Scraping Example');
  console.log('=' .repeat(50));
  
  const platforms = [
    { name: 'Medium', url: 'https://medium.com/tag/javascript' },
    { name: 'Dev.to', url: 'https://dev.to/t/javascript' },
  ];
  
  for (const platform of platforms) {
    console.log(`\nScraping ${platform.name}...`);
    const scraper = new BlogScraper(
      getConfigForPlatform(platform.name, platform.url)
    );
    
    try {
      const posts = await scraper.scrapeListPage(platform.url);
      console.log(`Found ${posts.length} posts on ${platform.name}`);
      
      if (posts.length > 0) {
        console.log(`Sample post: "${posts[0].title}"`);
      }
    } catch (error) {
      console.error(`Error scraping ${platform.name}:`, error);
    }
  }
}

async function apifyStyleExample() {
  console.log('\nApify-Style Scraping Example');
  console.log('=' .repeat(50));
  
  const config = {
    startUrls: [
      'https://example-blog.com/blog',
      'https://another-blog.com/posts'
    ],
    selectors: {
      articles: 'article',
      title: 'h2',
      url: 'h2 a',
      author: '.author',
      date: '.date',
      excerpt: '.excerpt',
      tags: '.tags a'
    },
    maxPages: 3
  };
  
  try {
    console.log('\nScraping multiple blogs with pagination...');
    const allPosts = await scrapeBlogWithApify(config);
    console.log(`Total posts scraped: ${allPosts.length}`);
    
    const postsByDomain = allPosts.reduce((acc, post) => {
      const domain = new URL(post.url).hostname;
      acc[domain] = (acc[domain] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    console.log('\nPosts by domain:');
    Object.entries(postsByDomain).forEach(([domain, count]) => {
      console.log(`  ${domain}: ${count} posts`);
    });
  } catch (error) {
    console.error('Error during Apify-style scraping:', error);
  }
}

async function puppeteerAdvancedExample() {
  console.log('\nAdvanced Puppeteer Scraping Example');
  console.log('=' .repeat(50));
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    console.log('\nNavigating to blog with JavaScript rendering...');
    await page.goto('https://example-spa-blog.com', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    await page.waitForSelector('article', { timeout: 10000 });
    
    const posts = await page.evaluate(() => {
      const articles = document.querySelectorAll('article');
      return Array.from(articles).map(article => ({
        title: article.querySelector('h2')?.textContent?.trim() || '',
        url: article.querySelector('a')?.href || '',
        author: article.querySelector('.author')?.textContent?.trim() || '',
        date: article.querySelector('time')?.textContent?.trim() || '',
        excerpt: article.querySelector('.excerpt')?.textContent?.trim() || ''
      }));
    });
    
    console.log(`Found ${posts.length} posts in SPA blog`);
    posts.slice(0, 3).forEach((post, index) => {
      console.log(`\nPost ${index + 1}: ${post.title}`);
    });
    
    console.log('\nScrolling to load more posts...');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const morePosts = await page.evaluate(() => {
      return document.querySelectorAll('article').length;
    });
    console.log(`Total posts after scrolling: ${morePosts}`);
    
  } catch (error) {
    console.error('Error during Puppeteer scraping:', error);
  } finally {
    await browser.close();
  }
}

async function customScraperExample() {
  console.log('\nCustom Scraper Configuration Example');
  console.log('=' .repeat(50));
  
  const customConfig = {
    baseUrl: 'https://your-custom-blog.com',
    selectors: {
      articles: '.blog-item',
      title: '.blog-item-title',
      url: '.blog-item-link',
      author: '.blog-item-author span',
      date: '.blog-item-date',
      excerpt: '.blog-item-summary',
      content: '.blog-post-body',
      tags: '.blog-item-categories a',
      image: '.blog-item-thumbnail img',
      readTime: '.reading-time-estimate'
    },
    pagination: {
      selector: 'a.pagination-next',
      limit: 5
    }
  };
  
  const customScraper = new BlogScraper(customConfig);
  
  try {
    console.log('\nScraping with custom selectors...');
    const posts = await customScraper.scrapeAllPages(
      'https://your-custom-blog.com/articles',
      3
    );
    
    console.log(`Successfully scraped ${posts.length} posts across multiple pages`);
    
    const stats = {
      withImages: posts.filter(p => p.imageUrl).length,
      withTags: posts.filter(p => p.tags && p.tags.length > 0).length,
      withAuthors: posts.filter(p => p.author).length,
      withReadTime: posts.filter(p => p.readTime).length
    };
    
    console.log('\nContent Statistics:');
    console.log(`  Posts with images: ${stats.withImages}`);
    console.log(`  Posts with tags: ${stats.withTags}`);
    console.log(`  Posts with authors: ${stats.withAuthors}`);
    console.log(`  Posts with read time: ${stats.withReadTime}`);
    
  } catch (error) {
    console.error('Error with custom scraper:', error);
  }
}

export async function runAllExamples() {
  console.log('\n🚀 Starting Blog Scraper Examples\n');
  
  try {
    await basicScrapingExample();
    await multiPlatformExample();
    await apifyStyleExample();
    await puppeteerAdvancedExample();
    await customScraperExample();
    
    console.log('\n✅ All examples completed!');
  } catch (error) {
    console.error('\n❌ Error running examples:', error);
  }
}

if (require.main === module) {
  runAllExamples();
}