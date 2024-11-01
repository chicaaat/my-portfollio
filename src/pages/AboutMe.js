// src/pages/AboutMe.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: yellow ;
`;

const Title = styled.h1`
  color: #007acc;
`;

const Description = styled.p`
  max-width: 600px;
  text-align: center;
  color: #666;
`;

const Image = styled.img`
  width: 300px; 
  height: auto; 
  border-radius: 1000px;
  border:5px solid whire;
  margin-top: 20px; 
`;

const AboutMe = () => {
  return (
    <Container>
      <Title>Обо мне</Title>
      <Description>
        Меня зовут Акматбеков Чынгыз 2008года рождения на данный момент я не программист но в будущем может стану.Сейчас я учусь в колледже!
        
      <Image src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/d6/Superman_Man_of_Steel.jpg/411px-Superman_Man_of_Steel.jpg" alt="Супермен" />
      </Description>
    </Container>
  );
};

export default AboutMe;
