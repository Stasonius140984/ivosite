import { AlertTriangle, Building, Users, FileCheck, Radio, Smartphone } from 'lucide-react'

export default function PrivateSecurity() {
  const features = [
    {
      icon: Building,
      title: 'Управление объектами',
      description: 'Централизованное управление всеми охраняемыми объектами'
    },
    {
      icon: Users,
      title: 'Координация персонала',
      description: 'Управление штатом охранников и их расписанием'
    },
    {
      icon: FileCheck,
      title: 'Отчётность',
      description: 'Автоматическое формирование отчётов для клиентов'
    },
    {
      icon: Radio,
      title: 'Диспетчерский пункт',
      description: 'Интеграция с центральным диспетчерским пунктом'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero */}
      <section className="bg-orange-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <AlertTriangle className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">ЧОП и ГБР</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Решения для частных охранных предприятий и групп быстрого реагирования
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Возможности для ЧОП и ГБР
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-orange-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Интеграция с системой ИЭО
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
              <Smartphone className="w-12 h-12 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Мобильное приложение для патрулей</h3>
                <p className="text-gray-700">
                  Специализированное приложение для мобильных групп с GPS-трекингом и функцией тревожной кнопки
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Система вызовов ГБР</h3>
                <p className="text-gray-700">
                  Автоматическая диспетчеризация вызовов с учётом местоположения ближайших экипажей
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
              <FileCheck className="w-12 h-12 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-ru-dark mb-2">Электронный документооборот</h3>
                <p className="text-gray-700">
                  Цифровизация актов, рапортов и других документов охранной деятельности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Building className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Модернизируйте вашу ЧОП</h2>
          <p className="text-lg mb-8 opacity-90">
            Повысьте качество услуг и эффективность работы с системой ИЭО
          </p>
          <button className="bg-ru-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Подключить ЧОП
          </button>
        </div>
      </section>
    </div>
  )
}
