import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function SimpleLandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div style={{ minHeight: '100vh', background: '#2B2B31', color: '#E7DFCE' }}>
      {/* Header */}
      <div style={{ 
        padding: '20px 40px', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '24px', color: '#ABF80B' }}>flamingo.ai</h1>
        <button 
          onClick={() => navigate('/dashboard')}
          style={{
            padding: '10px 20px',
            background: '#ABF80B',
            color: '#041812',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Get Started
        </button>
      </div>

      {/* Hero Section */}
      <div style={{
        padding: '100px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '72px', 
          fontWeight: 'bold',
          marginBottom: '20px',
          lineHeight: '1.1'
        }}>
          <span style={{ color: '#E7DFCE' }}>PLAYING</span><br/>
          <span style={{ color: '#E59FCE' }}>REDEFINED</span>
        </h1>
        
        <p style={{ 
          fontSize: '20px', 
          color: '#E7DFCE', 
          opacity: 0.8,
          marginBottom: '40px'
        }}>
          {t('landing.hero.subtitle')}
        </p>

        <button
          onClick={() => navigate('/onboarding')}
          style={{
            padding: '15px 30px',
            background: '#ABF80B',
            color: '#041812',
            border: 'none',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(171,248,11,0.5)'
          }}
        >
          {t('landing.hero.cta')}
        </button>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '80px 20px',
        background: 'rgba(0,0,0,0.2)'
      }}>
        <h2 style={{
          fontSize: '48px',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <span style={{ color: '#E7DFCE' }}>AI-Powered</span>{' '}
          <span style={{ color: '#E59FCE' }}>Gaming Assistant</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Quantum Analysis', desc: 'Advanced neural networks decode patterns' },
            { title: 'Live Predictions', desc: 'Real-time probability calculations' },
            { title: 'Smart Insights', desc: 'Personalized strategies for your style' }
          ].map((feature, i) => (
            <div key={i} style={{
              padding: '30px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(171,248,11,0.3)'
            }}>
              <h3 style={{ 
                color: '#ABF80B', 
                fontSize: '24px',
                marginBottom: '10px'
              }}>
                {feature.title}
              </h3>
              <p style={{ color: '#E7DFCE', opacity: 0.8 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}