import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, MessageSquare, Shield, Users, FileText, AlertTriangle, Check, X } from 'lucide-react'

export default function ContactPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const contactReasons = [
    { value: 'general', label: t('contact.form.subjects.general') },
    { value: 'support', label: t('contact.form.subjects.support') },
    { value: 'partnership', label: t('contact.form.subjects.partnership') },
    { value: 'whistleblower', label: t('contact.form.subjects.whistleblower') },
    { value: 'media', label: t('contact.form.subjects.media') },
    { value: 'legal', label: t('contact.form.subjects.legal') }
  ]

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired')
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid')
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.errors.messageTooShort')
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setFormStatus('submitting')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      setFormStatus('success')
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: 'general', message: '' })
        setFormStatus('idle')
      }, 3000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const contactChannels = [
    {
      icon: Mail,
      title: t('contact.channels.email.title'),
      value: 'support@flamingo.ai',
      description: t('contact.channels.email.description'),
      color: 'limeGreen'
    },
    {
      icon: MessageSquare,
      title: t('contact.channels.chat.title'),
      value: t('contact.channels.chat.available'),
      description: t('contact.channels.chat.description'),
      color: 'pink'
    },
    {
      icon: Shield,
      title: t('contact.channels.secure.title'),
      value: 'whistleblower@flamingo.ai',
      description: t('contact.channels.secure.description'),
      color: 'limeGreen'
    }
  ]

  const specialInquiries = [
    {
      icon: AlertTriangle,
      title: t('contact.special.whistleblower.title'),
      description: t('contact.special.whistleblower.description'),
      color: 'pink'
    },
    {
      icon: Users,
      title: t('contact.special.partnership.title'),
      description: t('contact.special.partnership.description'),
      color: 'limeGreen'
    },
    {
      icon: FileText,
      title: t('contact.special.media.title'),
      description: t('contact.special.media.description'),
      color: 'pink'
    }
  ]

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
              <span className="text-limeGreen">{t('contact.title')}</span>{' '}
              <span className="text-pink">{t('contact.subtitle')}</span>
            </h1>
            <p className="text-xl text-beigeCream/80 max-w-3xl mx-auto">
              {t('contact.description')}
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
              <h2 className="text-2xl font-bold text-limeGreen mb-6">{t('contact.form.title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-beigeCream mb-2 font-medium">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             transition-all duration-300 ${
                               errors.name 
                                 ? 'border-red-500 focus:border-red-400' 
                                 : 'border-white/20 focus:border-limeGreen/50'
                             } ${formStatus === 'submitting' ? 'opacity-50' : ''}`}
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-beigeCream mb-2 font-medium">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             transition-all duration-300 ${
                               errors.email 
                                 ? 'border-red-500 focus:border-red-400' 
                                 : 'border-white/20 focus:border-limeGreen/50'
                             } ${formStatus === 'submitting' ? 'opacity-50' : ''}`}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-beigeCream mb-2 font-medium">
                    {t('contact.form.subject')}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream focus:outline-none focus:border-limeGreen/50
                             transition-all duration-300 ${formStatus === 'submitting' ? 'opacity-50' : ''}`}
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value} className="bg-darkGreen">
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-beigeCream mb-2 font-medium">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             transition-all duration-300 resize-none ${
                               errors.message 
                                 ? 'border-red-500 focus:border-red-400' 
                                 : 'border-white/20 focus:border-limeGreen/50'
                             } ${formStatus === 'submitting' ? 'opacity-50' : ''}`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  whileHover={{ scale: formStatus === 'idle' ? 1.05 : 1 }}
                  whileTap={{ scale: formStatus === 'idle' ? 0.95 : 1 }}
                  className={`w-full py-4 font-bold rounded-xl transition-all duration-300
                           flex items-center justify-center space-x-2 ${
                             formStatus === 'success' 
                               ? 'bg-green-500 text-white' 
                               : formStatus === 'error'
                               ? 'bg-red-500 text-white'
                               : formStatus === 'submitting'
                               ? 'bg-beigeCream/20 text-beigeCream'
                               : 'bg-limeGreen text-darkGreen hover:shadow-[0_0_30px_rgba(171,248,11,0.5)]'
                           }`}
                >
                  {formStatus === 'submitting' && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-beigeCream/30 border-t-beigeCream rounded-full"
                      />
                      <span>{t('contact.form.submitting')}</span>
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <Check className="w-5 h-5" />
                      <span>{t('contact.form.success')}</span>
                    </>
                  )}
                  {formStatus === 'error' && (
                    <>
                      <X className="w-5 h-5" />
                      <span>{t('contact.form.error')}</span>
                    </>
                  )}
                  {formStatus === 'idle' && <span>{t('contact.form.submit')}</span>}
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
                <h3 className="text-2xl font-bold text-pink mb-6">{t('contact.channels.title')}</h3>
                
                <div className="space-y-4">
                  {contactChannels.map((channel, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        channel.color === 'limeGreen' ? 'bg-limeGreen/20' : 'bg-pink/20'
                      }`}>
                        <channel.icon className={`w-6 h-6 ${
                          channel.color === 'limeGreen' ? 'text-limeGreen' : 'text-pink'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          channel.color === 'limeGreen' ? 'text-limeGreen' : 'text-pink'
                        }`}>{channel.title}</h4>
                        <p className="text-beigeCream/80">{channel.value}</p>
                        <p className="text-beigeCream/60 text-sm">{channel.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Special Contacts */}
              <div className="glassmorphism rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-pink mb-6">{t('contact.special.title')}</h3>
                
                <div className="space-y-4">
                  {specialInquiries.map((inquiry, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <inquiry.icon className={`w-5 h-5 mt-0.5 ${
                          inquiry.color === 'limeGreen' ? 'text-limeGreen' : 'text-pink'
                        }`} />
                        <div>
                          <h4 className={`font-semibold mb-2 ${
                            inquiry.color === 'limeGreen' ? 'text-limeGreen' : 'text-pink'
                          }`}>
                            {inquiry.title}
                          </h4>
                          <p className="text-beigeCream/70 text-sm">
                            {inquiry.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-pink/10 to-limeGreen/10 border border-pink/30 rounded-2xl p-6"
              >
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-pink mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-pink mb-2">{t('contact.privacy.title')}</h4>
                    <p className="text-beigeCream/70 text-sm">
                      {t('contact.privacy.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
              {t('contact.cta.title')} <span className="text-limeGreen">{t('contact.cta.highlight')}</span>?
            </h2>
            <p className="text-lg text-beigeCream/80 max-w-2xl mx-auto mb-8">
              {t('contact.cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/dashboard'}
              className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                       hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
            >
              {t('contact.cta.button')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}