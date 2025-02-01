import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { templates } from '../components/resume-templates';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  perspective: 1000px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) skewX(-20deg);
    width: 100px;
    height: 4px;
    background: #3498db;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  animation: ${slideIn} 0.8s ease-out;
`;

const FilterButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: ${props => props.$active ? '#3498db' : '#f8f9fa'};
  color: ${props => props.$active ? 'white' : '#666'};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-2px) rotateX(5deg);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    background: ${props => props.$active ? '#2980b9' : '#eee'};
  }

  &:active {
    transform: translateY(1px);
  }
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const TemplateCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 450px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 320px;
  background: white;
  position: relative;
  overflow: hidden;
  padding: 0;
  border-bottom: 1px solid #eee;

  .resume-preview {
    transform: scale(0.23);
    transform-origin: top center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(to bottom, transparent, white);
      pointer-events: none;
    }
  }
`;

const TemplateInfo = styled.div`
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TemplateName = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const TemplateDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const UseTemplateButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

const PremiumBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ffd700;
  color: #000;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 10;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
`;

const previewData = {
  personalInfo: {
    fullName: "John Doe",
    title: "Software Engineer",
    email: "john@example.com",
    phone: "(123) 456-7890",
    location: "New York, USA",
    summary: "Experienced software engineer with expertise in full-stack development."
  },
  experience: [
    {
      position: "Senior Software Engineer",
      company: "Tech Corp",
      startDate: "2020",
      endDate: "Present",
      description: "Led development of multiple high-impact projects."
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      year: "2019",
      description: "Major in Software Engineering"
    }
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python"
  ],
  achievements: [
    {
      title: "Best Innovation Award",
      issuer: "Tech Corp",
      date: "2021",
      description: "Awarded for innovative solutions"
    }
  ]
};

const TemplateGallery = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates', icon: 'fas fa-th-large' },
    { id: 'professional', name: 'Professional', icon: 'fas fa-briefcase' },
    { id: 'creative', name: 'Creative', icon: 'fas fa-paint-brush' },
    { id: 'simple', name: 'Simple', icon: 'fas fa-feather' }
  ];

  const filteredTemplates = Object.entries(templates).filter(([_, template]) => {
    if (activeFilter === 'all') return true;
    return template.category === activeFilter;
  });

  const handleSelectTemplate = (templateId) => {
    // Create a new resume with the selected template
    const newResumeId = Date.now().toString();
    const newResume = {
      id: newResumeId,
      name: 'Untitled Resume',
      template: templateId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      data: {
        personalInfo: {},
        experience: [],
        education: [],
        skills: [],
        achievements: []
      },
      design: {
        color: '#3498db',
        font: 'Arial'
      }
    };

    // Save to localStorage
    const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    savedResumes.push(newResume);
    localStorage.setItem('resumes', JSON.stringify(savedResumes));

    // Navigate to builder with new resume
    navigate(`/builder/${newResumeId}`);
  };

  return (
    <Container>
      <Header>
        <Title>Choose Your Template</Title>
        <Subtitle>
          Select from our professionally designed templates to create your perfect resume
        </Subtitle>
      </Header>

      <FilterSection>
        {categories.map(category => (
          <FilterButton
            key={category.id}
            $active={activeFilter === category.id}
            onClick={() => setActiveFilter(category.id)}
          >
            <i className={category.icon}></i> {category.name}
            <span className="count">
              ({category.id === 'all' 
                ? Object.keys(templates).length 
                : Object.values(templates).filter(t => t.category === category.id).length})
            </span>
          </FilterButton>
        ))}
      </FilterSection>

      <TemplateGrid>
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map(([id, template]) => (
            <TemplateCard key={id}>
              <PreviewContainer>
                <div className="resume-preview">
                  <template.component 
                    data={previewData}
                    design={{
                      color: template.company === 'google' ? '#4285f4' : 
                             template.company === 'amazon' ? '#FF9900' :
                             template.company === 'microsoft' ? '#00A4EF' : '#2c3e50',
                      font: 'Arial'
                    }}
                  />
                </div>
                {template.premium && <PremiumBadge>Premium</PremiumBadge>}
              </PreviewContainer>
              <TemplateInfo>
                <TemplateName>{template.name}</TemplateName>
                <TemplateDescription>{template.description}</TemplateDescription>
                <UseTemplateButton onClick={() => handleSelectTemplate(id)}>
                  Use this template
                </UseTemplateButton>
              </TemplateInfo>
            </TemplateCard>
          ))
        ) : (
          <EmptyState>
            <p>No templates found in this category.</p>
          </EmptyState>
        )}
      </TemplateGrid>
    </Container>
  );
};

export default TemplateGallery; 