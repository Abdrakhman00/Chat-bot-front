import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5" id="contact">
      <h2 className="text-center mb-4">Свяжитесь с нами</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Имя</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Введите ваше имя" 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Введите ваш email" 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Сообщение</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="4" 
                placeholder="Введите ваше сообщение"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Отправить сообщение</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
