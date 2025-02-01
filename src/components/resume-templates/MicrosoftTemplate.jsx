import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  background: white;
  line-height: 1.6;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 35px;
`;

const Name = styled.h1`
  font-size: 32px;
  color: #0078D4;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 18px;
  color: #666;
  margin-bottom: 15px;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  font-size: 14px;
  color: #666;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #0078D4;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #0078D4;
`;

const ExperienceItem = styled.div`
  margin-bottom: 25px;
`;

const RoleHeader = styled.div`
  margin-bottom: 10px;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
`;

const RoleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ImpactList = styled.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    margin-bottom: 10px;
    font-size: 14px;
    
    strong {
      color: #0078D4;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 15px;
`;

const SkillCategory = styled.div`
  background: #F3F2F1;
  padding: 15px;
  border-radius: 4px;
`;

const CategoryName = styled.h4`
  font-size: 16px;
  color: #0078D4;
  margin-bottom: 10px;
`;

const SkillBar = styled.div`
  height: 6px;
  background: #E1DFDD;
  border-radius: 3px;
  margin-bottom: 8px;
  
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.level}%;
    background: #0078D4;
    border-radius: 3px;
  }
`;

const MicrosoftTemplate = ({ data }) => {
  return (
    <Resume>
      <Header>
        <Name>{data.personalInfo.fullName}</Name>
        <Title>{data.personalInfo.title}</Title>
        <ContactInfo>
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </ContactInfo>
      </Header>

      <MainGrid>
        <div>
          <Section>
            <SectionTitle>Professional Experience</SectionTitle>
            {data.experience?.map((exp, index) => (
              <ExperienceItem key={index}>
                <RoleHeader>
                  <CompanyName>{exp.company}</CompanyName>
                  <RoleInfo>
                    <span>{exp.position}</span>
                    <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                  </RoleInfo>
                </RoleHeader>
                <ImpactList>
                  {exp.achievements?.map((achievement, i) => (
                    <li key={i}>
                      <strong>Impact:</strong> {achievement.impact}<br />
                      <strong>Innovation:</strong> {achievement.innovation}<br />
                      <strong>Result:</strong> {achievement.result}
                    </li>
                  ))}
                </ImpactList>
              </ExperienceItem>
            ))}
          </Section>
        </div>

        <div>
          <Section>
            <SectionTitle>Technical Skills</SectionTitle>
            <SkillsGrid>
              {Object.entries(data.technicalSkills || {}).map(([category, skills]) => (
                <SkillCategory key={category}>
                  <CategoryName>{category}</CategoryName>
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} />
                    </div>
                  ))}
                </SkillCategory>
              ))}
            </SkillsGrid>
          </Section>

          <Section>
            <SectionTitle>Education</SectionTitle>
            {data.education?.map((edu, index) => (
              <ExperienceItem key={index}>
                <CompanyName>{edu.school}</CompanyName>
                <RoleInfo>
                  <span>{edu.degree}</span>
                  <span>{edu.startYear} - {edu.endYear}</span>
                </RoleInfo>
              </ExperienceItem>
            ))}
          </Section>
        </div>
      </MainGrid>
    </Resume>
  );
};

export default MicrosoftTemplate; 