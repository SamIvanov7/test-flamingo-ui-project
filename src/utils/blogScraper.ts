import axios from 'axios';
import * as cheerio from 'cheerio';

export interface BlogPost {
  title: string;
  url: string;
  author?: string;
  date?: string;
  excerpt?: string;
  content?: string;
  tags?: string[];
  imageUrl?: string;
  readTime?: string;
}

export interface ScraperConfig {
  baseUrl: string;
  selectors: {
    articles?: string;
    title?: string;
    url?: string;
    author?: string;
    date?: string;
    excerpt?: string;
    content?: string;
    tags?: string;
    image?: string;
    readTime?: string;
  };
  pagination?: {
    selector: string;
    limit?: number;
  };
}

export class BlogScraper {
  private config: ScraperConfig;

  constructor(config: ScraperConfig) {
    this.config = config;
  }

  async scrapeListPage(pageUrl: string): Promise<BlogPost[]> {
    try {
      const response = await axios.get(pageUrl);
      const $ = cheerio.load(response.data);
      const posts: BlogPost[] = [];

      const { selectors } = this.config;
      
      $(selectors.articles || 'article').each((_, element) => {
        const $element = $(element);
        
        const post: BlogPost = {
          title: this.extractText($element, selectors.title || 'h2'),
          url: this.extractUrl($element, selectors.url || 'a'),
        };

        if (selectors.author) {
          post.author = this.extractText($element, selectors.author);
        }

        if (selectors.date) {
          post.date = this.extractText($element, selectors.date);
        }

        if (selectors.excerpt) {
          post.excerpt = this.extractText($element, selectors.excerpt);
        }

        if (selectors.tags) {
          post.tags = this.extractTags($element, selectors.tags);
        }

        if (selectors.image) {
          post.imageUrl = this.extractImage($element, selectors.image);
        }

        if (selectors.readTime) {
          post.readTime = this.extractText($element, selectors.readTime);
        }

        if (post.title && post.url) {
          posts.push(post);
        }
      });

      return posts;
    } catch (error) {
      console.error('Error scraping list page:', error);
      throw error;
    }
  }

  async scrapeFullPost(postUrl: string): Promise<BlogPost> {
    try {
      const response = await axios.get(postUrl);
      const $ = cheerio.load(response.data);
      const { selectors } = this.config;

      const post: BlogPost = {
        title: this.extractText($, selectors.title || 'h1'),
        url: postUrl,
        content: this.extractContent($, selectors.content || '.post-content, .article-content, main'),
      };

      if (selectors.author) {
        post.author = this.extractText($, selectors.author);
      }

      if (selectors.date) {
        post.date = this.extractText($, selectors.date);
      }

      if (selectors.tags) {
        post.tags = this.extractTags($, selectors.tags);
      }

      if (selectors.image) {
        post.imageUrl = this.extractImage($, selectors.image);
      }

      if (selectors.readTime) {
        post.readTime = this.extractText($, selectors.readTime);
      }

      return post;
    } catch (error) {
      console.error('Error scraping full post:', error);
      throw error;
    }
  }

  async scrapeAllPages(startUrl?: string, maxPages?: number): Promise<BlogPost[]> {
    const allPosts: BlogPost[] = [];
    let currentUrl = startUrl || this.config.baseUrl;
    let pageCount = 0;
    const limit = maxPages || this.config.pagination?.limit || 10;

    while (currentUrl && pageCount < limit) {
      try {
        const posts = await this.scrapeListPage(currentUrl);
        allPosts.push(...posts);
        
        if (this.config.pagination) {
          const nextUrl = await this.getNextPageUrl(currentUrl);
          currentUrl = nextUrl || '';
          pageCount++;
        } else {
          break;
        }
      } catch (error) {
        console.error(`Error scraping page ${pageCount + 1}:`, error);
        break;
      }
    }

    return allPosts;
  }

  private async getNextPageUrl(currentUrl: string): Promise<string | null> {
    try {
      const response = await axios.get(currentUrl);
      const $ = cheerio.load(response.data);
      
      if (this.config.pagination) {
        const nextLink = $(this.config.pagination.selector).attr('href');
        if (nextLink) {
          return new URL(nextLink, this.config.baseUrl).href;
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error getting next page URL:', error);
      return null;
    }
  }

  private extractText($element: cheerio.CheerioAPI | cheerio.Cheerio<any>, selector: string): string {
    if ('find' in $element) {
      return $element.find(selector).first().text().trim();
    }
    return $element(selector).first().text().trim();
  }

  private extractUrl($element: cheerio.Cheerio<any>, selector: string): string {
    const href = $element.find(selector).first().attr('href') || '';
    if (href.startsWith('http')) {
      return href;
    }
    return new URL(href, this.config.baseUrl).href;
  }

  private extractContent($: cheerio.CheerioAPI, selector: string): string {
    const content = $(selector).first();
    content.find('script, style').remove();
    return content.text().trim();
  }

  private extractTags($element: cheerio.CheerioAPI | cheerio.Cheerio<any>, selector: string): string[] {
    const tags: string[] = [];
    
    if ('find' in $element) {
      $element.find(selector).each((_, el) => {
        const $el = cheerio.load(el);
        tags.push($el.text().trim());
      });
    } else {
      const $: any = $element;
      $(selector).each((_: any, el: any) => {
        tags.push($(el).text().trim());
      });
    }
    
    return tags;
  }

  private extractImage($element: cheerio.CheerioAPI | cheerio.Cheerio<any>, selector: string): string {
    let src: string | undefined;
    
    if ('find' in $element) {
      src = $element.find(selector).first().attr('src') || 
            $element.find(selector).first().attr('data-src');
    } else {
      src = $element(selector).first().attr('src') || 
            $element(selector).first().attr('data-src');
    }
    
    if (src) {
      if (src.startsWith('http')) {
        return src;
      }
      return new URL(src, this.config.baseUrl).href;
    }
    
    return '';
  }
}

export async function scrapeBlogWithApify(config: {
  startUrls: string[];
  selectors: ScraperConfig['selectors'];
  maxPages?: number;
}): Promise<BlogPost[]> {
  const allPosts: BlogPost[] = [];
  
  for (const url of config.startUrls) {
    const urlObj = new URL(url);
    const scraper = new BlogScraper({
      baseUrl: `${urlObj.protocol}//${urlObj.host}`,
      selectors: config.selectors,
      pagination: {
        selector: 'a.next, .pagination a:last-child, [rel="next"]',
        limit: config.maxPages
      }
    });
    
    const posts = await scraper.scrapeAllPages(url, config.maxPages);
    allPosts.push(...posts);
  }
  
  return allPosts;
}