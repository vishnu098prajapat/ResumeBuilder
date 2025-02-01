import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: ${props => props.$font};
  color: #2c3e50;
  background: white;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const Name = styled.h1`
  font-size: 36px;
  margin-bottom: 5px;
  color: #2c3e50;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #7f8c8d;
`;

const ContactInfo = styled.div`
  text-align: right;
  font-size: 14px;
  color: #7f8c8d;
  
  div {
    margin-bottom: 5px;
  }
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.color};
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CompanyName = styled.h4`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const Position = styled.div`
  font-size: 16px;
  color: #34495e;
`;

const Duration = styled.div`
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #34495e;
`;

const EducationItem = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SchoolName = styled.h4`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const Degree = styled.div`
  font-size: 16px;
  color: #34495e;
`;

const Grade = styled.div`
  font-size: 14px;
  color: #7f8c8d;
  margin-top: 5px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.span`
  padding: 5px 12px;
  background: #f8f9fa;
  border-radius: 15px;
  font-size: 14px;
  color: #34495e;
`;

const MinimalTemplate = ({ data = {}, color = '#3498db', font = 'Arial' }) => {
  const { personalInfo = {}, experience = [], education = [], skills = [] } = data;

  return (
    <Resume $font={font}>
      <Header>
        <div>
          <Name>{personalInfo.fullName || 'Your Name'}</Name>
          <Title>{personalInfo.title || 'Your Title'}</Title>
        </div>
        <ContactInfo>
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </ContactInfo>
      </Header>

      <Section>
        <SectionTitle color={color}>Experience</SectionTitle>
        {experience.map((exp, index) => (
          <ExperienceItem key={index}>
            <div>
              <CompanyName>{exp.company}</CompanyName>
              <Position>{exp.position}</Position>
            </div>
            <Duration>{exp.startDate} - {exp.endDate || 'Present'}</Duration>
            <Description>{exp.description}</Description>
          </ExperienceItem>
        ))}
      </Section>

      <Section>
        <SectionTitle color={color}>Education</SectionTitle>
        {education.map((edu, index) => (
          <EducationItem key={index}>
            <SchoolName>{edu.school}</SchoolName>
            <div>
              <Degree>{edu.degree}</Degree>
              <Duration>{edu.startYear} - {edu.endYear}</Duration>
            </div>
            {edu.grade && <Grade>Grade: {edu.grade}</Grade>}
          </EducationItem>
        ))}
      </Section>

      <Section>
        <SectionTitle color={color}>Skills</SectionTitle>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              {typeof skill === 'string' ? skill : skill.name}
            </SkillItem>
          ))}
        </SkillsList>
      </Section>
    </Resume>
  );
};

export default MinimalTemplate; 