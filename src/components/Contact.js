import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@') || !formData.name) {
      setError('Пожалуйста, заполните все поля корректно.');
      return;
    }
    setError('');
    alert(`Отправлено: ${JSON.stringify(formData)}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Email: dplotnikov744@gmail.com</p>
      <p>Phone: +7-913-795-75-00</p>
      <p>Follow me on social media:</p>
      <p>
        <a href="https://www.instagram.com/crucifffied/profilecard/?igsh=MW5xemRvMmJnNm1jYQ==">Instagram</a> | 
        <a href="@Psy_holist">Telegram</a>
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Имя" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Сообщение"></textarea>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default Contact;