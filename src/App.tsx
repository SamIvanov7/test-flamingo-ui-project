import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Provider } from './components/ui/provider'
import { Toaster } from './components/ui/toaster'
import LandingPage from './pages/LandingPage'
import SimpleLandingPage from './pages/SimpleLandingPage'
import LandingPageFixed from './pages/LandingPageFixed'
import EnhancedLandingPage from './pages/EnhancedLandingPage'
import TestPage from './pages/TestPage'
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
import FAQPage from './pages/FAQPage'
import Layout from './components/Layout'

function App() {
  console.log('App component is rendering')
  return (
    <Provider>
      <Router>
        <div className="min-h-screen bg-djungle">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Test Page */}
              <Route path="/test" element={<TestPage />} />
              
              {/* Main Landing Page */}
              <Route path="/" element={<EnhancedLandingPage />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/fixed" element={<LandingPageFixed />} />
              <Route path="/simple" element={<SimpleLandingPage />} />
              <Route path="/enhanced" element={<EnhancedLandingPage />} />
              
              {/* Pages with Layout (Header) */}
              <Route element={<Layout />}>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/use-case" element={<UseCasePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FAQPage />} />
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
        <Toaster />
      </Router>
    </Provider>
  )
}

export default App