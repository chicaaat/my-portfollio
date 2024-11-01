import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #007acc;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005999;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Title>Контакты</Title>
      <Form>
        <Input type="text" placeholder="Ваше имя" required />
        <Input type="email" placeholder="Ваш email" required />
        <TextArea placeholder="Ваше сообщение" rows="4" required />
        <SubmitButton type="submit">Отправить</SubmitButton>
      </Form>
    </Container>
  );
};

export default Contact;
