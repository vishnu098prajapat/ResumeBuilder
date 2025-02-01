import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 850px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  font-family: 'Inter', sans-serif;
  color: #111827;
  box-shadow: 0 0 30px rgba(0,0,0,0.1);
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  margin-bottom: 40px;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeaderContent = styled.div``;

const Name = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #111827;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  color: #6366F1;
  margin-bottom: 15px;
  font-weight: 500;
`;

const Bio = styled.p`
  color: #4B5563;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 15px;
  max-width: 600px;
`;

const Links = styled.div`
  display: flex;
  gap: 15px;
`;

const Link = styled.a`
  color: #4B5563;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    color: #6366F1;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`;

const Section = styled.section`
  margin-bottom: 35px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #6366F1;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ExperienceCard = styled.div`
  margin-bottom: 25px;
  position: relative;
`;

const CompanyLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #F3F4F6;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #6366F1;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`;

const Position = styled.div`
  color: #6366F1;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Duration = styled.div`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 12px;
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
    font-size: 14px;
    color: #4B5563;
    line-height: 1.6;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: #6366F1;
    }
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 15px;
`;

const Metric = styled.div`
  background: #F3F4F6;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #6366F1;
  margin-bottom: 4px;
`;

const MetricLabel = styled.div`
  font-size: 12px;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const SkillTag = styled.div`
  background: ${props => props.highlighted ? '#EEF2FF' : '#F3F4F6'};
  color: ${props => props.highlighted ? '#6366F1' : '#4B5563'};
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  font-size: 14px;
  color: #4B5563;
  line-height: 1.6;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #6366F1;
  }
`;

const Description = styled.p`
  color: #4B5563;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 15px;
  max-width: 600px;
`;

const StartupTemplate = ({ data = {}, color = '#3498db', font = 'Arial' }) => {
  const { 
    personalInfo = {}, 
    experience = [], 
    education = [], 
    skills = [],
    projects = [] 
  } = data;

  return (
    <Resume $font={font}>
      <Header>
        {personalInfo.photo && (
          <ProfileImage>
            <img src={personalInfo.photo} alt="Profile" />
          </ProfileImage>
        )}
        <HeaderContent>
          <Name>{personalInfo.fullName || 'Your Name'}</Name>
          <Title>{personalInfo.title || 'Your Title'}</Title>
          <Bio>{personalInfo.summary}</Bio>
          <Links>
            <Link href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </Link>
            {personalInfo.linkedin && (
              <Link href={personalInfo.linkedin} target="_blank">
                LinkedIn
              </Link>
            )}
            {personalInfo.github && (
              <Link href={personalInfo.github} target="_blank">
                GitHub
              </Link>
            )}
          </Links>
        </HeaderContent>
      </Header>

      <MainContent>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          {experience?.map((exp, index) => (
            <ExperienceCard key={index}>
              <CompanyLogo>
                {exp.company.charAt(0)}
              </CompanyLogo>
              <div>
                <CompanyName>{exp.company}</CompanyName>
                <Position>{exp.position}</Position>
                <Duration>{exp.startDate} - {exp.endDate || 'Present'}</Duration>
                <Description>{exp.description}</Description>
                
                {/* Handle both string and array technologies */}
                {exp.technologies && (
                  <TechList>
                    {typeof exp.technologies === 'string' 
                      ? exp.technologies.split(',').map((tech, i) => (
                          <TechItem key={i}>{tech.trim()}</TechItem>
                        ))
                      : exp.technologies.map((tech, i) => (
                          <TechItem key={i}>{tech}</TechItem>
                        ))
                    }
                  </TechList>
                )}

                {/* Handle achievements */}
                {exp.achievements && (
                  <Achievements>
                    {typeof exp.achievements === 'string'
                      ? exp.achievements.split('\n').map((achievement, i) => (
                          <li key={i}>{achievement.trim()}</li>
                        ))
                      : exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))
                    }
                  </Achievements>
                )}
              </div>
            </ExperienceCard>
          ))}
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {skills?.map((skill, index) => (
              <SkillTag key={index} highlighted={index < 5}>
                {typeof skill === 'string' ? skill : skill.name}
              </SkillTag>
            ))}
          </SkillsGrid>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          {education?.map((edu, index) => (
            <ExperienceCard key={index}>
              <div>
                <CompanyName>{edu.school}</CompanyName>
                <Position>{edu.degree}</Position>
                <Duration>{edu.startYear} - {edu.endYear}</Duration>
                {edu.grade && <Description>Grade: {edu.grade}</Description>}
              </div>
            </ExperienceCard>
          ))}
        </Section>
      </MainContent>
    </Resume>
  );
};

export default StartupTemplate; 