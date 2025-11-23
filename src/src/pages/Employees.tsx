import { Building2, Briefcase, Users, Bell, Shield, CheckSquare } from 'lucide-react'

export default function Employees() {
  const features = [
    {
      icon: Bell,
      title: 'Корпоративные оповещения',
      description: 'Система массового уведомления сотрудников о важных событиях'
    },
    {
      icon: Shield,
      title: 'Безопасность на рабочем месте',
      description: 'Экстренная связь с охраной и руководством в критических ситуациях'
    },
    {
      icon: CheckSquare,
      title: 'Контроль присутствия',
      description: 'Отметка о прибытии и статус безопасности сотрудников'
    },
    {
      icon: Users,
      title: 'Эвакуация персонала',
      description: 'Координация действий при эвакуации и чрезвычайных ситуациях'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="bg-green-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Building2 className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Для сотрудников</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Обеспечение безопасности персонала компаний и организаций
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Возможности для сотрудников
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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

      {/* Benefits for companies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-ru-dark mb-12">
            Преимущества для компаний
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-ru-dark mb-2">
                Соответствие нормам охраны труда
              </h3>
              <p className="text-gray-700">
                Система ИЭО помогает выполнять требования законодательства по обеспечению безопасности персонала
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-ru-dark mb-2">
                Снижение рисков
              </h3>
              <p className="text-gray-700">
                Оперативное реагирование на инциденты минимизирует потенциальный ущерб
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-ru-dark mb-2">
                Централизованное управление
              </h3>
              <p className="text-gray-700">
                Единая платформа для управления безопасностью всех офисов и подразделений
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Подключите вашу компанию</h2>
          <p className="text-lg mb-8 opacity-90">
            Обеспечьте безопасность своих сотрудников с системой ИЭО
          </p>
          <button className="bg-ru-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Подключиться
          </button>
        </div>
      </section>
    </div>
  )
}
