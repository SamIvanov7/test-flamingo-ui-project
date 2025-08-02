import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import OnboardingCarousel from './components/OnboardingCarousel'
import GameDashboard from './pages/GameDashboard'
import SettingsPage from './pages/SettingsPage'
import AboutPage from './pages/AboutPage'
import UseCasePage from './pages/UseCasePage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import ChatPage from './pages/ChatPage'
import RequestFeaturePage from './pages/RequestFeaturePage'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-djungle">
        <AnimatePresence mode="wait">
          <Routes>
            {/* Main Landing Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Pages with Layout (Header) */}
            <Route element={<Layout />}>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/use-case" element={<UseCasePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/request-feature" element={<RequestFeaturePage />} />
            </Route>
            
            {/* Game-related pages */}
            <Route path="/onboarding" element={<OnboardingCarousel />} />
            <Route path="/dashboard" element={<GameDashboard />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App