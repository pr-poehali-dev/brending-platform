
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Layers, Compass, Users } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Разработка бренда",
      description: "Создаем уникальную айдентику с нуля, включая логотип, цветовую палитру, типографику и фирменный стиль."
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Дизайн интерьеров",
      description: "Разрабатываем концепции интерьеров, которые отражают ценности вашего бренда и создают запоминающийся опыт."
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: "Архитектурные решения",
      description: "Проектируем пространства, гармонично сочетающие функциональность, эстетику и ценности вашего бренда."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Командная работа",
      description: "Подбираем индивидуальную команду специалистов под ваш проект с учетом стиля, видения и навыков."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по разработке бренда, от концепции до реализации
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
