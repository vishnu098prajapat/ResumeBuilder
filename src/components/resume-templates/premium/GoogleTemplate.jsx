import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  width: 100%;
  max-width: 850px;
  min-height: 1100px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: 'Product Sans', ${props => props.$font || 'Arial'};
  color: #3c4043;
`;

const Header = styled.header`
  padding: 2rem;
  background: ${props => props.color || '#4285f4'};
  color: white;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1));
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Title = styled.div`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Main = styled.main`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.color || '#4285f4'};
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 1.2rem;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ExperienceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  border-left: 4px solid ${props => props.color || '#4285f4'};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const Role = styled.h3`
  font-size: 1.1rem;
  color: #202124;
  margin-bottom: 0.3rem;
`;

const Company = styled.div`
  color: ${props => props.color || '#4285f4'};
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Duration = styled.div`
  color: #5f6368;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #3c4043;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);

  h3 {
    color: ${props => props.color || '#4285f4'};
    margin-bottom: 0.8rem;
    font-size: 1rem;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: ${props => `${props.color}15` || '#4285f415'};
  color: ${props => props.color || '#4285f4'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const AchievementCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  border-top: 4px solid ${props => props.color || '#4285f4'};

  h3 {
    color: #202124;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .issuer {
    color: ${props => props.color || '#4285f4'};
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .date {
    color: #5f6368;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  p {
    color: #3c4043;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const GoogleTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#4285f4', font = 'Product Sans' } = design;

  return (
    <Resume $font={font}>
      <Header color={color}>
        <Name>{personalInfo?.fullName}</Name>
        <Title>{personalInfo?.title}</Title>
        <ContactInfo>
          {personalInfo?.email && (
            <a href={`mailto:${personalInfo.email}`}>
              <i className="fas fa-envelope" />
              {personalInfo.email}
            </a>
          )}
          {personalInfo?.phone && (
            <a href={`tel:${personalInfo.phone}`}>
              <i className="fas fa-phone" />
              {personalInfo.phone}
            </a>
          )}
          {personalInfo?.location && (
            <div>
              <i className="fas fa-map-marker-alt" />
              {personalInfo.location}
            </div>
          )}
        </ContactInfo>
      </Header>

      <Main>
        {personalInfo?.summary && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-user" /> About Me
            </SectionTitle>
            <Description>{personalInfo.summary}</Description>
          </Section>
        )}

        {experience?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-briefcase" /> Experience
            </SectionTitle>
            <ExperienceGrid>
              {experience.map((exp, index) => (
                <ExperienceCard key={index} color={color}>
                  <Role>{exp.position}</Role>
                  <Company color={color}>{exp.company}</Company>
                  <Duration>
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </Duration>
                  <Description>{exp.description}</Description>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </Section>
        )}

        {education?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-graduation-cap" /> Education
            </SectionTitle>
            <ExperienceGrid>
              {education.map((edu, index) => (
                <ExperienceCard key={index} color={color}>
                  <Role>{edu.degree}</Role>
                  <Company color={color}>{edu.school}</Company>
                  <Duration>{edu.year}</Duration>
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
            <SectionTitle color={color}>
              <i className="fas fa-laptop-code" /> Skills
            </SectionTitle>
            <SkillsGrid>
              {(skills || []).map((skill, index) => (
                <SkillTag key={index} color={color}>
                  {skill}
                </SkillTag>
              ))}
            </SkillsGrid>
          </Section>
        )}

        {achievements?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-trophy" /> Achievements
            </SectionTitle>
            <AchievementsGrid>
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} color={color}>
                  <h3>{achievement.title}</h3>
                  <div className="issuer">{achievement.issuer}</div>
                  <div className="date">{achievement.date}</div>
                  {achievement.description && (
                    <p>{achievement.description}</p>
                  )}
                </AchievementCard>
              ))}
            </AchievementsGrid>
          </Section>
        )}
      </Main>
    </Resume>
  );
};

export default GoogleTemplate; 