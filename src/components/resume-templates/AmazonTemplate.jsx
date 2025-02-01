import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Amazon Ember', Arial, sans-serif;
  color: #232F3E;
  background: white;
  line-height: 1.6;
`;

const Header = styled.header`
  border-bottom: 3px solid #FF9900;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const Name = styled.h1`
  font-size: 32px;
  color: #232F3E;
  margin-bottom: 10px;
`;

const ContactBar = styled.div`
  display: flex;
  gap: 25px;
  font-size: 14px;
  color: #444;
`;

const Section = styled.section`
  margin-bottom: 25px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #232F3E;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  &:after {
    content: '';
    flex: 1;
    height: 2px;
    background: #FF9900;
    margin-left: 15px;
  }
`;

const LeadershipPrinciple = styled.span`
  color: #FF9900;
  font-weight: 500;
  font-style: italic;
`;

const ExperienceBlock = styled.div`
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    background: #FF9900;
    border-radius: 50%;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  color: #232F3E;
  font-weight: 600;
`;

const DateRange = styled.span`
  color: #666;
  font-size: 14px;
`;

const Position = styled.div`
  color: #FF9900;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Achievement = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
  
  strong {
    color: #232F3E;
  }
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background: #F8F8F8;
  padding: 20px;
  border-radius: 8px;
`;

const SkillCategory = styled.div`
  margin-bottom: 15px;
`;

const CategoryTitle = styled.h4`
  font-size: 16px;
  color: #232F3E;
  margin-bottom: 10px;
  border-bottom: 2px solid #FF9900;
  padding-bottom: 5px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
    
    &:before {
      content: '•';
      color: #FF9900;
      margin-right: 8px;
    }
  }
`;

const AmazonTemplate = ({ data }) => {
  return (
    <Resume>
      <Header>
        <Name>{data.personalInfo.fullName}</Name>
        <ContactBar>
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
        </ContactBar>
      </Header>

      <Section>
        <SectionTitle>Professional Experience</SectionTitle>
        {data.experience?.map((exp, index) => (
          <ExperienceBlock key={index}>
            <CompanyHeader>
              <CompanyName>{exp.company}</CompanyName>
              <DateRange>{exp.startDate} - {exp.endDate || 'Present'}</DateRange>
            </CompanyHeader>
            <Position>{exp.position}</Position>
            
            {exp.achievements?.map((achievement, i) => (
              <Achievement key={i}>
                <LeadershipPrinciple>{achievement.principle}</LeadershipPrinciple>:{' '}
                <strong>Demonstrated {achievement.principle}</strong> by {achievement.action}. 
                Resulted in {achievement.impact}.
              </Achievement>
            ))}
          </ExperienceBlock>
        ))}
      </Section>

      <Section>
        <SectionTitle>Technical Expertise</SectionTitle>
        <SkillsSection>
          {Object.entries(data.technicalSkills || {}).map(([category, skills]) => (
            <SkillCategory key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsList>
                {skills.map((skill, i) => (
                  <li key={i}>{skill.name}</li>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsSection>
      </Section>

      <Section>
        <SectionTitle>Projects & Leadership</SectionTitle>
        {data.projects?.map((project, index) => (
          <ExperienceBlock key={index}>
            <CompanyName>{project.name}</CompanyName>
            <Achievement>
              <strong>Challenge:</strong> {project.challenge}
            </Achievement>
            <Achievement>
              <strong>Action:</strong> {project.action}
            </Achievement>
            <Achievement>
              <strong>Result:</strong> {project.result}
            </Achievement>
          </ExperienceBlock>
        ))}
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        {data.education?.map((edu, index) => (
          <ExperienceBlock key={index}>
            <CompanyName>{edu.school}</CompanyName>
            <Position>{edu.degree}</Position>
            <DateRange>{edu.startYear} - {edu.endYear}</DateRange>
            {edu.achievements && (
              <SkillsList>
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </SkillsList>
            )}
          </ExperienceBlock>
        ))}
      </Section>
    </Resume>
  );
};

export default AmazonTemplate; 