import { useState } from 'react'
import { motion } from 'framer-motion'

interface SettingsPageProps {
  onBack: () => void
}

interface Settings {
  soundEnabled: boolean
  vibrationEnabled: boolean
  notificationsEnabled: boolean
  autoSpinEnabled: boolean
  sessionLimit: number
  lossLimit: number
  winLimit: number
  breakReminder: number
}

export default function SettingsPage({ onBack }: SettingsPageProps) {
  const [settings, setSettings] = useState<Settings>({
    soundEnabled: true,
    vibrationEnabled: true,
    notificationsEnabled: true,
    autoSpinEnabled: false,
    sessionLimit: 120,
    lossLimit: 100,
    winLimit: 500,
    breakReminder: 30,
  })

  const [activeTab, setActiveTab] = useState<'general' | 'responsible'>('general')

  const handleToggle = (key: keyof Settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSliderChange = (key: keyof Settings, value: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-deepGreen via-djungle to-forest"
    >
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-acid via-salmon to-sage"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="glassmorphism border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-cream hover:text-acid transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Game</span>
              </motion.button>
              
              <h1 className="text-2xl font-bold text-cream">Settings</h1>
              
              <div className="w-24" /> {/* Spacer for center alignment */}
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="container mx-auto px-6 py-6">
          <div className="flex space-x-4 mb-8">
            <motion.button
              onClick={() => setActiveTab('general')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'general'
                  ? 'bg-acid text-djungle'
                  : 'glassmorphism text-cream hover:bg-white/10'
              }`}
            >
              General Settings
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('responsible')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'responsible'
                  ? 'bg-acid text-djungle'
                  : 'glassmorphism text-cream hover:bg-white/10'
              }`}
            >
              Responsible Gaming
            </motion.button>
          </div>

          {/* Settings Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glassmorphism rounded-3xl p-8"
          >
            {activeTab === 'general' ? (
              <div className="space-y-6">
                <ToggleSwitch
                  label="Sound Effects"
                  description="Play sound effects during gameplay"
                  enabled={settings.soundEnabled}
                  onToggle={() => handleToggle('soundEnabled')}
                />
                <ToggleSwitch
                  label="Vibration"
                  description="Enable haptic feedback (mobile only)"
                  enabled={settings.vibrationEnabled}
                  onToggle={() => handleToggle('vibrationEnabled')}
                />
                <ToggleSwitch
                  label="Notifications"
                  description="Receive notifications about wins and bonuses"
                  enabled={settings.notificationsEnabled}
                  onToggle={() => handleToggle('notificationsEnabled')}
                />
                <ToggleSwitch
                  label="Auto Spin"
                  description="Automatically spin after each round"
                  enabled={settings.autoSpinEnabled}
                  onToggle={() => handleToggle('autoSpinEnabled')}
                />
              </div>
            ) : (
              <div className="space-y-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-acid mb-2">
                    Protect Yourself
                  </h3>
                  <p className="text-cream/70">
                    Set limits to ensure you play responsibly and within your means.
                  </p>
                </div>

                <SliderControl
                  label="Session Time Limit"
                  description="Maximum playing time per session"
                  value={settings.sessionLimit}
                  min={30}
                  max={240}
                  step={30}
                  unit="minutes"
                  onChange={(value) => handleSliderChange('sessionLimit', value)}
                />

                <SliderControl
                  label="Loss Limit"
                  description="Maximum amount you're willing to lose"
                  value={settings.lossLimit}
                  min={10}
                  max={1000}
                  step={10}
                  unit="WNT"
                  onChange={(value) => handleSliderChange('lossLimit', value)}
                />

                <SliderControl
                  label="Win Limit"
                  description="Stop playing after winning this amount"
                  value={settings.winLimit}
                  min={50}
                  max={5000}
                  step={50}
                  unit="WNT"
                  onChange={(value) => handleSliderChange('winLimit', value)}
                />

                <SliderControl
                  label="Break Reminder"
                  description="Get reminded to take a break"
                  value={settings.breakReminder}
                  min={15}
                  max={120}
                  step={15}
                  unit="minutes"
                  onChange={(value) => handleSliderChange('breakReminder', value)}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 p-4 bg-sage/20 border border-sage/50 rounded-xl
                           text-sage hover:bg-sage/30 transition-all"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-semibold">Need Help? Contact Support</span>
                  </div>
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

interface ToggleSwitchProps {
  label: string
  description: string
  enabled: boolean
  onToggle: () => void
}

function ToggleSwitch({ label, description, enabled, onToggle }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-lg font-semibold text-cream">{label}</h4>
        <p className="text-sm text-cream/60">{description}</p>
      </div>
      <motion.button
        onClick={onToggle}
        className={`relative w-16 h-8 rounded-full transition-colors ${
          enabled ? 'bg-acid' : 'bg-white/20'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
          animate={{ left: enabled ? '34px' : '4px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </motion.button>
    </div>
  )
}

interface SliderControlProps {
  label: string
  description: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (value: number) => void
}

function SliderControl({ label, description, value, min, max, step, unit, onChange }: SliderControlProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <div>
          <h4 className="text-lg font-semibold text-cream">{label}</h4>
          <p className="text-sm text-cream/60">{description}</p>
        </div>
        <span className="text-xl font-bold text-acid">
          {value} {unit}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                   slider-thumb:appearance-none slider-thumb:w-6 slider-thumb:h-6
                   slider-thumb:bg-acid slider-thumb:rounded-full slider-thumb:cursor-pointer
                   slider-thumb:shadow-[0_0_10px_rgba(173,255,0,0.5)]"
          style={{
            background: `linear-gradient(to right, var(--color-acid) 0%, var(--color-acid) ${
              ((value - min) / (max - min)) * 100
            }%, rgba(255,255,255,0.2) ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.2) 100%)`,
          }}
        />
      </div>
    </div>
  )
}