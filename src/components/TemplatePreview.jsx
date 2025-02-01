import React from 'react';
import styled from 'styled-components';

const PreviewCard = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 400px;
  background: white;
  position: relative;
  overflow: hidden;
  padding: 10px;

  .resume-preview {
    transform: scale(0.3);
    transform-origin: top center;
    width: 100%;
    height: auto;
  }
`;

const PreviewInfo = styled.div`
  padding: 1rem;
  background: white;
  border-top: 1px solid #eee;
`;

const TemplateName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
`;

const TemplateDescription = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #666;
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

// Sample data for preview
const previewData = {
  personalInfo: {
    fullName: "John Doe",
    title: "Software Engineer",
    email: "john@example.com",
    phone: "(123) 456-7890",
    location: "New York, USA",
    summary: "Experienced software engineer with a passion for building scalable applications."
  },
  experience: [
    {
      position: "Senior Developer",
      company: "Tech Corp",
      startDate: "2020",
      endDate: "Present",
      description: "Led development of core features"
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      year: "2019"
    }
  ],
  skills: ["JavaScript", "React", "Node.js", "Python"],
  achievements: [
    {
      title: "Best Developer Award",
      issuer: "Tech Corp",
      date: "2021"
    }
  ]
};

const TemplatePreview = ({ template, onSelect }) => {
  const TemplateComponent = template.component;

  return (
    <PreviewCard onClick={() => onSelect(template)}>
      <PreviewContainer>
        <div className="resume-preview">
          <TemplateComponent 
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
      <PreviewInfo>
        <TemplateName>{template.name}</TemplateName>
        <TemplateDescription>{template.description}</TemplateDescription>
      </PreviewInfo>
    </PreviewCard>
  );
};

export default TemplatePreview; 