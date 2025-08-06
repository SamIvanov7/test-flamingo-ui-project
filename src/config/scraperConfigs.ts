import { ScraperConfig } from '../utils/blogScraper';

export const MEDIUM_CONFIG: ScraperConfig = {
  baseUrl: 'https://medium.com',
  selectors: {
    articles: 'article',
    title: 'h2, h3',
    url: 'a[data-post-id], a[href*="/p/"]',
    author: '[data-testid="authorName"], .author-name',
    date: 'time',
    excerpt: 'p:first-of-type, .subtitle',
    content: '.post-content, [data-post-id] section',
    tags: 'a[href*="/tag/"]',
    image: 'img:first-of-type',
    readTime: '[data-testid="storyReadTime"], .readingTime'
  },
  pagination: {
    selector: 'a[rel="next"], button[aria-label="Next"]',
    limit: 5
  }
};

export const WORDPRESS_CONFIG: ScraperConfig = {
  baseUrl: '',
  selectors: {
    articles: 'article, .post',
    title: 'h2.entry-title, h1.entry-title',
    url: 'h2.entry-title a, h1.entry-title a, .read-more',
    author: '.author-name, .by-author, .entry-author',
    date: '.entry-date, time.published',
    excerpt: '.entry-summary, .excerpt',
    content: '.entry-content, .post-content',
    tags: '.tag-links a, .tags a',
    image: '.post-thumbnail img, .featured-image img',
    readTime: '.reading-time'
  },
  pagination: {
    selector: '.next.page-numbers, .nav-next a, a.next',
    limit: 10
  }
};

export const GHOST_CONFIG: ScraperConfig = {
  baseUrl: '',
  selectors: {
    articles: '.post-card, article.post',
    title: '.post-card-title, h2.post-title',
    url: '.post-card-link, a.post-link',
    author: '.post-card-author, .author-name',
    date: '.post-card-meta time, .post-date',
    excerpt: '.post-card-excerpt, .post-excerpt',
    content: '.post-content, .content',
    tags: '.post-card-tags a, .tag a',
    image: '.post-card-image img, .post-image img',
    readTime: '.reading-time'
  },
  pagination: {
    selector: 'a[rel="next"], .older-posts',
    limit: 10
  }
};

export const SUBSTACK_CONFIG: ScraperConfig = {
  baseUrl: '',
  selectors: {
    articles: '.post-preview, article',
    title: '.post-preview-title, h1.post-title',
    url: 'a.post-preview-link, a[href*="/p/"]',
    author: '.post-preview-author, .author-name',
    date: '.post-preview-date, time',
    excerpt: '.post-preview-description, .subtitle',
    content: '.post-content, .body',
    tags: '.post-tags a',
    image: '.post-preview-image img, .post-image img',
    readTime: '.post-preview-read-time'
  },
  pagination: {
    selector: 'a.next-page, button[aria-label="Next"]',
    limit: 10
  }
};

export const DEV_TO_CONFIG: ScraperConfig = {
  baseUrl: 'https://dev.to',
  selectors: {
    articles: '.crayons-story',
    title: 'h2.crayons-story__title',
    url: 'a.crayons-story__hidden-navigation-link',
    author: '.crayons-story__author-name',
    date: 'time',
    excerpt: '.crayons-story__snippet',
    content: '.crayons-article__body',
    tags: '.crayons-story__tags a',
    image: '.crayons-article__cover img',
    readTime: '.crayons-story__save'
  },
  pagination: {
    selector: 'a[rel="next"]',
    limit: 10
  }
};

export const HASHNODE_CONFIG: ScraperConfig = {
  baseUrl: '',
  selectors: {
    articles: 'article.blog-post-card',
    title: 'h1.blog-post-card-title',
    url: 'a.blog-post-card-wrapper',
    author: '.blog-post-card-author-name',
    date: '.blog-post-card-time',
    excerpt: '.blog-post-card-brief',
    content: '.blog-content',
    tags: '.blog-post-card-tags a',
    image: '.blog-post-card-cover img',
    readTime: '.blog-post-card-read-time'
  },
  pagination: {
    selector: 'button[aria-label="Next page"]',
    limit: 10
  }
};

export const CUSTOM_CONFIG: ScraperConfig = {
  baseUrl: '',
  selectors: {
    articles: '',
    title: '',
    url: '',
    author: '',
    date: '',
    excerpt: '',
    content: '',
    tags: '',
    image: '',
    readTime: ''
  },
  pagination: {
    selector: '',
    limit: 10
  }
};

export const getConfigForPlatform = (platform: string, baseUrl: string): ScraperConfig => {
  let config: ScraperConfig;
  
  switch (platform.toLowerCase()) {
    case 'medium':
      config = { ...MEDIUM_CONFIG };
      break;
    case 'wordpress':
      config = { ...WORDPRESS_CONFIG, baseUrl };
      break;
    case 'ghost':
      config = { ...GHOST_CONFIG, baseUrl };
      break;
    case 'substack':
      config = { ...SUBSTACK_CONFIG, baseUrl };
      break;
    case 'dev.to':
    case 'devto':
      config = { ...DEV_TO_CONFIG };
      break;
    case 'hashnode':
      config = { ...HASHNODE_CONFIG, baseUrl };
      break;
    default:
      config = { ...CUSTOM_CONFIG, baseUrl };
  }
  
  return config;
};