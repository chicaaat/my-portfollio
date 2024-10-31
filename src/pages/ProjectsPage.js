// src/pages/ProjectsPage.js
import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Проект 1',
      description: 'Описание проекта 1',
      image: '/assets/project1.jpg', // Укажи путь к изображению
      link: 'https://example.com/project1',
    },
    // Добавь другие проекты здесь
  ];

  return (
    <div>
      <h2>Мои проекты</h2>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsPage;
