// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 224px;
  text-align: center;
  background-image: url('https://kalix.club/uploads/posts/2022-12/1671647647_kalix-club-p-sinii-zadnii-fon-krasivo-1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 36px;
  color: white;
`;

const Description = styled.p`
  font-size: 18px;
  color: white;
`;

const Footer = styled.div`
  color: white;
  padding: 20px;
  width: 100%; /* Занимает всю ширину */
  text-align: center; /* Центрирование текста */
`;


const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Email = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #ddd;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Title>Добро пожаловать в мое портфолио!</Title>
        <Description>Здесь вы можете узнать о моих проектах и навыках.</Description>
      </div>
      <Footer>
        <h2>Мои навыки и знания</h2>
        <SkillsContainer>
          <Skill>
            <SkillIcon src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
            <p>JavaScript</p>
          </Skill>
          <Skill>
            <SkillIcon src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
            <p>HTML</p>
          </Skill>
          <Skill>
            <SkillIcon src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
            <p>CSS</p>
          </Skill>
          <Skill>
            <SkillIcon src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
            <p>Python</p>
          </Skill>
        </SkillsContainer>
        <Email>Свяжитесь со мной: akmatbekovc1@gmail.com</Email>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
