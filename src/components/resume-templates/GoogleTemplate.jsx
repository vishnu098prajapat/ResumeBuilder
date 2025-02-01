import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Google Sans', 'Product Sans', 'Roboto', sans-serif;
  color: #202124;
  background: white;
  line-height: 1.6;
`;

const Header = styled.header`
  margin-bottom: 35px;
`;

const Name = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: #1a73e8;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`;

const Summary = styled.div`
  font-size: 16px;
  color: #5f6368;
  max-width: 600px;
  margin-bottom: 15px;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  color: #5f6368;
  font-size: 14px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #202124;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #1a73e8;
`;

const ExperienceItem = styled.div`
  margin-bottom: 25px;
  page-break-inside: avoid;
`;

const RoleHeader = styled.div`
  margin-bottom: 8px;
`;

const CompanyName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #202124;
  margin-bottom: 4px;
`;

const RoleTitle = styled.div`
  font-size: 15px;
  color: #1a73e8;
  font-weight: 500;
`;

const DateLocation = styled.div`
  font-size: 14px;
  color: #5f6368;
  margin-bottom: 8px;
`;

const ImpactList = styled.ul`
  margin: 0;
  padding-left: 18px;
  
  li {
    margin-bottom: 8px;
    font-size: 14px;
    color: #3c4043;
    
    strong {
      color: #202124;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const SkillCategory = styled.div`
  margin-bottom: 15px;
`;

const CategoryName = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #202124;
  margin-bottom: 8px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  padding: 4px 10px;
  background: #e8f0fe;
  color: #1a73e8;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
`;

const ProjectSection = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
`;

const ProjectTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #202124;
  margin-bottom: 8px;
`;

const GoogleTemplate = ({ data, customizations = {} }) => {
  return (
    <Resume>
      <Header>
        <Name>{data.personalInfo.fullName}</Name>
        <Summary>{data.personalInfo.summary}</Summary>
        <ContactInfo>
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
          {data.personalInfo.github && <span>{data.personalInfo.github}</span>}
        </ContactInfo>
      </Header>

      <Section>
        <SectionTitle>Professional Experience</SectionTitle>
        {data.experience?.map((exp, index) => (
          <ExperienceItem key={index}>
            <RoleHeader>
              <CompanyName>{exp.company}</CompanyName>
              <RoleTitle>{exp.position}</RoleTitle>
              <DateLocation>
                {exp.startDate} - {exp.endDate || 'Present'} | {exp.location}
              </DateLocation>
            </RoleHeader>
            
            <ImpactList>
              {exp.achievements?.map((achievement, i) => (
                <li key={i}>
                  <strong>{achievement.impact}</strong> by {achievement.action} 
                  resulting in {achievement.result}
                </li>
              ))}
            </ImpactList>

            {exp.projects && (
              <ProjectSection>
                <ProjectTitle>Key Projects</ProjectTitle>
                <ImpactList>
                  {exp.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ImpactList>
              </ProjectSection>
            )}
          </ExperienceItem>
        ))}
      </Section>

      <Section>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          {Object.entries(data.technicalSkills || {}).map(([category, skills]) => (
            <SkillCategory key={category}>
              <CategoryName>{category}</CategoryName>
              <SkillsList>
                {skills.map((skill, i) => (
                  <SkillTag key={i}>{skill.name}</SkillTag>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        {data.education?.map((edu, index) => (
          <ExperienceItem key={index}>
            <CompanyName>{edu.school}</CompanyName>
            <RoleTitle>{edu.degree}</RoleTitle>
            <DateLocation>
              {edu.startYear} - {edu.endYear} | GPA: {edu.grade}
            </DateLocation>
            {edu.achievements && (
              <ImpactList>
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ImpactList>
            )}
          </ExperienceItem>
        ))}
      </Section>
    </Resume>
  );
};

export default GoogleTemplate; 