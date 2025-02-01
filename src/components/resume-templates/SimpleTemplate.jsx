import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 1000px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 3rem;
  font-family: ${props => props.$font || 'Arial'};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.color || '#2c3e50'};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #666;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  i {
    color: ${props => props.color || '#2c3e50'};
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 2rem 0;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: ${props => props.color || '#2c3e50'};
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Summary = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const Position = styled.h3`
  font-size: 1.1rem;
  color: ${props => props.theme.text.primary};
  margin: 0 0 0.2rem 0;
`;

const Company = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const Duration = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.secondary};
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const AchievementItem = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  color: #666;
  font-size: 0.95rem;
  padding: 0.5rem;
  border-left: 2px solid ${props => props.color || '#2c3e50'};
`;

const SimpleTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#2c3e50', font = 'Arial' } = design;

  return (
    <Resume $font={font}>
      <Header>
        <Name>{personalInfo.fullName}</Name>
        <Title>{personalInfo.title}</Title>
        
        <ContactInfo>
          {personalInfo.email && (
            <ContactItem>
              <i className="fas fa-envelope" /> {personalInfo.email}
            </ContactItem>
          )}
          {personalInfo.phone && (
            <ContactItem>
              <i className="fas fa-phone" /> {personalInfo.phone}
            </ContactItem>
          )}
          {personalInfo.location && (
            <ContactItem>
              <i className="fas fa-map-marker-alt" /> {personalInfo.location}
            </ContactItem>
          )}
        </ContactInfo>
      </Header>

      {personalInfo.summary && (
        <Section>
          <SectionTitle color={color}>Professional Summary</SectionTitle>
          <Summary>{personalInfo.summary}</Summary>
        </Section>
      )}

      {experience?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Experience</SectionTitle>
          {experience.map((exp, index) => (
            <ExperienceItem key={index}>
              <ExperienceHeader>
                <div>
                  <Position>{exp.position}</Position>
                  <Company>{exp.company}</Company>
                </div>
                <Duration>
                  {exp.startDate} - {exp.endDate || 'Present'}
                </Duration>
              </ExperienceHeader>
              <Description>{exp.description}</Description>
            </ExperienceItem>
          ))}
        </Section>
      )}

      {education?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Education</SectionTitle>
          {education.map((edu, index) => (
            <ExperienceItem key={index}>
              <ExperienceHeader>
                <div>
                  <Position>{edu.degree}</Position>
                  <Company>{edu.school}</Company>
                </div>
                <Duration>{edu.startYear} - {edu.endYear}</Duration>
              </ExperienceHeader>
              {edu.description && <Description>{edu.description}</Description>}
            </ExperienceItem>
          ))}
        </Section>
      )}

      {achievements?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Achievements & Certificates</SectionTitle>
          {achievements.map((achievement, index) => (
            <AchievementItem key={index}>
              <ExperienceHeader>
                <div>
                  <Position>{achievement.title}</Position>
                  <Company>{achievement.issuer}</Company>
                </div>
                <Duration>{achievement.date}</Duration>
              </ExperienceHeader>
              {achievement.description && (
                <Description>{achievement.description}</Description>
              )}
            </AchievementItem>
          ))}
        </Section>
      )}

      {skills?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Skills</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillItem key={index} color={color}>
                {skill}
              </SkillItem>
            ))}
          </SkillsGrid>
        </Section>
      )}
    </Resume>
  );
};

export default SimpleTemplate; 