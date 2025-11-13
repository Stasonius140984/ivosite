import { Users, Bell, Shield, Smartphone, AlertCircle, CheckCircle } from 'lucide-react'

export default function Citizens() {
  const features = [
    {
      icon: Bell,
      title: 'Экстренные уведомления',
      description: 'Получайте мгновенные оповещения о чрезвычайных ситуациях в вашем регионе'
    },
    {
      icon: Smartphone,
      title: 'Мобильное приложение',
      description: 'Доступ к системе через удобное мобильное приложение для iOS и Android'
    },
    {
      icon: Shield,
      title: 'Личная безопасность',
      description: 'Функция "тревожная кнопка" для немедленного вызова помощи'
    },
    {
      icon: AlertCircle,
      title: 'Информирование',
      description: 'Актуальная информация о ситуации в режиме реального времени'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="bg-ru-blue text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Users className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Для граждан</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Система экстренного оповещения для защиты вас и ваших близких
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Возможности для граждан
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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

      {/* How it works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Как это работает
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <div className="bg-ru-blue text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Регистрация в системе</h3>
                <p className="text-gray-700">Зарегистрируйтесь через мобильное приложение или веб-портал</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <div className="bg-ru-blue text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Настройка уведомлений</h3>
                <p className="text-gray-700">Выберите типы оповещений и способы получения информации</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <div className="bg-ru-blue text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Получение оповещений</h3>
                <p className="text-gray-700">Система автоматически информирует вас о важных событиях</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-ru-blue text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <CheckCircle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к системе ИЭО</h2>
          <p className="text-lg mb-8 opacity-90">
            Защитите себя и своих близких с помощью современной системы экстренного оповещения
          </p>
          <button className="bg-ru-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Зарегистрироваться
          </button>
        </div>
      </section>
    </div>
  )
}
