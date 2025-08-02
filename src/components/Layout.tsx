import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <>
      <Header onLogin={handleLogin} />
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  )
}