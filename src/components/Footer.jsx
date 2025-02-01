import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #3498db;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    color: #ecf0f1;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 1234567890</p>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 Resume Builder. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 