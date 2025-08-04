import { motion } from 'framer-motion'

export default function MinimalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-limeGreen font-bold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Pricing</a></li>
              <li><a href="#demo" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-limeGreen font-bold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Contact</a></li>
              <li><a href="#responsible" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Responsible Gaming</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-limeGreen font-bold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="text-beigeCream/70 hover:text-limeGreen transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-beigeCream/10 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/assets/images/flamingo_logo.png" alt="Flamingo AI" className="w-8 h-8" />
            <span className="text-beigeCream/50 text-sm">
              © {currentYear} Flamingo AI. All rights reserved.
            </span>
          </div>
          
          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-beigeCream/50 hover:text-limeGreen transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-beigeCream/50 hover:text-limeGreen transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}