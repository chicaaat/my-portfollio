import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 20px;
  text-align: center; /* Центрирование текста */
  background-image: url('https://kalix.club/uploads/posts/2022-12/1671647647_kalix-club-p-sinii-zadnii-fon-krasivo-1.jpg');
  background-size: cover; /* Фон будет растянут */
  background-position: center; /* Центрирование фона */
  background-repeat: no-repeat; /* Изображение не повторяется */
  position: relative; /* Позволяет разместить элементы внутри */
`;

const Skills = styled.p`
  color: white;
  margin: 5px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Skills>Навыки: JavaScript, HTML, CSS, Python</Skills>
      <p>Email: ваш_email@example.com</p>
    </FooterContainer>
  );
};
export default Footer;


