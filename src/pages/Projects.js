// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 15px;
  width: 300px;
  overflow: hidden;
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const ProjectDescription = styled.p`
  color: #666;
  padding: 0 15px;
`;

const ViewButton = styled.a`
  display: inline-block;
  margin: 15px 0;
  padding: 10px 20px;
  background-color: #007acc;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #005999;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Проект 1',
      description: 'Описание проекта 1',
      imageUrl: 'https://via.placeholder.com/300x200', // Замените на свои изображения
      link: '#'
    },
    {
      title: 'Проект 2',
      description: 'Описание проекта 2',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Проект 3',
      description: 'Описание проекта 3',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];

  return (
    <Container>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectImage src={project.imageUrl} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ViewButton href={project.link}>Посмотреть проект</ViewButton>
        </ProjectCard>
      ))}
    </Container>
  );
};

export default Projects;
