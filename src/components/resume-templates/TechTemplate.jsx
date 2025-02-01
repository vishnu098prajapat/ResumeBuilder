import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: ${props => props.font || 'Roboto'};
  color: #2c3e50;
  background: white;
  line-height: 1.6;
`;

const Header = styled.header`
  border-bottom: 4px solid ${props => props.color || '#3498db'};
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const Name = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${props => props.color || '#3498db'};
`;

const Title = styled.div`
  font-size: 18px;
  color: #7f8c8d;
  margin-bottom: 15px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  font-size: 14px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${props => props.color || '#3498db'};
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

const MainColumn = styled.div``;

const SideColumn = styled.div``;

const Section = styled.section`
  margin-bottom: 25px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  color: ${props => props.color || '#3498db'};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:after {
    content: '';
    flex: 1;
    height: 2px;
    background: ${props => `${props.color}40` || '#3498db40'};
  }
`;

const TechSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const SkillCategory = styled.div`
  margin-bottom: 15px;
`;

const CategoryTitle = styled.h3`
  font-size: 16px;
  color: #34495e;
  margin-bottom: 8px;
  font-weight: 600;
`;

const SkillBar = styled.div`
  height: 8px;
  background: ${props => `${props.color}20` || '#3498db20'};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 5px;
  
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.level}%;
    background: ${props => props.color || '#3498db'};
    border-radius: 4px;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: -20px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.color || '#3498db'};
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
`;

const DateRange = styled.span`
  color: #7f8c8d;
  font-size: 14px;
`;

const Position = styled.div`
  color: ${props => props.color || '#3498db'};
  font-weight: 500;
  margin-bottom: 8px;
`;

const TechStack = styled.div`
  margin: 10px 0;
`;

const TechTag = styled.span`
  display: inline-block;
  padding: 3px 8px;
  background: ${props => `${props.color}15` || '#3498db15'};
  color: ${props => props.color || '#3498db'};
  border-radius: 4px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 5px;
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding-left: 0;
  
  li {
    margin-bottom: 8px;
    font-size: 14px;
    
    &:before {
      content: '•';
      color: ${props => props.color || '#3498db'};
      margin-right: 8px;
    }
  }
`;

const TechTemplate = ({ data, customizations = {} }) => {
  const { color = '#3498db', font = 'Roboto' } = customizations;
  
  return (
    <Resume font={font}>
      <Header color={color}>
        <Name color={color}>{data.personalInfo.fullName}</Name>
        <Title>{data.personalInfo.title}</Title>
        <ContactGrid>
          <ContactItem color={color}>
            <span>{data.personalInfo.email}</span>
          </ContactItem>
          <ContactItem color={color}>
            <span>{data.personalInfo.phone}</span>
          </ContactItem>
          <ContactItem color={color}>
            <span>{data.personalInfo.location}</span>
          </ContactItem>
        </ContactGrid>
      </Header>

      <MainGrid>
        <MainColumn>
          <Section>
            <SectionTitle color={color}>Technical Experience</SectionTitle>
            {data.experience?.map((exp, index) => (
              <ExperienceItem key={index} color={color}>
                <CompanyHeader>
                  <CompanyName>{exp.company}</CompanyName>
                  <DateRange>{exp.startDate} - {exp.endDate || 'Present'}</DateRange>
                </CompanyHeader>
                <Position color={color}>{exp.position}</Position>
                {exp.techStack && (
                  <TechStack>
                    {exp.techStack.map((tech, i) => (
                      <TechTag key={i} color={color}>{tech}</TechTag>
                    ))}
                  </TechStack>
                )}
                <ProjectsList color={color}>
                  {exp.description.split('\n').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ProjectsList>
              </ExperienceItem>
            ))}
          </Section>
        </MainColumn>

        <SideColumn>
          <Section>
            <SectionTitle color={color}>Technical Skills</SectionTitle>
            <TechSkillsGrid>
              {Object.entries(data.technicalSkills || {}).map(([category, skills]) => (
                <SkillCategory key={category}>
                  <CategoryTitle>{category}</CategoryTitle>
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <SkillBar color={color} level={skill.level} />
                    </div>
                  ))}
                </SkillCategory>
              ))}
            </TechSkillsGrid>
          </Section>

          <Section>
            <SectionTitle color={color}>Education</SectionTitle>
            {data.education?.map((edu, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <CompanyName>{edu.school}</CompanyName>
                <Position color={color}>{edu.degree}</Position>
                <DateRange>{edu.startYear} - {edu.endYear}</DateRange>
                {edu.grade && <div>GPA: {edu.grade}</div>}
              </div>
            ))}
          </Section>
        </SideColumn>
      </MainGrid>
    </Resume>
  );
};

export default TechTemplate; 