import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  width: 100%;
  max-width: 850px;
  min-height: 1100px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 6.4px 14.4px rgba(0,0,0,0.13);
  font-family: ${props => props.$font || 'Segoe UI'};
  color: #323130;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.color || '#0078D4'};
  }
`;

const Header = styled.header`
  padding: 2.5rem 3rem;
  background: #faf9f8;
  border-bottom: 1px solid #edebe9;
`;

const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  color: #323130;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
`;

const Title = styled.div`
  font-size: 1.4rem;
  color: ${props => props.color || '#0078D4'};
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  font-size: 0.95rem;
  color: #605e5c;

  a {
    color: #0078D4;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s;

    &:hover {
      color: #106ebe;
    }
  }
`;

const Main = styled.main`
  padding: 2.5rem 3rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #323130;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  i {
    color: ${props => props.color || '#0078D4'};
    font-size: 1.2rem;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1.6px 3.6px rgba(0,0,0,0.13);
  margin-bottom: 1rem;
  transition: all 0.2s;
  border: 1px solid transparent;

  &:hover {
    border-color: ${props => props.color || '#0078D4'};
    transform: translateY(-2px);
    box-shadow: 0 3.2px 7.2px rgba(0,0,0,0.13);
  }
`;

const Role = styled.h3`
  font-size: 1.2rem;
  color: #323130;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const Company = styled.div`
  color: ${props => props.color || '#0078D4'};
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Duration = styled.div`
  color: #605e5c;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  color: #323130;
  font-size: 0.95rem;
  line-height: 1.6;

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        color: ${props => props.color || '#0078D4'};
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const SkillCategory = styled(Card)`
  margin: 0;
  padding: 1.2rem 1.5rem;

  h3 {
    color: ${props => props.color || '#0078D4'};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: ${props => `${props.color}10` || '#0078D410'};
  color: ${props => props.color || '#0078D4'};
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProjectCard = styled(Card)`
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: ${props => `linear-gradient(135deg, transparent 50%, ${props.color}10 50%)`};
  }
`;

const GrowthMindsetCard = styled(Card)`
  background: #faf9f8;
  border-left: 4px solid ${props => props.color || '#0078D4'};
`;

const AchievementCard = styled(Card)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
`;

const AchievementIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => `${props.color}10` || '#0078D410'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color || '#0078D4'};
  font-size: 1.2rem;
`;

const MicrosoftTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#0078D4', font = 'Segoe UI' } = design;

  // Group skills by Microsoft technologies
  const skillCategories = {
    cloud: {
      title: 'Cloud & Azure',
      icon: 'fas fa-cloud',
      skills: skills?.filter(skill => skill.category === 'cloud')
    },
    development: {
      title: 'Development',
      icon: 'fas fa-code',
      skills: skills?.filter(skill => skill.category === 'development')
    },
    microsoft: {
      title: 'Microsoft Technologies',
      icon: 'fab fa-microsoft',
      skills: skills?.filter(skill => skill.category === 'microsoft')
    },
    soft: {
      title: 'Professional Skills',
      icon: 'fas fa-users',
      skills: skills?.filter(skill => skill.category === 'soft')
    }
  };

  return (
    <Resume $font={font} color={color}>
      <Header>
        <Name>{personalInfo?.fullName}</Name>
        <Title color={color}>{personalInfo?.title}</Title>
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
          {personalInfo?.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
              LinkedIn
            </a>
          )}
          {personalInfo?.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
              GitHub
            </a>
          )}
        </ContactInfo>
      </Header>

      <Main>
        {personalInfo?.summary && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-user" /> Professional Summary
            </SectionTitle>
            <GrowthMindsetCard color={color}>
              <Description color={color}>{personalInfo.summary}</Description>
            </GrowthMindsetCard>
          </Section>
        )}

        {experience?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-briefcase" /> Professional Experience
            </SectionTitle>
            {experience.map((exp, index) => (
              <Card key={index} color={color}>
                <Role>{exp.position}</Role>
                <Company color={color}>{exp.company}</Company>
                <Duration>
                  {exp.startDate} - {exp.endDate || 'Present'}
                </Duration>
                <Description color={color}>
                  <ul>
                    {exp.description.split('\n').map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Description>
              </Card>
            ))}
          </Section>
        )}

        {skills?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-laptop-code" /> Technical Proficiencies
            </SectionTitle>
            <SkillsGrid>
              {Object.entries(skillCategories).map(([key, category]) => (
                category.skills?.length > 0 && (
                  <SkillCategory key={key} color={color}>
                    <h3>
                      <i className={category.icon} /> {category.title}
                    </h3>
                    <SkillList>
                      {category.skills.map((skill, index) => (
                        <SkillTag key={index} color={color}>
                          {skill}
                        </SkillTag>
                      ))}
                    </SkillList>
                  </SkillCategory>
                )
              ))}
            </SkillsGrid>
          </Section>
        )}

        {achievements?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-trophy" /> Achievements & Certifications
            </SectionTitle>
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} color={color}>
                <AchievementIcon color={color}>
                  <i className="fas fa-certificate" />
                </AchievementIcon>
                <div>
                  <Role>{achievement.title}</Role>
                  <Company color={color}>{achievement.issuer}</Company>
                  <Duration>{achievement.date}</Duration>
                  {achievement.description && (
                    <Description color={color}>{achievement.description}</Description>
                  )}
                </div>
              </AchievementCard>
            ))}
          </Section>
        )}

        {education?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              <i className="fas fa-graduation-cap" /> Education
            </SectionTitle>
            {education.map((edu, index) => (
              <Card key={index} color={color}>
                <Role>{edu.degree}</Role>
                <Company color={color}>{edu.school}</Company>
                <Duration>{edu.startYear} - {edu.endYear}</Duration>
                {edu.description && (
                  <Description color={color}>
                    <ul>
                      {edu.description.split('\n').map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Description>
                )}
              </Card>
            ))}
          </Section>
        )}
      </Main>
    </Resume>
  );
};

export default MicrosoftTemplate; 