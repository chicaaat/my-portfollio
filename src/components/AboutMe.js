// src/components/AboutMe.js
import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  padding: 40px;
  background: #f0f0f0;
  text-align: center;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2>Обо мне</h2>
      <p>Я разработчик, занимающийся созданием веб-приложений с использованием React и других технологий.</p>
    </AboutMeContainer>
  );
};

export default AboutMe;
