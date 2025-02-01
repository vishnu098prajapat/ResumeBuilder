import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-family: ${props => props.$font};
  color: #2d3748;
  background: #fff;
`;

const Header = styled.header`
  position: relative;
  background: linear-gradient(135deg, ${props => props.color} 0%, ${props => props.color}dd 100%);
  color: white;
  padding: 3rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${props => props.backgroundImage}) center/cover;
    opacity: 0.1;
    mix-blend-mode: overlay;
  }
`;

const ProfileSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div``;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-top: 0.5rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 0 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.color};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${props => props.color};
    border-radius: 2px;
  }
`;

const ExperienceCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ProjectImage = styled.div`
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${props => props.color};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${props => props.color};
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SkillName = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: #edf2f7;
  border-radius: 3px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress}%;
    background: ${props => props.color};
    border-radius: 3px;
    transition: width 0.3s ease;
  }
`;

const ModernPortfolioTemplate = ({ data = {}, color = '#3498db', font = 'Arial' }) => {
  const { 
    personalInfo = {}, 
    experience = [], 
    education = [], 
    skills = [],
    projects = [] 
  } = data;

  return (
    <Resume $font={font}>
      <Header color={color} backgroundImage={personalInfo.backgroundImage}>
        <ProfileSection>
          {personalInfo.photo && (
            <ProfileImage>
              <img src={personalInfo.photo} alt={personalInfo.fullName} />
            </ProfileImage>
          )}
          <ProfileInfo>
            <Name>{personalInfo.fullName || 'Your Name'}</Name>
            <Title>{personalInfo.title || 'Your Title'}</Title>
            <ContactGrid>
              <ContactItem href={`mailto:${personalInfo.email}`}>
                <i className="fas fa-envelope" /> {personalInfo.email}
              </ContactItem>
              {personalInfo.phone && (
                <ContactItem href={`tel:${personalInfo.phone}`}>
                  <i className="fas fa-phone" /> {personalInfo.phone}
                </ContactItem>
              )}
              {personalInfo.location && (
                <ContactItem>
                  <i className="fas fa-map-marker-alt" /> {personalInfo.location}
                </ContactItem>
              )}
              {personalInfo.website && (
                <ContactItem href={personalInfo.website} target="_blank">
                  <i className="fas fa-globe" /> Portfolio
                </ContactItem>
              )}
            </ContactGrid>
          </ProfileInfo>
        </ProfileSection>
      </Header>

      <MainContent>
        <div>
          <Section>
            <SectionTitle color={color}>About Me</SectionTitle>
            <p>{personalInfo.summary}</p>
          </Section>

          <Section>
            <SectionTitle color={color}>Featured Projects</SectionTitle>
            <ProjectGrid>
              {projects?.map((project, index) => (
                <ProjectCard key={index}>
                  {project.image && (
                    <ProjectImage>
                      <img src={project.image} alt={project.name} />
                    </ProjectImage>
                  )}
                  <ProjectInfo>
                    <ProjectTitle color={color}>{project.name}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLinks>
                      {project.demo && (
                        <ProjectLink href={project.demo} target="_blank" color={color}>
                          <i className="fas fa-external-link-alt" /> Live Demo
                        </ProjectLink>
                      )}
                      {project.github && (
                        <ProjectLink href={project.github} target="_blank" color={color}>
                          <i className="fab fa-github" /> GitHub
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectInfo>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </Section>

          <Section>
            <SectionTitle color={color}>Experience</SectionTitle>
            {experience?.map((exp, index) => (
              <ExperienceCard key={index}>
                <h3>{exp.position} @ {exp.company}</h3>
                <div style={{ color: '#718096', marginBottom: '1rem' }}>
                  {exp.startDate} - {exp.endDate || 'Present'}
                </div>
                <p>{exp.description}</p>
                {exp.achievements && (
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {typeof exp.achievements === 'string' 
                      ? exp.achievements.split('\n').map((achievement, i) => (
                          <li key={i}>{achievement.trim()}</li>
                        ))
                      : exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))
                    }
                  </ul>
                )}
              </ExperienceCard>
            ))}
          </Section>
        </div>

        <aside>
          <Section>
            <SectionTitle color={color}>Skills</SectionTitle>
            <SkillsGrid>
              {skills?.map((skill, index) => (
                <SkillCard key={index}>
                  <SkillName>
                    {typeof skill === 'string' ? skill : skill.name}
                  </SkillName>
                  {typeof skill !== 'string' && skill.level && (
                    <ProgressBar progress={skill.level} color={color} />
                  )}
                </SkillCard>
              ))}
            </SkillsGrid>
          </Section>

          <Section>
            <SectionTitle color={color}>Education</SectionTitle>
            {education?.map((edu, index) => (
              <ExperienceCard key={index}>
                <h3>{edu.degree}</h3>
                <h4 style={{ color: color }}>{edu.school}</h4>
                <div style={{ color: '#718096' }}>
                  {edu.startYear} - {edu.endYear}
                </div>
                {edu.grade && (
                  <div style={{ marginTop: '0.5rem' }}>
                    Grade: {edu.grade}
                  </div>
                )}
              </ExperienceCard>
            ))}
          </Section>
        </aside>
      </MainContent>
    </Resume>
  );
};

export default ModernPortfolioTemplate; 