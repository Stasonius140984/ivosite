import { Shield, Video, AlertTriangle, Radio, Map, Eye } from 'lucide-react'

export default function Security() {
  const features = [
    {
      icon: Video,
      title: 'Видеонаблюдение',
      description: 'Интеграция с системами видеонаблюдения для полного контроля территории'
    },
    {
      icon: AlertTriangle,
      title: 'Тревожные сигналы',
      description: 'Мгновенное получение и обработка сигналов тревоги'
    },
    {
      icon: Radio,
      title: 'Связь с экстренными службами',
      description: 'Прямая линия связи с полицией, МЧС и скорой помощью'
    },
    {
      icon: Map,
      title: 'Мониторинг объектов',
      description: 'Отслеживание состояния охраняемых объектов в режиме реального времени'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero */}
      <section className="bg-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Для охраны</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Профессиональные инструменты для охранников и сотрудников безопасности
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Функционал для охраны
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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

      {/* Tasks */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Задачи охраны в системе ИЭО
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <Eye className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold text-ru-dark mb-2">Контроль доступа</h3>
              <p className="text-gray-700">
                Управление системами контроля и управления доступом (СКУД)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <AlertTriangle className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold text-ru-dark mb-2">Реагирование на инциденты</h3>
              <p className="text-gray-700">
                Быстрое реагирование на нештатные ситуации и инциденты
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Radio className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold text-ru-dark mb-2">Патрулирование</h3>
              <p className="text-gray-700">
                Координация маршрутов патрулирования и обходов территории
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Map className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold text-ru-dark mb-2">Журнал событий</h3>
              <p className="text-gray-700">
                Автоматическое ведение журнала всех событий и происшествий
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Повысьте эффективность охраны</h2>
          <p className="text-lg mb-8 opacity-90">
            Современные технологии для профессиональной работы служб безопасности
          </p>
          <button className="bg-ru-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Начать работу
          </button>
        </div>
      </section>
    </div>
  )
}
