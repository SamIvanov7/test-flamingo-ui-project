import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Flamingo3D from '../components/Flamingo3D'
import ParticleField from '../components/ParticleField'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Scientist",
      description: "Former quantum computing researcher at MIT. Pioneered the integration of neural networks with RNG analysis.",
      image: "/assets/images/team-1.png"
    },
    {
      name: "Marcus Rivera",
      role: "Lead Developer",
      description: "15+ years in gambling software. Discovered critical vulnerabilities in major casino systems.",
      image: "/assets/images/team-2.png"
    },
    {
      name: "Elena Volkov",
      role: "Data Scientist",
      description: "Expert in pattern recognition and predictive modeling. Published 20+ papers on randomness theory.",
      image: "/assets/images/team-3.png"
    },
    {
      name: "James Park",
      role: "Security Expert",
      description: "Ethical hacker who exposed flaws in online casino RNG implementations worldwide.",
      image: "/assets/images/team-4.png"
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#E59FCE" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ABF80B" />
            <Flamingo3D animationState="thinking" scale={2} />
            <ParticleField count={50} density={0.5} color="#ABF80B" />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="text-limeGreen">Disrupting</span>{' '}
            <span className="text-pink">the House Edge</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-beigeCream/80 max-w-3xl mx-auto"
          >
            We're a team of renegade mathematicians, AI researchers, and ethical hackers united by one mission: 
            proving that casino "randomness" is anything but random.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-limeGreen">Our Mission</h2>
              <p className="text-lg text-beigeCream/80 mb-6">
                For decades, casinos have hidden behind the myth of "true randomness" to justify their 
                astronomical profits. We're here to shatter that illusion.
              </p>
              <p className="text-lg text-beigeCream/80 mb-6">
                Using advanced quantum-neural analysis and pattern recognition algorithms that casinos 
                don't want you to know about, flamingo.ai exposes the predictable patterns in their 
                so-called random number generators.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink">98.3%</div>
                  <div className="text-sm text-beigeCream/60">Pattern Detection Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-limeGreen">2.7M</div>
                  <div className="text-sm text-beigeCream/60">Spins Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink">15K+</div>
                  <div className="text-sm text-beigeCream/60">Active Users</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glassmorphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-pink">The Truth They Hide</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-limeGreen mr-2">▸</span>
                    <span className="text-beigeCream/80">RNG software has exploitable patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-limeGreen mr-2">▸</span>
                    <span className="text-beigeCream/80">Slot machines are programmed to create "near misses"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-limeGreen mr-2">▸</span>
                    <span className="text-beigeCream/80">Online casinos track and limit winning players</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-limeGreen mr-2">▸</span>
                    <span className="text-beigeCream/80">The house edge is artificially inflated</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-limeGreen">Meet the</span>{' '}
              <span className="text-pink">Disruptors</span>
            </h2>
            <p className="text-lg text-beigeCream/70 max-w-2xl mx-auto">
              Our team consists of industry whistleblowers and brilliant minds who refused to stay silent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glassmorphism rounded-2xl p-6 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink/20 to-limeGreen/20 flex items-center justify-center">
                  <span className="text-5xl">🦩</span>
                </div>
                <h3 className="text-xl font-bold text-limeGreen mb-2">{member.name}</h3>
                <p className="text-sm text-pink mb-3">{member.role}</p>
                <p className="text-sm text-beigeCream/70">{member.description}</p>
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
            className="glassmorphism rounded-3xl p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to <span className="text-limeGreen">Level the Playing Field</span>?
            </h2>
            <p className="text-lg text-beigeCream/80 mb-8">
              Join thousands who've discovered the truth about casino "randomness" and are finally winning.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/dashboard'}
              className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                       hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
            >
              Start Winning Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}