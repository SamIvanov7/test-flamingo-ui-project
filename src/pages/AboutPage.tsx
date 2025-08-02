import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTranslation } from 'react-i18next'
import Flamingo3D from '../components/Flamingo3D'
import ParticleField from '../components/ParticleField'

export default function AboutPage() {
  const { t } = useTranslation()
  
  // Color variables for animations
  const limeGreen = '#ABF80B'
  const pink = '#E59FCE'
  
  const processLevels = [
    {
      level: 1,
      title: t('about.process.level1.title'),
      subtitle: t('about.process.level1.subtitle'),
      description: t('about.process.level1.description'),
      details: [
        t('about.process.level1.detail1'),
        t('about.process.level1.detail2'),
        t('about.process.level1.detail3'),
        t('about.process.level1.detail4')
      ],
      stats: [t('about.process.level1.stat1'), t('about.process.level1.stat2'), t('about.process.level1.stat3')]
    },
    {
      level: 2,
      title: t('about.process.level2.title'),
      subtitle: t('about.process.level2.subtitle'),
      description: t('about.process.level2.description'),
      details: [
        t('about.process.level2.detail1'),
        t('about.process.level2.detail2'),
        t('about.process.level2.detail3'),
        t('about.process.level2.detail4')
      ],
      stats: [t('about.process.level2.stat1'), t('about.process.level2.stat2'), t('about.process.level2.stat3')]
    },
    {
      level: 3,
      title: t('about.process.level3.title'),
      subtitle: t('about.process.level3.subtitle'),
      description: t('about.process.level3.description'),
      details: [
        t('about.process.level3.detail1'),
        t('about.process.level3.detail2'),
        t('about.process.level3.detail3'),
        t('about.process.level3.detail4')
      ],
      stats: [t('about.process.level3.stat1'), t('about.process.level3.stat2'), t('about.process.level3.stat3')]
    },
    {
      level: 4,
      title: t('about.process.level4.title'),
      subtitle: t('about.process.level4.subtitle'),
      description: t('about.process.level4.description'),
      details: [
        t('about.process.level4.detail1'),
        t('about.process.level4.detail2'),
        t('about.process.level4.detail3'),
        t('about.process.level4.detail4')
      ],
      stats: [t('about.process.level4.stat1'), t('about.process.level4.stat2'), t('about.process.level4.stat3')]
    }
  ]

  const dataLakeMetrics = [
    { metric: t('about.dataLake.metric1'), description: t('about.dataLake.description1') },
    { metric: t('about.dataLake.metric2'), description: t('about.dataLake.description2') },
    { metric: t('about.dataLake.metric3'), description: t('about.dataLake.description3') },
    { metric: t('about.dataLake.metric4'), description: t('about.dataLake.description4') }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen"
    >
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-beigeCream">{t('about.hero.title1')}</span><br/>
            <span className="text-limeGreen">{t('about.hero.title2')}</span>{' '}
            <span className="text-pink">{t('about.hero.title3')}</span>{' '}
            <span className="text-beigeCream">{t('about.hero.title4')}</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-beigeCream/80 max-w-4xl mx-auto"
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Truth About Randomness Section */}
      <section className="py-20 bg-raisinBlack/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-pink">{t('about.truth.title1')}</span>{' '}
              <span className="text-beigeCream">{t('about.truth.title2')}</span>
            </h2>
            <p className="text-lg text-beigeCream/80 mb-4">
              {t('about.truth.description1')} <span className="text-limeGreen font-semibold">{t('about.truth.prng')}</span>.
            </p>
            <p className="text-lg text-beigeCream/80">
              {t('about.truth.description2')} <span className="italic">{t('about.truth.illusion')}</span> {t('about.truth.description3')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-limeGreen">{t('about.mission.title1')}</span>{' '}
              <span className="text-pink">{t('about.mission.title2')}</span>
            </h2>
            <p className="text-lg text-beigeCream/70 max-w-3xl mx-auto">
              {t('about.mission.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-limeGreen">{t('about.mission.fromElite')}</h3>
              <p className="text-lg text-beigeCream/80 mb-6">
                {t('about.mission.description1')}
              </p>
              <p className="text-lg text-beigeCream/80 mb-6">
                {t('about.mission.description2')} <span className="text-pink font-semibold">{t('about.mission.truth')}</span>.
              </p>
              <p className="text-lg text-beigeCream/80 mb-6">
                {t('about.mission.description3')} <span className="text-limeGreen font-semibold">{t('about.mission.market')}</span>.
              </p>
              <div className="glassmorphism rounded-2xl p-6 mt-8">
                <h4 className="text-xl font-bold mb-4 text-pink">{t('about.mission.movement.title')}</h4>
                <p className="text-beigeCream/80">
                  {t('about.mission.movement.description')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glassmorphism rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-pink">{t('about.architecture.title')}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-limeGreen mb-2">
                      {t('about.architecture.classical.title')}
                    </h4>
                    <p className="text-beigeCream/80">
                      {t('about.architecture.classical.description')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-limeGreen mb-2">
                      {t('about.architecture.quantum.title')}
                    </h4>
                    <p className="text-beigeCream/80">
                      {t('about.architecture.quantum.description1')} <span className="text-pink font-semibold">{t('about.architecture.quantum.aq')}</span> {t('about.architecture.quantum.description2')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glassmorphism rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-pink">320</div>
                  <div className="text-sm text-beigeCream/60">Qubits</div>
                </div>
                <div className="glassmorphism rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-limeGreen">99.5%</div>
                  <div className="text-sm text-beigeCream/60">Gate Fidelity</div>
                </div>
                <div className="glassmorphism rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-pink">150+ #AQ</div>
                  <div className="text-sm text-beigeCream/60">Algorithm Power</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-beigeCream">{t('about.process.title1')}</span>{' '}
              <span className="text-limeGreen">{t('about.process.title2')}</span>
            </h2>
            <p className="text-lg text-beigeCream/70 max-w-3xl mx-auto">
              {t('about.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-limeGreen flex items-center justify-center text-darkGreen font-bold text-lg">
                    {level.level}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-limeGreen">{level.title}</h3>
                    <p className="text-sm text-pink">{level.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-beigeCream/80 mb-4">{level.description}</p>
                <div className="space-y-1 mb-4">
                  {level.details.map((detail, i) => (
                    <div key={i} className="text-xs text-beigeCream/70">
                      • {detail}
                    </div>
                  ))}
                </div>
                <div className="border-t border-beigeCream/20 pt-3 space-y-1">
                  {level.stats.map((stat, i) => (
                    <div key={i} className="text-xs text-limeGreen/80">
                      ▸ {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data Lake Details */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-pink">{t('about.dataLake.title1')}</span>{' '}
              <span className="text-limeGreen">{t('about.dataLake.title2')}</span>
            </h3>
            <p className="text-beigeCream/80 text-center mb-6">
              {t('about.dataLake.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {dataLakeMetrics.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-limeGreen mr-3">▸</span>
                  <div>
                    <span className="font-semibold text-pink">{item.metric}:</span>{' '}
                    <span className="text-beigeCream/80">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quantum Advantage */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              <span className="text-pink">{t('about.quantumAdvantage.title1')}</span>{' '}
              <span className="text-limeGreen">{t('about.quantumAdvantage.title2')}</span>
            </h3>
            <p className="text-beigeCream/80 text-center mb-4">
              {t('about.quantumAdvantage.description1')} 
              <span className="text-limeGreen font-semibold"> {t('about.quantumAdvantage.exponentially')}</span>.
            </p>
            <p className="text-beigeCream/80 text-center">
              {t('about.quantumAdvantage.description2')} 
              <span className="text-pink font-semibold"> {t('about.quantumAdvantage.laws')}</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Ghosts in the Machine */}
      <section className="py-20 relative overflow-hidden">
        {/* CSS Animation Styles */}
        <style>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(50px); }
          }
          @keyframes matrixFall {
            0% { 
              transform: translateY(-100%);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% { 
              transform: translateY(100vh);
              opacity: 0;
            }
          }
        `}</style>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, transparent 40%, ${limeGreen}20 41%, ${limeGreen}20 49%, transparent 50%),
                            linear-gradient(60deg, transparent 40%, ${pink}20 41%, ${pink}20 49%, transparent 50%)`,
            backgroundSize: '50px 50px',
            animation: 'slide 20s linear infinite'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            {/* Glitch Effect Title */}
            <div className="relative inline-block mb-8">
              <motion.h2
                className="text-5xl sm:text-6xl md:text-7xl font-bold relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="text-beigeCream"
                  animate={{ 
                    textShadow: [
                      '0 0 0 rgba(229,159,206,0)',
                      '2px 2px 4px rgba(229,159,206,0.5)',
                      '0 0 0 rgba(229,159,206,0)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {t('about.team.title1')}
                </motion.span>{' '}
                <motion.span
                  className="text-limeGreen"
                  animate={{ 
                    textShadow: [
                      '0 0 0 rgba(171,248,11,0)',
                      '-2px -2px 4px rgba(171,248,11,0.5)',
                      '0 0 0 rgba(171,248,11,0)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  {t('about.team.title2')}
                </motion.span>
                <span className="text-beigeCream">.</span>
              </motion.h2>
              <motion.p
                className="text-2xl sm:text-3xl text-pink font-bold mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('about.team.title3')}.
              </motion.p>
            </div>
            
            <motion.p 
              className="text-xl text-beigeCream/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-limeGreen font-semibold">{t('about.team.subtitle')}</span>
            </motion.p>
          </motion.div>

          {/* Intro Card with Matrix Effect */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative glassmorphism rounded-3xl p-10 overflow-hidden">
              {/* Matrix Rain Effect Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="text-limeGreen text-xs font-mono">
                  {Array(20).fill(0).map((_, i) => (
                    <div key={i} className="inline-block mx-2" style={{
                      animation: `matrixFall ${3 + i * 0.2}s linear infinite`,
                      animationDelay: `${i * 0.1}s`
                    }}>
                      {Array(10).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10">
                <motion.p 
                  className="text-xl text-beigeCream/90 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {t('about.team.intro')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border-l-4 border-pink pl-6"
                >
                  <p className="text-2xl text-pink font-bold">
                    {t('about.team.butNever')}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Three Reasons Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {/* Reason 1 - Legal Shield */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glassmorphism rounded-2xl p-8 h-full relative overflow-hidden
                            border border-beigeCream/10 hover:border-limeGreen/30 transition-all duration-300">
                {/* Icon Background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-limeGreen">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink/20 to-limeGreen/20 
                                  flex items-center justify-center backdrop-blur-sm
                                  group-hover:from-pink/30 group-hover:to-limeGreen/30 transition-all">
                      <span className="text-2xl font-bold text-limeGreen">01</span>
                    </div>
                    <div className="ml-4 h-px flex-1 bg-gradient-to-r from-limeGreen/50 to-transparent" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-limeGreen mb-4 group-hover:text-pink transition-colors">
                    {t('about.team.reason1.title')}
                  </h3>
                  <p className="text-beigeCream/80 leading-relaxed">
                    {t('about.team.reason1.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reason 2 - Industry Challenge */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glassmorphism rounded-2xl p-8 h-full relative overflow-hidden
                            border border-beigeCream/10 hover:border-pink/30 transition-all duration-300">
                {/* Icon Background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-pink">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink/20 to-limeGreen/20 
                                  flex items-center justify-center backdrop-blur-sm
                                  group-hover:from-pink/30 group-hover:to-limeGreen/30 transition-all">
                      <span className="text-2xl font-bold text-pink">02</span>
                    </div>
                    <div className="ml-4 h-px flex-1 bg-gradient-to-r from-pink/50 to-transparent" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-pink mb-4 group-hover:text-limeGreen transition-colors">
                    {t('about.team.reason2.title')}
                  </h3>
                  <p className="text-beigeCream/80 leading-relaxed">
                    {t('about.team.reason2.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reason 3 - Philosophy */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glassmorphism rounded-2xl p-8 h-full relative overflow-hidden
                            border border-beigeCream/10 hover:border-limeGreen/30 transition-all duration-300">
                {/* Icon Background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-limeGreen">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink/20 to-limeGreen/20 
                                  flex items-center justify-center backdrop-blur-sm
                                  group-hover:from-pink/30 group-hover:to-limeGreen/30 transition-all">
                      <span className="text-2xl font-bold text-limeGreen">03</span>
                    </div>
                    <div className="ml-4 h-px flex-1 bg-gradient-to-r from-limeGreen/50 to-transparent" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-limeGreen mb-4 group-hover:text-pink transition-colors">
                    {t('about.team.reason3.title')}
                  </h3>
                  <p className="text-beigeCream/80 leading-relaxed">
                    {t('about.team.reason3.description')}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Combined Who We Are & Team Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-6xl mx-auto mt-16"
          >
            <div className="glassmorphism rounded-3xl p-12 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, ${pink}40 0%, transparent 50%),
                                    radial-gradient(circle at 80% 80%, ${limeGreen}40 0%, transparent 50%)`,
                    backgroundSize: '200% 200%',
                  }}
                  className="absolute inset-0"
                />
              </div>

              <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <motion.h3 
                    className="text-4xl font-bold mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-pink">{t('about.team.whoWeAre.title')}</span>
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-beigeCream/90 mb-6 leading-relaxed max-w-3xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t('about.team.whoWeAre.description1')}
                  </motion.p>
                  <motion.p 
                    className="text-2xl text-limeGreen font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          '0 0 0 rgba(171,248,11,0)',
                          '0 0 20px rgba(171,248,11,0.5)',
                          '0 0 0 rgba(171,248,11,0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {t('about.team.whoWeAre.description2')}
                    </motion.span>
                  </motion.p>
                </div>

                {/* Team Members Grid */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid md:grid-cols-3 gap-6 mt-12"
                >
                  {/* Quantum Physicist - "The Oracle" */}
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-darkGreen/30 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden
                              border border-limeGreen/20 hover:border-limeGreen/40 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <div className="text-limeGreen text-6xl">⚛️</div>
                    </div>
                    <div className="relative z-10">
                      <div className="text-3xl mb-2 filter drop-shadow-lg">⚛️</div>
                      <div className="text-xs text-limeGreen/60 font-mono mb-1">// {t('about.team.roles.quantum.nickname')}</div>
                      <h4 className="text-lg font-bold text-limeGreen mb-2">{t('about.team.roles.quantum.title')}</h4>
                      <p className="text-sm text-beigeCream/70">
                        {t('about.team.roles.quantum.description')}
                      </p>
                      <div className="mt-4 pt-4 border-t border-beigeCream/10">
                        <p className="text-xs text-pink/60 italic">
                          "{t('about.team.roles.quantum.quote')}"
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* SaaS Architect - "Ghost" */}
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-darkGreen/30 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden
                              border border-pink/20 hover:border-pink/40 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <div className="text-pink text-6xl">☁️</div>
                    </div>
                    <div className="relative z-10">
                      <div className="text-3xl mb-2 filter drop-shadow-lg">☁️</div>
                      <div className="text-xs text-pink/60 font-mono mb-1">// {t('about.team.roles.saas.nickname')}</div>
                      <h4 className="text-lg font-bold text-pink mb-2">{t('about.team.roles.saas.title')}</h4>
                      <p className="text-sm text-beigeCream/70">
                        {t('about.team.roles.saas.description')}
                      </p>
                      <div className="mt-4 pt-4 border-t border-beigeCream/10">
                        <p className="text-xs text-limeGreen/60 italic">
                          "{t('about.team.roles.saas.quote')}"
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Data Specialist - "Cipher" */}
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-darkGreen/30 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden
                              border border-limeGreen/20 hover:border-limeGreen/40 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <div className="text-limeGreen text-6xl">📊</div>
                    </div>
                    <div className="relative z-10">
                      <div className="text-3xl mb-2 filter drop-shadow-lg">📊</div>
                      <div className="text-xs text-limeGreen/60 font-mono mb-1">// {t('about.team.roles.data.nickname')}</div>
                      <h4 className="text-lg font-bold text-limeGreen mb-2">{t('about.team.roles.data.title')}</h4>
                      <p className="text-sm text-beigeCream/70">
                        {t('about.team.roles.data.description')}
                      </p>
                      <div className="mt-4 pt-4 border-t border-beigeCream/10">
                        <p className="text-xs text-pink/60 italic">
                          "{t('about.team.roles.data.quote')}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-beigeCream">{t('about.cta.title1')}</span>{' '}
              <span className="text-limeGreen">{t('about.cta.title2')}</span>{' '}
              <span className="text-beigeCream">{t('about.cta.title3')}</span>{' '}
              <span className="text-pink">{t('about.cta.title4')}</span>
            </h2>
            <p className="text-lg text-beigeCream/80 mb-8">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/dashboard'}
                className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                         hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
              >
                {t('about.cta.button1')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/technology'}
                className="px-8 py-4 border-2 border-pink text-pink font-bold rounded-xl text-lg
                         hover:bg-pink hover:text-darkGreen transition-all duration-300"
              >
                {t('about.cta.button2')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}