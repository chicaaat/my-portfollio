// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #333;
  color: #fff;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 Твое имя. Все права защищены.</p>
  </FooterContainer>
);

export default Footer;
