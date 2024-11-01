// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Projects = () => {
  return (
    <Container>
      <h1>Мои проекты</h1>
      <ul>
        <li>Проект 1: Описание проекта 1</li>
        <li>Проект 2: Описание проекта 2</li>
        <li>Проект 3: Описание проекта 3</li>
      </ul>
    </Container>
  );
};

export default Projects;
