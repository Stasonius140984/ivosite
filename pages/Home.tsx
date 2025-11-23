import { Shield, Users, Building2, AlertTriangle, FileText, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const categories = [
    { icon: Users, title: 'Граждане', path: '/citizens', color: 'bg-blue-500' },
    { icon: Building2, title: 'Сотрудники', path: '/employees', color: 'bg-green-500' },
    { icon: Shield, title: 'Охрана', path: '/security', color: 'bg-purple-500' },
    { icon: AlertTriangle, title: 'ЧОП/ГБР', path: '/private', color: 'bg-orange-500' },
    { icon: Shield, title: 'Росгвардия', path: '/rosgvardia', color: 'bg-ru-red' },
    { icon: Users, title: 'Для детей', path: '/children', color: 'bg-pink-500' },
    { icon: Building2, title: 'Для бизнеса', path: '/business', color: 'bg-indigo-500' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Триколор фон */}
      <section className="relative py-20 px-4 bg-white border-b-8 border-ru-blue">
        <div className="absolute top-0 left-0 right-0 h-3 flex">
          <div className="bg-white flex-1"></div>
          <div className="bg-ru-blue flex-1"></div>
          <div className="bg-ru-red flex-1"></div>
        </div>
        
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-24 h-24" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-ru-blue">
            ИЭО
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-ru-blue">
            Инфраструктура Экстренного Оповещения
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-ru-red font-semibold">
            Единая система безопасности для бизнеса и государства
          </p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700">
            Технологии, которые превращают каждого гражданина в активного защитника Отечества
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Категории пользователей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  to={category.path}
                  className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
                >
                  <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ru-dark mb-2">{category.title}</h3>
                  <p className="text-gray-600">Перейти в раздел →</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            О компании и системе ИЭО
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-ru-blue mb-4">
                НОВЫЕ РЕШЕНИЯ
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Российская IT-компания, специализирующаяся на разработке передовых решений
                в сфере национальной безопасности и экстренного оповещения населения.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Наша миссия — создание надёжной инфраструктуры для обеспечения безопасности
                граждан, бизнеса и государственных структур.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-ru-blue mb-4">
                Система ИЭО
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Инфраструктура Экстренного Оповещения — единая платформа для оперативного
                информирования и координации действий в чрезвычайных ситуациях.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-ru-red mt-1">▪</span>
                  <span>Мгновенное оповещение всех категорий пользователей</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ru-red mt-1">▪</span>
                  <span>Интеграция с государственными системами безопасности</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ru-red mt-1">▪</span>
                  <span>Круглосуточный мониторинг и поддержка</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Преимущества системы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-ru-blue mb-4" />
              <h3 className="text-xl font-bold text-ru-dark mb-3">
                Полная документация
              </h3>
              <p className="text-gray-700">
                Детальная техническая документация и инструкции для всех категорий пользователей
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Phone className="w-12 h-12 text-ru-blue mb-4" />
              <h3 className="text-xl font-bold text-ru-dark mb-3">
                Техподдержка 24/7
              </h3>
              <p className="text-gray-700">
                Круглосуточная техническая поддержка и консультации специалистов
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-ru-blue mb-4" />
              <h3 className="text-xl font-bold text-ru-dark mb-3">
                Надёжность
              </h3>
              <p className="text-gray-700">
                Защищённая инфраструктура с резервированием и многоуровневой безопасностью
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-ru-dark text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Контакты</h2>
          <p className="text-lg mb-4">
            <strong>Сервер:</strong> 217.114.15.80
          </p>
          <p className="text-lg mb-4">
            <strong>Адрес:</strong> <a href="http://иэо.рф" className="text-ru-red hover:underline">http://иэо.рф</a>
          </p>
          <p className="text-lg opacity-80">
            © 2025 НОВЫЕ РЕШЕНИЯ. Все права защищены.
          </p>
        </div>
      </section>
    </div>
  )
}