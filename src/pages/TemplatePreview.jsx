import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { templates } from '../components/resume-templates';

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: #f8f9fa;
  padding: 2rem;
`;

const PreviewContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  position: relative;
`;

const Sidebar = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: fit-content;
  position: sticky;
  top: 90px;
`;

const PreviewArea = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ColorPicker = styled.div`
  margin-bottom: 2rem;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ColorButton = styled.button`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  border: 2px solid ${props => props.$selected ? '#3498db' : 'transparent'};
  background: ${props => props.color};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const FontSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 2rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

const SampleData = {
  personalInfo: {
    fullName: "John Doe",
    title: "Senior Software Engineer",
    email: "john@example.com",
    phone: "+1 234 567 890",
    location: "New York, USA",
    summary: "Experienced software engineer with a passion for building scalable applications..."
  },
  experience: [
    {
      position: "Senior Software Engineer",
      company: "Tech Corp",
      startDate: "2020",
      endDate: "Present",
      description: "Led development of cloud-based solutions..."
    },
    {
      position: "Software Developer",
      company: "StartUp Inc",
      startDate: "2018",
      endDate: "2020",
      description: "Developed and maintained web applications..."
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      year: "2018",
      description: "Focus on Software Engineering and AI"
    }
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"]
};

const TemplatePreview = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [design, setDesign] = useState({
    color: '#3498db',
    font: 'Arial'
  });

  const handleUseTemplate = () => {
    // Generate a unique ID for the new resume
    const resumeId = Date.now().toString();
    
    // Create new resume with selected template
    const newResume = {
      id: resumeId,
      name: 'Untitled Resume',
      template: templateId, // Use the selected template ID
      data: {
        personalInfo: {},
        experience: [],
        education: [],
        skills: [],
        achievements: []
      },
      design: design,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Save to localStorage
    const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    localStorage.setItem('resumes', JSON.stringify([...savedResumes, newResume]));

    // Navigate to builder with the new resume
    navigate(`/builder/${resumeId}`);
  };

  const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6', '#34495e', '#1abc9c', '#d35400', '#7f8c8d', '#2c3e50'];
  const fonts = ['Arial', 'Roboto', 'Open Sans', 'Lato', 'Montserrat'];

  const Template = templates[templateId]?.component;

  if (!Template) {
    return <div>Template not found</div>;
  }

  return (
    <Container>
      <PreviewContainer>
        <Sidebar>
          <Title>{templates[templateId]?.name}</Title>
          <Description>{templates[templateId]?.description}</Description>

          <ColorPicker>
            <label>Color Theme</label>
            <ColorGrid>
              {colors.map(color => (
                <ColorButton
                  key={color}
                  color={color}
                  $selected={design.color === color}
                  onClick={() => setDesign(prev => ({ ...prev, color }))}
                />
              ))}
            </ColorGrid>
          </ColorPicker>

          <div>
            <label>Font Family</label>
            <FontSelect
              value={design.font}
              onChange={(e) => setDesign(prev => ({ ...prev, font: e.target.value }))}
            >
              {fonts.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </FontSelect>
          </div>

          <Button onClick={handleUseTemplate}>
            Use this template
          </Button>
        </Sidebar>

        <PreviewArea>
          <Template data={SampleData} design={design} />
        </PreviewArea>
      </PreviewContainer>
    </Container>
  );
};

export default TemplatePreview; 