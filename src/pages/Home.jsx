import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.div`
  text-align: center;
  max-width: 800px;
  animation: ${fadeInUp} 0.8s ease-out;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  span {
    color: #3498db;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: #3498db;
    transform: skewX(-20deg);
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  background: ${props => props.$primary ? '#3498db' : 'transparent'};
  color: ${props => props.$primary ? 'white' : '#3498db'};
  border: ${props => props.$primary ? 'none' : '2px solid #3498db'};

  &:hover {
    transform: translateY(-5px) rotateX(10deg);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background: ${props => props.$primary ? '#2980b9' : '#3498db'};
    color: white;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  background: ${props => props.color};
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  opacity: 0.1;
  animation: ${float} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* Decorative floating shapes */}
      <FloatingShape 
        color="#3498db" 
        $size={100} 
        $duration={6} 
        $delay={0} 
        style={{ top: '10%', left: '10%' }} 
      />
      <FloatingShape 
        color="#e74c3c" 
        $size={80} 
        $duration={8} 
        $delay={1} 
        style={{ top: '60%', right: '15%' }} 
      />
      <FloatingShape 
        color="#2ecc71" 
        $size={120} 
        $duration={7} 
        $delay={2} 
        style={{ bottom: '10%', left: '20%' }} 
      />

      <HeroSection>
        <Title>
          Create Your <span>Perfect</span> Resume
        </Title>
        <Subtitle>
          Build professional resumes in minutes with our easy-to-use builder. 
          Choose from modern templates and get hired faster.
        </Subtitle>
        <ButtonGroup>
          <Button $primary onClick={() => navigate('/templates')}>
            Create Resume <i className="fas fa-arrow-right"></i>
          </Button>
          <Button onClick={() => navigate('/dashboard')}>
            My Resumes <i className="fas fa-folder"></i>
          </Button>
        </ButtonGroup>
      </HeroSection>
    </Container>
  );
};

export default Home; 