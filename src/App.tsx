import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import OnboardingCarousel from './components/OnboardingCarousel'
import GameDashboard from './pages/GameDashboard'
import SettingsPage from './pages/SettingsPage'

type AppView = 'landing' | 'onboarding' | 'dashboard' | 'settings'

function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing')

  const handleStartGame = () => {
    setCurrentView('onboarding')
  }

  const handleCompleteOnboarding = () => {
    setCurrentView('dashboard')
  }

  const handleOpenSettings = () => {
    setCurrentView('settings')
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
  }

  return (
    <div className="min-h-screen bg-djungle">
      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <LandingPage key="landing" onStartGame={handleStartGame} />
        )}
        {currentView === 'onboarding' && (
          <OnboardingCarousel key="onboarding" onComplete={handleCompleteOnboarding} />
        )}
        {currentView === 'dashboard' && (
          <GameDashboard key="dashboard" onOpenSettings={handleOpenSettings} />
        )}
        {currentView === 'settings' && (
          <SettingsPage key="settings" onBack={handleBackToDashboard} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App