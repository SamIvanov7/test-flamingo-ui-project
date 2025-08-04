import { motion } from 'framer-motion'

const trustData = [
  { icon: '🔒', label: 'SSL Encrypted', value: '256-bit' },
  { icon: '⭐', label: 'User Rating', value: '4.8/5' },
  { icon: '🏆', label: 'Win Rate', value: '+32%' },
  { icon: '🌍', label: 'Active Countries', value: '47' },
]

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {trustData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-limeGreen">{item.value}</div>
              <div className="text-sm text-beigeCream/60">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}