import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/citizens', label: 'Граждане' },
    { path: '/employees', label: 'Сотрудники' },
    { path: '/security', label: 'Охрана' },
    { path: '/private', label: 'ЧОП/ГБР' },
    { path: '/rosgvardia', label: 'Росгвардия' },
    { path: '/children', label: 'Для детей' },
    { path: '/business', label: 'Для бизнеса' },
  ]

  return (
    <header className="shadow-lg sticky top-0 z-50">
      {/* Триколор */}
      <div className="flex">
        <div className="bg-white h-2 flex-1"></div>
        <div className="bg-ru-blue h-2 flex-1"></div>
        <div className="bg-ru-red h-2 flex-1"></div>
      </div>
      
      <div className="bg-ru-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Shield className="w-10 h-10" />
              <div>
                <div className="text-xl font-bold">ИЭО</div>
                <div className="text-xs opacity-90">Инфраструктура Экстренного Оповещения</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-ru-red text-white font-semibold'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-ru-red text-white font-semibold'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}