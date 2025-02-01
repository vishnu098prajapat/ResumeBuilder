import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  width: 100%;
  height: 29.7cm; // A4 height
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 250px 1fr;
  font-family: ${props => props.$font || 'Arial'};
  
  @media print {
    width: 21cm; // A4 width
    height: 29.7cm; // A4 height
    box-shadow: none;
  }

  // Scale to fit in preview
  @media screen {
    transform: scale(0.9);
    transform-origin: top center;
  }
`;

const Sidebar = styled.div`
  background: ${props => props.color || '#2c3e50'};
  color: white;
  padding: 2rem;
  height: 100%; // Full height
`;

const Main = styled.div`
  padding: 2rem;
  overflow: hidden; // Prevent content overflow
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: white;
  margin: 0 auto 2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    width: 20px;
  }
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
`;

const Title = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1rem;
  
  h3 {
    font-size: 1rem;
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const AchievementItem = styled.div`
  margin-bottom: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h3 {
      color: ${props => props.theme.text.primary};
      font-size: 1.1rem;
      margin: 0;
    }

    span {
      color: ${props => props.theme.text.secondary};
      font-size: 0.9rem;
    }
  }

  .issuer {
    color: ${props => props.theme.primary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .description {
    color: ${props => props.theme.text.secondary};
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const ModernTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#2c3e50', font = 'Arial' } = design;

  return (
    <Resume $font={font}>
      <Sidebar color={color}>
        <ProfileImage />
        
        <ContactInfo>
          <ContactItem>
            <i className="fas fa-envelope" />
            {personalInfo.email}
          </ContactItem>
          <ContactItem>
            <i className="fas fa-phone" />
            {personalInfo.phone}
          </ContactItem>
          <ContactItem>
            <i className="fas fa-map-marker-alt" />
            {personalInfo.location}
          </ContactItem>
        </ContactInfo>

        {skills?.length > 0 && (
          <Section>
            <SectionTitle color="white">Skills</SectionTitle>
            <Skills>
              {skills.map((skill, index) => (
                <Skill key={index} color={color}>
                  {skill}
                </Skill>
              ))}
            </Skills>
          </Section>
        )}
      </Sidebar>

      <Main>
        <Name>{personalInfo.fullName}</Name>
        <Title color={color}>{personalInfo.title}</Title>

        <Section>
          <SectionTitle color={color}>Professional Summary</SectionTitle>
          <p>{personalInfo.summary}</p>
        </Section>

        <Section>
          <SectionTitle color={color}>Experience</SectionTitle>
          {experience?.map((exp, index) => (
            <ExperienceItem key={index} color={color}>
              <h3>{exp.position}</h3>
              <div className="company">{exp.company}</div>
              <div className="date">
                {exp.startDate} - {exp.endDate || 'Present'}
              </div>
              <p>{exp.description}</p>
            </ExperienceItem>
          ))}
        </Section>

        <Section>
          <SectionTitle color={color}>Education</SectionTitle>
          {education?.map((edu, index) => (
            <ExperienceItem key={index} color={color}>
              <h3>{edu.degree}</h3>
              <div className="company">{edu.school}</div>
              <div className="date">{edu.year}</div>
              {edu.description && <p>{edu.description}</p>}
            </ExperienceItem>
          ))}
        </Section>

        {achievements?.length > 0 && (
          <Section>
            <SectionTitle color={color}>Achievements & Certificates</SectionTitle>
            {achievements.map((achievement, index) => (
              <AchievementItem key={index} color={color}>
                <div className="header">
                  <h3>{achievement.title}</h3>
                  <span>{achievement.date}</span>
                </div>
                <div className="issuer">{achievement.issuer}</div>
                {achievement.description && (
                  <p className="description">{achievement.description}</p>
                )}
              </AchievementItem>
            ))}
          </Section>
        )}
      </Main>
    </Resume>
  );
};

export default ModernTemplate; 