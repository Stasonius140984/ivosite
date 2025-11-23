import { Heart, Smartphone, MapPin, Bell, Users, Shield } from 'lucide-react'

export default function Children() {
  const features = [
    {
      icon: MapPin,
      title: 'GPS-трекинг',
      description: 'Родители всегда знают, где находится их ребёнок'
    },
    {
      icon: Bell,
      title: 'Тревожная кнопка',
      description: 'Одно нажатие — и помощь уже в пути'
    },
    {
      icon: Users,
      title: 'Безопасные зоны',
      description: 'Оповещения о прибытии в школу, дом или кружки'
    },
    {
      icon: Smartphone,
      title: 'Детское приложение',
      description: 'Простой и понятный интерфейс для детей'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Heart className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Юный Щит</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Система безопасности для детей — спокойствие для родителей
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Возможности "Юного Щита"
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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

      {/* How it helps parents */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Как это помогает родителям
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Контроль маршрута</h3>
              <p className="text-gray-700">
                История перемещений ребёнка в течение дня
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Уведомления</h3>
              <p className="text-gray-700">
                Автоматические оповещения о важных событиях
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-ru-dark mb-2">Экстренная связь</h3>
              <p className="text-gray-700">
                Мгновенное уведомление при нажатии тревожной кнопки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Варианты использования
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <Smartphone className="w-12 h-12 text-pink-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Мобильное приложение</h3>
                <p className="text-gray-700">
                  Установите приложение на смартфон ребёнка — простое и безопасное решение для подростков
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <MapPin className="w-12 h-12 text-pink-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Умные часы</h3>
                <p className="text-gray-700">
                  Совместимость с популярными моделями детских GPS-часов
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-pink-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">GPS-трекеры</h3>
                <p className="text-gray-700">
                  Компактные устройства, которые можно положить в рюкзак или карман
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Защитите своих детей</h2>
          <p className="text-lg mb-8 opacity-90">
            Присоединяйтесь к тысячам родителей, которые выбрали "Юный Щит"
          </p>
          <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Подключить "Юный Щит"
          </button>
        </div>
      </section>
    </div>
  )
}
