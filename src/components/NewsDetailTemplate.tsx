import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Bookmark, 
  ThumbsUp,
  MessageCircle,
  ArrowLeft,
  Eye,
  TrendingUp,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Tag,
  Share2
} from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
    role?: string;
  };
  publishDate: string;
  lastUpdated?: string;
  readTime: string;
  viewCount?: number;
  category: string;
  tags: string[];
  featuredImage: {
    url: string;
    caption?: string;
    credit?: string;
  };
  content: string;
  excerpt?: string;
  relatedArticles?: {
    id: string;
    title: string;
    image: string;
    date: string;
    category: string;
  }[];
  comments?: {
    id: string;
    author: string;
    date: string;
    content: string;
    likes?: number;
  }[];
}

interface NewsDetailTemplateProps {
  article: Article;
  onBack?: () => void;
  onShare?: (platform: string) => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
}

const NewsDetailTemplate: React.FC<NewsDetailTemplateProps> = ({
  article,
  onBack,
  onShare,
  onBookmark,
  isBookmarked = false
}) => {
  const shareUrl = window.location.href;
  
  const handleShare = (platform: string) => {
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    
    onShare?.(platform);
  };

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-limeGreen/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header Navigation */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-40 glassmorphism border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack || (() => window.history.back())}
              className="flex items-center gap-2 text-beigeCream hover:text-limeGreen transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">Back to Articles</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleShare('copy')}
                className="p-2 rounded-full glassmorphism hover:bg-white/10 transition-all"
                title="Copy link"
              >
                <Link2 className="w-5 h-5 text-beigeCream" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onBookmark}
                className={`p-2 rounded-full glassmorphism hover:bg-white/10 transition-all ${
                  isBookmarked ? 'text-limeGreen' : 'text-beigeCream'
                }`}
                title="Bookmark"
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Article Header */}
      <header className="relative">
        {/* Featured Image */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden"
        >
          <img
            src={article.featuredImage.url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/90 via-darkGreen/40 to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 mb-4"
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-pink/20 backdrop-blur-sm rounded-full text-sm font-bold text-pink"
                >
                  {article.category}
                </motion.span>
                {article.tags.slice(0, 2).map((tag, index) => (
                  <motion.span 
                    key={tag} 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-beigeCream"
                  >
                    #{tag}
                  </motion.span>
                ))}
              </motion.div>
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-limeGreen mb-4 leading-tight"
              >
                {article.title}
              </motion.h1>
              {article.subtitle && (
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg sm:text-xl text-beigeCream/90"
                >
                  {article.subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
        
        {/* Image Caption */}
        {(article.featuredImage.caption || article.featuredImage.credit) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="glassmorphism px-6 sm:px-8 lg:px-12 py-2"
          >
            <div className="max-w-4xl mx-auto text-sm text-beigeCream/60">
              {article.featuredImage.caption && <span>{article.featuredImage.caption}</span>}
              {article.featuredImage.credit && (
                <span className="ml-2 text-pink">Credit: {article.featuredImage.credit}</span>
              )}
            </div>
          </motion.div>
        )}
      </header>

      {/* Article Meta & Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-8 relative z-10">
        {/* Author & Meta Info */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/20"
        >
          <div className="flex items-center gap-4">
            {article.author.avatar ? (
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-limeGreen/50"
              />
            ) : (
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-limeGreen flex items-center justify-center text-darkGreen font-bold"
              >
                {article.author.name.charAt(0)}
              </motion.div>
            )}
            <div>
              <div className="font-semibold text-limeGreen">{article.author.name}</div>
              {article.author.role && (
                <div className="text-sm text-beigeCream/60">{article.author.role}</div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-beigeCream/60">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <Calendar className="w-4 h-4 text-pink" />
              <span>{new Date(article.publishDate).toLocaleDateString()}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <Clock className="w-4 h-4 text-pink" />
              <span>{article.readTime} min read</span>
            </motion.div>
            {article.viewCount && (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1"
              >
                <Eye className="w-4 h-4 text-pink" />
                <span className="text-limeGreen">{article.viewCount.toLocaleString()} views</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Share Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-between py-4 border-b border-white/20"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-beigeCream/60 mr-2">Share:</span>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-full glassmorphism hover:bg-white/10 transition-all"
              title="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-beigeCream hover:text-limeGreen" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-full glassmorphism hover:bg-white/10 transition-all"
              title="Share on Twitter"
            >
              <Twitter className="w-5 h-5 text-beigeCream hover:text-limeGreen" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full glassmorphism hover:bg-white/10 transition-all"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-beigeCream hover:text-limeGreen" />
            </motion.button>
          </div>
          
          {article.lastUpdated && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-beigeCream/50"
            >
              Updated: {new Date(article.lastUpdated).toLocaleDateString()}
            </motion.div>
          )}
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="py-8"
        >
          {article.excerpt && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-xl text-beigeCream font-medium leading-relaxed mb-8 border-l-4 border-limeGreen pl-6"
            >
              {article.excerpt}
            </motion.div>
          )}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="article-content prose prose-invert prose-lg max-w-none
                     prose-headings:text-limeGreen prose-headings:font-bold
                     prose-p:text-beigeCream/90 prose-p:leading-relaxed
                     prose-a:text-pink prose-a:no-underline hover:prose-a:text-limeGreen
                     prose-strong:text-limeGreen prose-strong:font-bold
                     prose-ul:text-beigeCream/80 prose-li:text-beigeCream/80
                     prose-blockquote:border-l-4 prose-blockquote:border-pink 
                     prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                     prose-blockquote:text-beigeCream/80 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>

        {/* Author Bio */}
        {article.author.bio && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 my-8 border border-white/20"
          >
            <h3 className="font-bold text-pink mb-3">About the Author</h3>
            <div className="flex gap-4">
              {article.author.avatar && (
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-limeGreen/50"
                />
              )}
              <div>
                <div className="font-semibold text-limeGreen mb-1">{article.author.name}</div>
                <p className="text-beigeCream/80">{article.author.bio}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tags */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 py-6 border-t border-white/20"
        >
          <span className="text-sm text-beigeCream/60 mr-2 flex items-center gap-1">
            <Tag className="w-4 h-4 text-pink" />
            Tags:
          </span>
          {article.tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={`/blog?tag=${tag}`}
                className="inline-block px-3 py-1 glassmorphism rounded-full text-sm text-beigeCream/80
                         hover:bg-white/10 hover:text-limeGreen transition-all duration-300
                         hover:shadow-[0_0_15px_rgba(171,248,11,0.3)]"
              >
                #{tag}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <motion.section 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="py-8 border-t border-white/20"
          >
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-limeGreen mb-6 flex items-center gap-2"
            >
              <TrendingUp className="w-6 h-6 text-pink" />
              Related Articles
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {article.relatedArticles.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link
                    to={`/blog/${related.id}`}
                    className="block group glassmorphism rounded-2xl overflow-hidden border border-white/20
                             hover:border-pink/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,159,206,0.3)]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-pink/20 backdrop-blur-sm rounded-full text-xs font-bold text-pink">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-beigeCream group-hover:text-limeGreen transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-beigeCream/60 mt-2">{related.date}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Comments Section */}
        {article.comments && article.comments.length > 0 && (
          <motion.section 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="py-8 border-t border-white/20"
          >
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-limeGreen mb-6 flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6 text-pink" />
              Comments ({article.comments.length})
            </motion.h2>
            <div className="space-y-6">
              {article.comments.map((comment, index) => (
                <motion.div 
                  key={comment.id} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="glassmorphism rounded-xl p-4 border border-white/10 hover:border-pink/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-pink to-limeGreen flex items-center justify-center text-darkGreen font-bold"
                      >
                        {comment.author.charAt(0)}
                      </motion.div>
                      <div>
                        <div className="font-medium text-limeGreen">{comment.author}</div>
                        <div className="text-sm text-beigeCream/60">{comment.date}</div>
                      </div>
                    </div>
                    {comment.likes !== undefined && (
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 text-beigeCream/60 hover:text-pink transition-colors"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{comment.likes}</span>
                      </motion.button>
                    )}
                  </div>
                  <p className="text-beigeCream/80">{comment.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.article>
  );
};

export default NewsDetailTemplate;