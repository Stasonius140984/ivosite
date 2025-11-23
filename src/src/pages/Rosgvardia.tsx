import { Shield, Star, Radio, Map, Users, FileText } from 'lucide-react'

export default function Rosgvardia() {
  const features = [
    {
      icon: Radio,
      title: 'Защищённая связь',
      description: 'Криптографически защищённые каналы связи для оперативного взаимодействия'
    },
    {
      icon: Map,
      title: 'Тактическая карта',
      description: 'Интерактивная карта с отображением сил и средств в реальном времени'
    },
    {
      icon: Users,
      title: 'Координация подразделений',
      description: 'Управление и координация действий оперативных групп'
    },
    {
      icon: FileText,
      title: 'Секретное делопроизводство',
      description: 'Работа с документами ограниченного доступа'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero */}
      <section className="bg-ru-red text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Star className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Росгвардия</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Специализированный модуль для подразделений Федеральной службы войск национальной гвардии
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Функционал для Росгвардии
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-ru-red">
                  <div className="bg-ru-red w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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

      {/* Integration */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Интеграция с государственными системами
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-ru-blue">
              <h3 className="text-xl font-bold text-ru-dark mb-2">
                ЕГИССО (Единая государственная информационная система социального обеспечения)
              </h3>
              <p className="text-gray-700">
                Обмен данными с государственными информационными системами
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-ru-blue">
              <h3 className="text-xl font-bold text-ru-dark mb-2">
                РСЧС (Единая государственная система предупреждения и ликвидации ЧС)
              </h3>
              <p className="text-gray-700">
                Взаимодействие с системой МЧС для координации действий при чрезвычайных ситуациях
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-ru-blue">
              <h3 className="text-xl font-bold text-ru-dark mb-2">
                Система-112
              </h3>
              <p className="text-gray-700">
                Интеграция с системой обеспечения вызова экстренных оперативных служб
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-16 px-4 bg-ru-dark text-white">
        <div className="container mx-auto max-w-4xl">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-center mb-6">Информационная безопасность</h2>
          <div className="bg-white/10 p-8 rounded-lg">
            <p className="text-lg mb-4">
              Модуль для Росгвардии обеспечивает максимальный уровень защиты информации:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-ru-red mt-1">▪</span>
                <span>Соответствие требованиям ФСТЭК России</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ru-red mt-1">▪</span>
                <span>Сертифицированные средства криптографической защиты информации (СКЗИ)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ru-red mt-1">▪</span>
                <span>Многоуровневая система разграничения доступа</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ru-red mt-1">▪</span>
                <span>Аудит всех действий пользователей</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-ru-red text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Star className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Подключение для подразделений Росгвардии</h2>
          <p className="text-lg mb-8 opacity-90">
            Для получения доступа к системе обратитесь в профильное управление
          </p>
          <button className="bg-white text-ru-red hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Подать заявку
          </button>
        </div>
      </section>
    </div>
  )
}
