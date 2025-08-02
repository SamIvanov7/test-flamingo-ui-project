import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })

  const contactReasons = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'whistleblower', label: 'Casino Whistleblower' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'legal', label: 'Legal Matter' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen"
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-limeGreen">Get in</span>{' '}
              <span className="text-pink">Touch</span>
            </h1>
            <p className="text-xl text-beigeCream/80 max-w-3xl mx-auto">
              Have insider information? Need support? Want to partner? 
              We're here to help you beat the house.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glassmorphism rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold text-limeGreen mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-beigeCream mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             focus:border-limeGreen/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-beigeCream mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             focus:border-limeGreen/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-beigeCream mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream focus:outline-none focus:border-limeGreen/50
                             transition-colors"
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value} className="bg-darkGreen">
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-beigeCream mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             focus:border-limeGreen/50 transition-colors resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-limeGreen text-darkGreen font-bold rounded-xl
                           hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glassmorphism rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-pink mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-limeGreen/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-limeGreen">Email</h4>
                      <p className="text-beigeCream/80">support@flamingo.ai</p>
                      <p className="text-beigeCream/60 text-sm">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-limeGreen/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-limeGreen">Live Chat</h4>
                      <p className="text-beigeCream/80">Available 24/7</p>
                      <p className="text-beigeCream/60 text-sm">For urgent support</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-limeGreen/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-limeGreen">Secure Line</h4>
                      <p className="text-beigeCream/80">whistleblower@flamingo.ai</p>
                      <p className="text-beigeCream/60 text-sm">End-to-end encrypted</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Contacts */}
              <div className="glassmorphism rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-pink mb-6">Special Inquiries</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h4 className="font-semibold text-limeGreen mb-2">🕵️ Casino Whistleblowers</h4>
                    <p className="text-beigeCream/70 text-sm">
                      Have insider information about casino manipulation? Contact us securely. 
                      Your identity will be protected.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl">
                    <h4 className="font-semibold text-limeGreen mb-2">🤝 Partnership Opportunities</h4>
                    <p className="text-beigeCream/70 text-sm">
                      Interested in joining the revolution? We're always looking for allies 
                      in exposing casino deception.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl">
                    <h4 className="font-semibold text-limeGreen mb-2">📰 Media Inquiries</h4>
                    <p className="text-beigeCream/70 text-sm">
                      Writing about casino manipulation or AI gambling analysis? 
                      We have data and experts available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-pink/10 border border-pink/30 rounded-2xl p-6">
                <h4 className="font-semibold text-pink mb-2">🛡️ Your Privacy Matters</h4>
                <p className="text-beigeCream/70 text-sm">
                  All communications are encrypted. We never share your information with 
                  casinos or third parties. Your secrets are safe with us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-limeGreen">Common</span>{' '}
              <span className="text-pink">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly will I get a response?",
                a: "Email inquiries are answered within 24 hours. Live chat is available 24/7 for immediate assistance."
              },
              {
                q: "Is my information secure?",
                a: "Yes. All communications are encrypted, and we never share your data with casinos or any third parties."
              },
              {
                q: "Can I remain anonymous?",
                a: "Absolutely. We offer anonymous communication channels, especially for whistleblowers and sensitive information."
              },
              {
                q: "Do you offer phone support?",
                a: "Phone support is available for Whale plan members. All others can use email or live chat."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-6"
              >
                <h3 className="font-bold text-limeGreen mb-3">{item.q}</h3>
                <p className="text-beigeCream/80">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to <span className="text-limeGreen">Join the Revolution</span>?
            </h2>
            <p className="text-lg text-beigeCream/80 max-w-2xl mx-auto mb-8">
              Don't wait for casinos to take more of your money. Start winning with AI-powered insights today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/dashboard'}
              className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                       hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}