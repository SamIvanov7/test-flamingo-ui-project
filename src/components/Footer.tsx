import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const footerLinks = [
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.useCase'), path: '/use-case' },
    { name: t('navigation.pricing'), path: '/pricing' },
    { name: t('navigation.blog'), path: '/blog' },
    { name: t('navigation.contact'), path: '/contact' }
  ]

  const socialLinks = [
    { icon: '𝕏', href: 'https://twitter.com/flamingoai', label: 'Twitter' },
    { icon: '📧', href: 'mailto:support@flamingo.ai', label: 'Email' },
    { icon: '💬', href: 'https://t.me/flamingo_disruptors', label: 'Telegram' }
  ]

  return (
    <footer className="relative bg-darkGreen overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-limeGreen/10" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink/20 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-limeGreen/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/images/logo-variant-3.png" 
                alt="flamingo.ai" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-beigeCream">flamingo.ai</h3>
            </div>
            <p className="text-sm sm:text-base text-beigeCream/70 mb-6">
              {t('common.appName')} - Revolutionizing gaming with quantum-neural analysis. 
              We prove that true randomness is a myth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-limeGreen/20 rounded-full flex items-center justify-center
                           hover:bg-limeGreen/30 hover:shadow-[0_0_20px_rgba(171,248,11,0.3)] 
                           transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-limeGreen text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold text-limeGreen mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <motion.button
                    onClick={() => navigate(link.path)}
                    whileHover={{ x: 5 }}
                    className="text-sm sm:text-base text-beigeCream/70 hover:text-limeGreen 
                             transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold text-limeGreen mb-6">Stay Updated</h4>
            <p className="text-sm sm:text-base text-beigeCream/70 mb-4">
              Get the latest updates on our quantum-neural breakthroughs.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 
                         rounded-lg text-beigeCream placeholder-beigeCream/50 focus:outline-none
                         focus:border-limeGreen/50 focus:bg-white/15 transition-all duration-300"
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-limeGreen text-darkGreen font-bold rounded-lg
                         hover:bg-limeGreen/90 hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] 
                         transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-xs sm:text-sm text-beigeCream/60 mb-4 md:mb-0">
            © 2024 flamingo.ai. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-beigeCream/60 hover:text-limeGreen transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-beigeCream/60 hover:text-limeGreen transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-beigeCream/60 hover:text-limeGreen transition-colors duration-300"
            >
              Responsible Gaming
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}