import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  fullName: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, fullName: string) => Promise<void>
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user')
        const token = localStorage.getItem('authToken')
        
        if (storedUser && token) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Error checking auth:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email,
        fullName: 'Demo User',
        avatar: '/assets/images/default-avatar.png'
      }
      
      const mockToken = 'mock-jwt-token-' + Date.now()
      
      localStorage.setItem('user', JSON.stringify(mockUser))
      localStorage.setItem('authToken', mockToken)
      
      setUser(mockUser)
    } catch (error) {
      console.error('Login error:', error)
      throw new Error('Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, password: string, fullName: string) => {
    try {
      setIsLoading(true)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        fullName,
        avatar: '/assets/images/default-avatar.png'
      }
      
      const mockToken = 'mock-jwt-token-' + Date.now()
      
      localStorage.setItem('user', JSON.stringify(mockUser))
      localStorage.setItem('authToken', mockToken)
      
      setUser(mockUser)
    } catch (error) {
      console.error('Signup error:', error)
      throw new Error('Failed to create account')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
    setUser(null)
  }

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    updateUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}