
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Palette, LayoutDashboard, Lightbulb, Briefcase, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Брендинг и айдентика",
      description: "Создание уникального визуального образа компании, включающего логотип, фирменный стиль и руководство по использованию бренда.",
      icon: <Compass className="h-10 w-10 text-primary" />,
      features: ["Логотип и фирменный стиль", "Гайдлайны и брендбук", "Корпоративная айдентика", "Нейминг и позиционирование"]
    },
    {
      title: "Графический дизайн",
      description: "Разработка визуальных коммуникаций и рекламных материалов, от печатной продукции до цифрового контента.",
      icon: <Palette className="h-10 w-10 text-primary" />,
      features: ["Печатная продукция", "Рекламные материалы", "Упаковка и этикетки", "Иллюстрации и инфографика"]
    },
    {
      title: "Дизайн интерьеров",
      description: "Создание функциональных и эстетичных пространств, отражающих индивидуальность и потребности клиента.",
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
      features: ["Жилые интерьеры", "Коммерческие пространства", "3D-визуализация", "Авторский надзор"]
    },
    {
      title: "Концептуальный дизайн",
      description: "Разработка креативных концепций и стратегий для решения сложных дизайнерских задач бизнеса.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      features: ["Креативные стратегии", "Концепт-арт", "Прототипирование", "Презентационные материалы"]
    },
    {
      title: "Проектное управление",
      description: "Комплексное сопровождение проектов от идеи до реализации с контролем всех этапов производства.",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      features: ["Планирование проекта", "Контроль качества", "Организация процессов", "Запуск и масштабирование"]
    },
    {
      title: "Командная разработка",
      description: "Формирование специализированных команд для работы над проектами любой сложности и масштаба.",
      icon: <Users className="h-10 w-10 text-primary" />,
      features: ["Подбор специалистов", "Координация работы", "Совместное проектирование", "Обмен опытом и экспертизой"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Бюро DA\LI предлагает полный спектр услуг в области архитектуры и дизайна
              с возможностью индивидуального подбора специалистов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Оставьте бриф и мы поможем подобрать идеальную команду для вашего проекта
              или работать с вами индивидуально.
            </p>
            <Button size="lg" className="px-8">Оставить бриф</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
