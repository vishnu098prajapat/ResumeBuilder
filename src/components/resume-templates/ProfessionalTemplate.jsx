import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 1000px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 2rem;
  font-family: ${props => props.$font || 'Arial'};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${props => props.color || '#2c3e50'};
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.color || '#2c3e50'};
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
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

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.color || '#2c3e50'};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${props => props.color || '#2c3e50'};
`;

const Summary = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Position = styled.h3`
  font-size: 1.1rem;
  color: ${props => props.color || '#2c3e50'};
`;

const Company = styled.div`
  font-weight: 500;
  color: #666;
`;

const Date = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const SkillCategory = styled.div`
  h3 {
    color: ${props => props.color || '#2c3e50'};
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    padding-left: 1rem;
    position: relative;

    &:before {
      content: "•";
      color: ${props => props.color || '#2c3e50'};
      position: absolute;
      left: 0;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ItemSubtitle = styled.div`
  color: ${props => props.color};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ItemDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const AchievementItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ItemHeader = styled.div`
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

const ProfessionalTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#2c3e50', font = 'Arial' } = design;

  // Group skills into categories (you can customize these)
  const skillCategories = {
    technical: skills?.filter((_, i) => i % 3 === 0),
    soft: skills?.filter((_, i) => i % 3 === 1),
    other: skills?.filter((_, i) => i % 3 === 2)
  };

  return (
    <Resume $font={font}>
      <Header color={color}>
        <Name color={color}>{personalInfo?.fullName}</Name>
        <Title>{personalInfo?.title}</Title>
        <ContactInfo color={color}>
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

      {personalInfo?.summary && (
        <Section>
          <SectionTitle color={color}>Professional Summary</SectionTitle>
          <Summary>{personalInfo.summary}</Summary>
        </Section>
      )}

      {experience?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Professional Experience</SectionTitle>
          {experience.map((exp, index) => (
            <ExperienceItem key={index}>
              <ExperienceHeader>
                <div>
                  <Position color={color}>{exp.position}</Position>
                  <Company>{exp.company}</Company>
                </div>
                <Date>
                  {exp.startDate} - {exp.endDate || 'Present'}
                </Date>
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
                  <Position color={color}>{edu.degree}</Position>
                  <Company>{edu.school}</Company>
                </div>
                <Date>{edu.year}</Date>
              </ExperienceHeader>
              {edu.description && (
                <Description>{edu.description}</Description>
              )}
            </ExperienceItem>
          ))}
        </Section>
      )}

      {skills?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Skills</SectionTitle>
          <SkillsGrid>
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              categorySkills?.length > 0 && (
                <SkillCategory key={category} color={color}>
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)} Skills</h3>
                  <ul>
                    {categorySkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </SkillCategory>
              )
            ))}
          </SkillsGrid>
        </Section>
      )}

      {achievements?.length > 0 && (
        <Section>
          <SectionTitle color={color}>
            <i className="fas fa-trophy" style={{ marginRight: '10px' }} />
            Achievements & Certificates
          </SectionTitle>
          <ContentGrid>
            {achievements.map((achievement, index) => (
              <AchievementItem key={index}>
                <ItemHeader>
                  <h3>{achievement.title}</h3>
                  <span>{achievement.date}</span>
                </ItemHeader>
                <ItemSubtitle color={color}>{achievement.issuer}</ItemSubtitle>
                {achievement.description && (
                  <ItemDescription>{achievement.description}</ItemDescription>
                )}
              </AchievementItem>
            ))}
          </ContentGrid>
        </Section>
      )}
    </Resume>
  );
};

export default ProfessionalTemplate; 