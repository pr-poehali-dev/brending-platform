
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Создаем бренды с <span className="text-primary">характером</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Архитектурно-дизайнерское бюро "DA\LI" — ваш партнер в создании уникальных брендов с индивидуальным подходом
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Оставить бриф
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Наше портфолио
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border">
            <img
              src="/placeholder.svg"
              alt="Пример работы дизайнерского бюро"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
