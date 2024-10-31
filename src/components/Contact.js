// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <h2>Связаться со мной</h2>
      <form>
        <input type="text" placeholder="Имя" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Сообщение" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
