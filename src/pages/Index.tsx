import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Портреты', 'Свадьбы', 'События', 'Студия'];

const portfolioItems = [
  {
    id: 1,
    image: 'https://cdn.poehali.dev/projects/a53cb7dc-a76d-4e08-aad1-03c30d190eb6/files/20d39b53-ab26-4562-a6a6-41fb52441c99.jpg',
    category: 'Портреты',
    title: 'Портретная съёмка'
  },
  {
    id: 2,
    image: 'https://cdn.poehali.dev/projects/a53cb7dc-a76d-4e08-aad1-03c30d190eb6/files/a612ecba-f478-4ed3-9f8c-2a39a7d6d9ff.jpg',
    category: 'Свадьбы',
    title: 'Свадебная фотосессия'
  },
  {
    id: 3,
    image: 'https://cdn.poehali.dev/projects/a53cb7dc-a76d-4e08-aad1-03c30d190eb6/files/294cda6d-c944-4f74-87fc-64d0f67f7ee3.jpg',
    category: 'Студия',
    title: 'Студийная съёмка'
  },
  {
    id: 4,
    image: 'https://cdn.poehali.dev/projects/a53cb7dc-a76d-4e08-aad1-03c30d190eb6/files/20d39b53-ab26-4562-a6a6-41fb52441c99.jpg',
    category: 'События',
    title: 'Корпоративное событие'
  },
  {
    id: 5,
    image: 'https://cdn.poehali.dev/projects/a53cb7dc-a76d-4e08-aad1-03c30d190eb6/files/a612ecba-f478-4ed3-9f8c-2a39a7d6d9ff.jpg',
    category: 'Портреты',
    title: 'Творческий портрет'
  },
  {
    id: 6,
    image: 'https://cdn.poehali.dev/projects/a53cb7dc-a76d-4e08-aad1-03c30d190eb6/files/294cda6d-c944-4f74-87fc-64d0f67f7ee3.jpg',
    category: 'Свадьбы',
    title: 'Love Story'
  }
];

const services = [
  {
    icon: 'User',
    title: 'Портретная съёмка',
    description: 'Индивидуальные и семейные портреты в студии или на локации',
    price: 'от 5 000 ₽'
  },
  {
    icon: 'Heart',
    title: 'Свадебная съёмка',
    description: 'Полный день съёмки с обработкой всех фотографий',
    price: 'от 25 000 ₽'
  },
  {
    icon: 'Calendar',
    title: 'Съёмка событий',
    description: 'Корпоративы, дни рождения, выпускные вечера',
    price: 'от 10 000 ₽'
  },
  {
    icon: 'Camera',
    title: 'Студийная съёмка',
    description: 'Профессиональная съёмка в студии с оборудованием',
    price: 'от 7 000 ₽'
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredItems = activeCategory === 'Все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Photo Studio
          </h1>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8 absolute md:relative top-full left-0 right-0 md:top-auto bg-background md:bg-transparent p-4 md:p-0 border-b md:border-0 border-border`}>
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Прайс</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <img 
          src="https://cdn.poehali.dev/projects/a53cb7dc-a76d-4e08-aad1-03c30d190eb6/files/294cda6d-c944-4f74-87fc-64d0f67f7ee3.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ловлю моменты
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Профессиональная фотосъёмка для тех, кто ценит качество и эмоции
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection('contact')}
          >
            Заказать съёмку
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Портфолио
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Галерея моих работ в различных жанрах фотографии
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm transition-all ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                    : 'hover:border-primary'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-border hover:border-primary transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <Badge className="mb-2 bg-primary">{item.category}</Badge>
                      <h4 className="text-xl font-heading font-semibold">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Услуги
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная съёмка для любого случая
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {service.price}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Прайс-лист
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Прозрачные цены на все виды съёмок
          </p>

          <Card className="p-8 border-border">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center pb-6 border-b border-border last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon as any} size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap ml-4">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Связаться со мной
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>

          <Card className="p-8 border-border">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" className="bg-background border-border" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" className="bg-background border-border" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашей съёмке..." 
                  className="bg-background border-border min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-white font-semibold py-6"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="tel:+79001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span>+7 (900) 123-45-67</span>
            </a>
            <a href="mailto:photo@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
              <span>photo@example.com</span>
            </a>
            <a href="https://instagram.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
              <span>@photographer</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Photo Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
