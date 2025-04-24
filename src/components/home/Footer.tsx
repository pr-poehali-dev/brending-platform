
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DA\LI</h3>
            <p className="text-muted-foreground">
              Архитектурно-дизайнерское бюро, специализирующееся на разработке брендов с нуля.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/branding" className="text-muted-foreground hover:text-primary transition-colors">
                  Разработка бренда
                </Link>
              </li>
              <li>
                <Link to="/services/interior" className="text-muted-foreground hover:text-primary transition-colors">
                  Дизайн интерьеров
                </Link>
              </li>
              <li>
                <Link to="/services/architecture" className="text-muted-foreground hover:text-primary transition-colors">
                  Архитектурные решения
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/specialists" className="text-muted-foreground hover:text-primary transition-colors">
                  Специалисты
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Портфолио
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>г. Москва, ул. Примерная, 123</li>
              <li>info@dali-studio.ru</li>
              <li>+7 (999) 123-45-67</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DA\LI. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
