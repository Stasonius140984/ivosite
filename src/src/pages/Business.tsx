import { Building2, Shield, Users, BarChart, Zap, CheckCircle } from 'lucide-react'

export default function Business() {
  const features = [
    {
      icon: Shield,
      title: 'Комплексная безопасность',
      description: 'Защита бизнеса, персонала и активов в единой системе'
    },
    {
      icon: Users,
      title: 'Управление персоналом',
      description: 'Контроль доступа, учёт рабочего времени и безопасность сотрудников'
    },
    {
      icon: BarChart,
      title: 'Аналитика и отчёты',
      description: 'Детальная статистика по всем аспектам безопасности бизнеса'
    },
    {
      icon: Zap,
      title: 'Быстрое реагирование',
      description: 'Автоматические протоколы действий при различных инцидентах'
    },
  ]

  const benefits = [
    'Снижение потерь от инцидентов на 70%',
    'Соответствие требованиям законодательства',
    'Интеграция с существующими системами безопасности',
    'Круглосуточный мониторинг и поддержка',
    'Масштабируемость для бизнеса любого размера',
    'Облачное хранение данных с максимальной защитой',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Building2 className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Живой Щит</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Платформа безопасности корпоративного уровня для защиты вашего бизнеса
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Возможности платформы "Живой Щит"
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-indigo-600 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ru-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-blue-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Преимущества для бизнеса
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Решения для разных отраслей
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Офисные центры</h3>
              <p className="text-gray-700">
                Контроль доступа, видеонаблюдение, эвакуация персонала
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Производство</h3>
              <p className="text-gray-700">
                Промышленная безопасность, контроль опасных зон, оповещение о ЧС
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🏬</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Торговля</h3>
              <p className="text-gray-700">
                Безопасность ТЦ, защита товаров, управление потоками посетителей
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Медицина</h3>
              <p className="text-gray-700">
                Безопасность пациентов и персонала, контроль доступа к зонам
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Образование</h3>
              <p className="text-gray-700">
                Безопасность учебных заведений, защита детей и студентов
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Гостиничный бизнес</h3>
              <p className="text-gray-700">
                Безопасность гостей, контроль территории, экстренное оповещение
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-8">
            Гибкие тарифные планы
          </h2>
          <p className="text-center text-xl text-gray-700 mb-12">
            Индивидуальные решения для малого, среднего и крупного бизнеса
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-ru-dark mb-4">Стартовый</h3>
              <p className="text-gray-600 mb-4">Для небольших офисов</p>
              <p className="text-4xl font-bold text-indigo-600 mb-4">от 5 000₽<span className="text-lg font-normal text-gray-600">/мес</span></p>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>До 50 пользователей</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Базовая аналитика</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Тех. поддержка 8/5</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-8 rounded-xl shadow-xl text-center text-white transform scale-105">
              <div className="bg-ru-red text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Популярный
              </div>
              <h3 className="text-2xl font-bold mb-4">Бизнес</h3>
              <p className="opacity-90 mb-4">Для средних компаний</p>
              <p className="text-4xl font-bold mb-4">от 15 000₽<span className="text-lg font-normal opacity-75">/мес</span></p>
              <ul className="text-left space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>До 500 пользователей</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Расширенная аналитика</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Тех. поддержка 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>API интеграции</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-ru-dark mb-4">Корпоративный</h3>
              <p className="text-gray-600 mb-4">Для крупных предприятий</p>
              <p className="text-4xl font-bold text-indigo-600 mb-4">По запросу</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Неограниченно</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Выделенный сервер</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Персональный менеджер</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>SLA 99.9%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Защитите свой бизнес с "Живой Щит"</h2>
          <p className="text-lg mb-8 opacity-90">
            Получите бесплатную консультацию и демо-доступ к платформе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Получить демо
            </button>
            <button className="bg-ru-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
