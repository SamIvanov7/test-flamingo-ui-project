import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock, Eye, EyeOff, Check, X, LogIn } from 'lucide-react'

export default function LoginPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const from = location.state?.from?.pathname || '/dashboard'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
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
    
    try {
      await login(formData.email, formData.password)
      setFormStatus('success')
      
      setTimeout(() => {
        navigate(from, { replace: true })
      }, 1000)
    } catch (error) {
      setFormStatus('error')
      setErrors({ email: 'Invalid email or password' })
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen flex items-center justify-center px-6 py-12"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="glassmorphism rounded-3xl p-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-limeGreen/20 mb-4">
              <LogIn className="w-10 h-10 text-limeGreen" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-limeGreen">Welcome</span>{' '}
              <span className="text-pink">Back</span>
            </h1>
            <p className="text-beigeCream/70">
              Sign in to continue your winning streak
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-beigeCream mb-2 font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-beigeCream/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={formStatus === 'submitting'}
                  className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-xl
                           text-beigeCream placeholder-beigeCream/50 focus:outline-none
                           transition-all duration-300 ${
                             errors.email 
                               ? 'border-red-500 focus:border-red-400' 
                               : 'border-white/20 focus:border-limeGreen/50'
                           } ${formStatus === 'submitting' ? 'opacity-50' : ''}`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-400"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <label className="block text-beigeCream mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-beigeCream/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={formStatus === 'submitting'}
                  className={`w-full pl-12 pr-12 py-3 bg-white/10 border rounded-xl
                           text-beigeCream placeholder-beigeCream/50 focus:outline-none
                           transition-all duration-300 ${
                             errors.password 
                               ? 'border-red-500 focus:border-red-400' 
                               : 'border-white/20 focus:border-limeGreen/50'
                           } ${formStatus === 'submitting' ? 'opacity-50' : ''}`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-beigeCream/50 hover:text-beigeCream transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-400"
                >
                  {errors.password}
                </motion.p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 bg-white/10 border border-white/20 rounded focus:ring-2 focus:ring-limeGreen/50"
                />
                <span className="text-beigeCream/70 text-sm">Remember me</span>
              </label>
              
              <Link 
                to="/forgot-password" 
                className="text-sm text-pink hover:text-pink/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === 'submitting'}
              whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
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
                  <span>Signing in...</span>
                </>
              )}
              {formStatus === 'success' && (
                <>
                  <Check className="w-5 h-5" />
                  <span>Success! Redirecting...</span>
                </>
              )}
              {formStatus === 'error' && (
                <>
                  <X className="w-5 h-5" />
                  <span>Login failed</span>
                </>
              )}
              {formStatus === 'idle' && <span>Sign In</span>}
            </motion.button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-beigeCream/50">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl
                         hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-beigeCream" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2 text-beigeCream">Google</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl
                         hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-beigeCream" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
                <span className="ml-2 text-beigeCream">GitHub</span>
              </motion.button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-beigeCream/70">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="text-limeGreen hover:text-limeGreen/80 font-semibold transition-colors"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}