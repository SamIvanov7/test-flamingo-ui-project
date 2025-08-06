import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './contexts/AuthContext'
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
import FAQPage from './pages/FAQPage'
import Layout from './components/Layout'
import ComponentShowcase from './pages/ComponentShowcase'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-djungle">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Main Landing Page */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Authentication Pages */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              
              {/* Pages with Layout (Header) */}
              <Route element={<Layout />}>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/use-case" element={<UseCasePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:articleId" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/request-feature" element={<RequestFeaturePage />} />
              </Route>
              
              {/* Protected Game-related pages */}
              <Route path="/onboarding" element={
                <ProtectedRoute>
                  <OnboardingCarousel />
                </ProtectedRoute>
              } />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <GameDashboard />
                </ProtectedRoute>
              } />
              <Route path="/chat" element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              } />
              
              {/* Component Showcase */}
              <Route path="/showcase" element={<ComponentShowcase />} />
              
              {/* Redirect any unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App