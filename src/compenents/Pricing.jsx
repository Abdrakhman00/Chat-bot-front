import React from 'react';

const Pricing = () => {
  const services = [
    {
      title: 'WhatsApp рассылки',
      price: '165 000 ₸',
      description: 'Поможем подключить WhatsApp Business API и зарегистрировать шаблоны сообщений, с помощью которых вы сможете писать пользователю первым. Также решим задачу с суточными лимитами WhatsApp на отправку, чтобы доставлять сообщения большему количеству получателей.',
    },
    {
      title: 'Запуск бота на любой платформе',
      price: '330 000 ₸',
      description: 'Выбирайте платформу для чат-бота: WhatsApp, Instagram, Telegram и Facebook Messenger. Мы изучим ваш бизнес и предложим варианты бота для автоматизации продаж и бизнес-процессов.',
    },
    {
      title: 'Консультации',
      price: '230 000 ₸',
      description: 'Расскажем, как усилить бизнес с помощью чат-бота, сделаем акцент на особенностях работы в популярных мессенджерах. Покажем примеры реализованных проектов и обучим ваших сотрудников.',
    },
    {
      title: 'Аудит чат-бота',
      price: '160 000 ₸',
      description: 'Проанализируем работу вашего бота и дадим рекомендации по улучшению системы мессенджер-маркетинга, автоответов и логики чат-бота.',
    },
  ];

  const customStyle = {
    primaryColor: '#6c63ff',
    hoverColor: '#554dd1',
    titleColor: '#007bff', // Синий цвет для заголовков
  };

  return (
    <div className="bg-light py-5" id="pricing">
      <div className="container">
        <h2 className="text-center mb-5 text-uppercase font-weight-bold">
          Услуги
        </h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 
                    className="card-title font-weight-bold" 
                    style={{ color: customStyle.titleColor }} // Применяем синий цвет
                  >
                    {service.title}
                  </h5>
                  <h6 className="card-subtitle mb-3 text-dark font-weight-bold">{service.price}</h6>
                  <p className="card-text text-muted flex-grow-1">{service.description}</p>
                  <a 
                    href="tel:+7 708 763 8739"
                    className="btn btn-outline-primary mt-3 align-self-stretched text-decoration-none"
                    style={{
                      borderColor: customStyle.primaryColor,
                      color: customStyle.primaryColor,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = customStyle.primaryColor;
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = customStyle.primaryColor;
                    }}
                  >
                    Заказать услугу
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
