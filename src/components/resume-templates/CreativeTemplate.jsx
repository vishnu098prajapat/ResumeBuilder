import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 1000px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: ${props => props.$font || 'Arial'};
  position: relative;
  overflow: hidden;
`;

const Header = styled.header`
  background: ${props => props.color || '#3498db'};
  color: white;
  padding: 3rem 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background: inherit;
    transform: skewY(-4deg);
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  i {
    font-size: 1.2rem;
  }
`;

const Content = styled.main`
  padding: 4rem 2rem 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.color || '#3498db'};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:before {
    content: '';
    width: 30px;
    height: 3px;
    background: currentColor;
    display: block;
  }
`;

const Summary = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExperienceCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.color || '#3498db'};
    border-radius: 4px 0 0 4px;
  }
`;

const Position = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.color || '#3498db'};
  margin-bottom: 0.5rem;
`;

const Company = styled.div`
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const Date = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillTag = styled.span`
  background: ${props => `${props.color}11` || '#3498db11'};
  color: ${props => props.color || '#3498db'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 2px solid ${props => `${props.color}22` || '#3498db22'};
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const AchievementCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  border-top: 3px solid ${props => props.color};
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AchievementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.1rem;
    color: ${props => props.theme.text.primary};
    margin: 0;
  }

  span {
    color: ${props => props.theme.text.secondary};
    font-size: 0.9rem;
  }
`;

const AchievementIssuer = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const AchievementDescription = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const CreativeTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#2c3e50', font = 'Arial' } = design;

  return (
    <Resume $font={font}>
      <Header color={color}>
        <Name>{personalInfo?.fullName}</Name>
        <Title>{personalInfo?.title}</Title>
        <ContactInfo>
          <div>
            <i className="fas fa-envelope" />
            {personalInfo?.email}
          </div>
          <div>
            <i className="fas fa-phone" />
            {personalInfo?.phone}
          </div>
          <div>
            <i className="fas fa-map-marker-alt" />
            {personalInfo?.location}
          </div>
        </ContactInfo>
      </Header>

      <Content>
        {personalInfo?.summary && (
          <Section>
            <SectionTitle color={color}>About Me</SectionTitle>
            <Summary>{personalInfo.summary}</Summary>
          </Section>
        )}

        {experience?.length > 0 && (
          <Section>
            <SectionTitle color={color}>Experience</SectionTitle>
            <ExperienceGrid>
              {experience.map((exp, index) => (
                <ExperienceCard key={index} color={color}>
                  <Position color={color}>{exp.position}</Position>
                  <Company>{exp.company}</Company>
                  <Date>
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </Date>
                  <Description>{exp.description}</Description>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </Section>
        )}

        {education?.length > 0 && (
          <Section>
            <SectionTitle color={color}>Education</SectionTitle>
            <ExperienceGrid>
              {education.map((edu, index) => (
                <ExperienceCard key={index} color={color}>
                  <Position color={color}>{edu.degree}</Position>
                  <Company>{edu.school}</Company>
                  <Date>{edu.year}</Date>
                  {edu.description && (
                    <Description>{edu.description}</Description>
                  )}
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </Section>
        )}

        {skills?.length > 0 && (
          <Section>
            <SectionTitle color={color}>Skills</SectionTitle>
            <SkillsContainer>
              {skills.map((skill, index) => (
                <SkillTag key={index} color={color}>
                  {skill}
                </SkillTag>
              ))}
            </SkillsContainer>
          </Section>
        )}

        {achievements?.length > 0 && (
          <Section>
            <SectionTitle>
              <IconCircle color={color}>
                <i className="fas fa-trophy" />
              </IconCircle>
              Achievements & Certificates
            </SectionTitle>
            <AchievementsGrid>
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} color={color}>
                  <AchievementHeader>
                    <h3>{achievement.title}</h3>
                    <span>{achievement.date}</span>
                  </AchievementHeader>
                  <AchievementIssuer>{achievement.issuer}</AchievementIssuer>
                  {achievement.description && (
                    <AchievementDescription>
                      {achievement.description}
                    </AchievementDescription>
                  )}
                </AchievementCard>
              ))}
            </AchievementsGrid>
          </Section>
        )}
      </Content>
    </Resume>
  );
};

export default CreativeTemplate; 