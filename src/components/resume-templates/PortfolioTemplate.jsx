import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #0F172A;
  color: #E2E8F0;
  padding: 50px;
  font-family: 'Space Grotesk', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 50px;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 50px;
  height: fit-content;
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid #3B82F6;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #3B82F6, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.div`
  font-size: 16px;
  color: #94A3B8;
  margin-bottom: 20px;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
`;

const ContactItem = styled.a`
  color: #E2E8F0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateX(5px);
  }
`;

const SkillsSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #3B82F6;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: #3B82F6;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.span`
  padding: 6px 12px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 20px;
  font-size: 13px;
  color: #3B82F6;
`;

const MainContent = styled.div``;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

const ProjectCard = styled.div`
  background: rgba(59, 130, 246, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #3B82F6;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #94A3B8;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: #3B82F6;
  text-decoration: none;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ExperienceSection = styled.div`
  margin-bottom: 40px;
`;

const ExperienceCard = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 15px;
`;

const CompanyName = styled.h3`
  font-size: 20px;
  color: #3B82F6;
  margin-bottom: 5px;
`;

const Role = styled.div`
  font-size: 16px;
  color: #E2E8F0;
  margin-bottom: 5px;
`;

const Duration = styled.div`
  font-size: 14px;
  color: #94A3B8;
  margin-bottom: 15px;
`;

const PortfolioTemplate = ({ data = {}, color = '#3498db', font = 'Arial' }) => {
  const { 
    personalInfo = {}, 
    experience = [], 
    education = [], 
    skills = [],
    projects = [] 
  } = data;

  return (
    <Resume $font={font}>
      <Grid>
        <Sidebar>
          <ProfileSection>
            {personalInfo.photo && (
              <ProfileImage>
                <img src={personalInfo.photo} alt={personalInfo.fullName} />
              </ProfileImage>
            )}
            <Name>{personalInfo.fullName || 'Your Name'}</Name>
            <Title>{personalInfo.title || 'Your Title'}</Title>
          </ProfileSection>

          <ContactList>
            <ContactItem href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </ContactItem>
            <ContactItem href={personalInfo.linkedin} target="_blank">
              LinkedIn
            </ContactItem>
            <ContactItem href={personalInfo.github} target="_blank">
              GitHub
            </ContactItem>
            {personalInfo.portfolio && (
              <ContactItem href={personalInfo.portfolio} target="_blank">
                Portfolio
              </ContactItem>
            )}
          </ContactList>

          <SkillsSection>
            <SectionTitle>Skills</SectionTitle>
            <SkillsList>
              {skills?.map((skill, index) => (
                <SkillTag key={index}>{skill.name}</SkillTag>
              ))}
            </SkillsList>
          </SkillsSection>
        </Sidebar>

        <MainContent>
          <ProjectGrid>
            {projects?.map((project, index) => (
              <ProjectCard key={index}>
                {project.image && (
                  <ProjectImage>
                    <img src={project.image} alt={project.name} />
                  </ProjectImage>
                )}
                <ProjectInfo>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLinks>
                    {project.demo && (
                      <ProjectLink href={project.demo} target="_blank">
                        Live Demo
                      </ProjectLink>
                    )}
                    {project.github && (
                      <ProjectLink href={project.github} target="_blank">
                        GitHub
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectGrid>

          <ExperienceSection>
            <SectionTitle>Experience</SectionTitle>
            {experience?.map((exp, index) => (
              <ExperienceCard key={index}>
                <CompanyName>{exp.company}</CompanyName>
                <Role>{exp.position}</Role>
                <Duration>{exp.startDate} - {exp.endDate || 'Present'}</Duration>
                <ProjectDescription>{exp.description}</ProjectDescription>
                {exp.technologies && typeof exp.technologies === 'string' ? (
                  <SkillsList>
                    {exp.technologies.split(',').map((tech, i) => (
                      <SkillTag key={i}>{tech.trim()}</SkillTag>
                    ))}
                  </SkillsList>
                ) : exp.technologies && Array.isArray(exp.technologies) && (
                  <SkillsList>
                    {exp.technologies.map((tech, i) => (
                      <SkillTag key={i}>{tech}</SkillTag>
                    ))}
                  </SkillsList>
                )}
              </ExperienceCard>
            ))}
          </ExperienceSection>
        </MainContent>
      </Grid>
    </Resume>
  );
};

export default PortfolioTemplate; 