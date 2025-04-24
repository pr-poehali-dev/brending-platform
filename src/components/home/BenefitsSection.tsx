
import { Badge } from "@/components/ui/badge";

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Clients */}
          <div className="space-y-6">
            <Badge variant="outline" className="px-3 py-1">Для клиентов</Badge>
            <h2 className="text-3xl font-bold">Подберите своего идеального специалиста</h2>
            <p className="text-muted-foreground">
              Наша платформа предоставляет уникальную возможность найти специалистов, чей стиль и видение полностью соответствуют вашим ожиданиям.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Выбор специалистов с разными стилями и видением</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Контроль процесса на всех этапах производства</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Возможность внести изменения в процессе работы</span>
              </li>
            </ul>
          </div>
          
          {/* For Specialists */}
          <div className="space-y-6">
            <Badge variant="outline" className="px-3 py-1">Для специалистов</Badge>
            <h2 className="text-3xl font-bold">Развивайте свой профессионализм</h2>
            <p className="text-muted-foreground">
              Присоединяйтесь к нашей команде, получайте новый опыт и развивайте свои навыки, работая над интересными проектами.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Опыт работы в команде с профессионалами разных направлений</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Возможность выбора интересных брифов</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Индивидуальная работа или формирование команд под проекты</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
