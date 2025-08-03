import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Mail, Twitter, Linkedin, Github, ArrowRight, Sparkles } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Use Cases', href: '#use-cases' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
  ],
  resources: [
    { name: 'Documentation', href: '#docs' },
    { name: 'API Reference', href: '#api' },
    { name: 'Community', href: '#community' },
    { name: 'Support', href: '#support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Responsible Gaming', href: '#responsible' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@flamingo.ai' },
]

export default function Footer() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-darkGreen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-transparent" />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-limeGreen/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Top section with logo and newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-limeGreen blur-xl opacity-50" />
                  <img 
                    src="/assets/images/logo-variant-3.png" 
                    alt="flamingo.ai" 
                    className="w-14 h-14 object-contain relative z-10"
                  />
                </div>
                <span className="text-2xl font-bold text-beigeCream">flamingo.ai</span>
              </div>
              <p className="text-beigeCream/70 max-w-md mb-6">
                Revolutionizing gaming with quantum-neural analysis. 
                We're proving that true randomness is a myth, one spin at a time.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-beigeCream/10 backdrop-blur-sm rounded-xl flex items-center justify-center
                             hover:bg-limeGreen/20 hover:border-limeGreen/50 border border-beigeCream/20
                             transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-beigeCream group-hover:text-limeGreen transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:text-right"
            >
              <h3 className="text-2xl font-bold text-beigeCream mb-4 flex items-center lg:justify-end gap-2">
                <Sparkles className="w-6 h-6 text-limeGreen" />
                Stay Ahead of the Game
              </h3>
              <p className="text-beigeCream/70 mb-6 lg:ml-auto max-w-md">
                Get exclusive insights, beta access, and quantum-neural breakthroughs delivered weekly.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3 bg-beigeCream/10 backdrop-blur-sm border border-beigeCream/20 
                           rounded-xl text-beigeCream placeholder-beigeCream/40 
                           focus:outline-none focus:border-limeGreen/50 focus:bg-beigeCream/15
                           transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-limeGreen text-darkGreen font-bold rounded-xl
                           hover:bg-limeGreen/90 hover:shadow-[0_0_30px_rgba(171,248,11,0.5)]
                           transition-all duration-300 flex items-center gap-2 group"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-limeGreen font-semibold text-lg mb-4 capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-beigeCream/60 hover:text-limeGreen transition-colors duration-300
                                 relative group inline-flex items-center"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-limeGreen 
                                       group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16 p-8 lg:p-12 rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink/20 to-limeGreen/20 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-darkGreen/50" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-beigeCream mb-4">
                Ready to Beat the House?
              </h2>
              <p className="text-beigeCream/70 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands who've discovered that the house doesn't always win.
                Start your journey with AI-powered gaming insights.
              </p>
              <motion.button
                onClick={() => navigate('/onboarding')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                         hover:shadow-[0_0_40px_rgba(171,248,11,0.6)] transition-all duration-300
                         inline-flex items-center gap-3 group"
              >
                Start Winning Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-limeGreen/10 rounded-full blur-3xl 
                          group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink/10 rounded-full blur-3xl 
                          group-hover:scale-125 transition-transform duration-700" />
          </motion.div>

          {/* Bottom section */}
          <div className="border-t border-beigeCream/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-beigeCream/50 text-sm">
                © {currentYear} flamingo.ai. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-beigeCream/50 hover:text-limeGreen transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-beigeCream/50 hover:text-limeGreen transition-colors">
                  Terms
                </a>
                <a href="#" className="text-beigeCream/50 hover:text-limeGreen transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}