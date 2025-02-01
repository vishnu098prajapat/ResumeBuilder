import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: ${props => props.font || 'Arial'};
  color: #333;
  background: white;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Name = styled.h1`
  font-size: 32px;
  color: ${props => props.color || '#2c3e50'};
  margin-bottom: 8px;
`;

const ContactInfo = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Section = styled.section`
  margin-bottom: 25px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: ${props => props.color || '#2c3e50'};
  border-bottom: 2px solid ${props => props.color || '#2c3e50'};
  padding-bottom: 5px;
  margin-bottom: 15px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const CompanyName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
`;

const JobDate = styled.span`
  color: #666;
  font-size: 14px;
`;

const JobTitle = styled.div`
  font-weight: 500;
  color: ${props => props.color || '#2c3e50'};
  margin-bottom: 5px;
`;

const JobDescription = styled.ul`
  padding-left: 20px;
  
  li {
    margin-bottom: 3px;
    font-size: 14px;
  }
`;

const EducationItem = styled.div`
  margin-bottom: 15px;
`;

const SchoolName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const Degree = styled.div`
  font-weight: 500;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.span`
  background: ${props => `${props.color}11` || '#2c3e5011'};
  color: ${props => props.color || '#2c3e50'};
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

const Title = styled.div`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  
  i {
    color: ${props => props.color || '#3498db'};
  }
`;

const ClassicTemplate = ({ data = {}, color = '#3498db', font = 'Arial' }) => {
  const { personalInfo = {}, experience = [], education = [], skills = [] } = data;

  return (
    <Resume $font={font}>
      <Header>
        <Name>{personalInfo.fullName || 'Your Name'}</Name>
        <Title>{personalInfo.title || 'Your Title'}</Title>
        <ContactInfo>
          {personalInfo.email && (
            <ContactItem color={color}>
              <i className="fas fa-envelope" /> {personalInfo.email}
            </ContactItem>
          )}
          {personalInfo.phone && (
            <ContactItem color={color}>
              <i className="fas fa-phone" /> {personalInfo.phone}
            </ContactItem>
          )}
          {personalInfo.location && (
            <ContactItem color={color}>
              <i className="fas fa-map-marker-alt" /> {personalInfo.location}
            </ContactItem>
          )}
        </ContactInfo>
      </Header>

      {data.experience?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Professional Experience</SectionTitle>
          {data.experience.map((exp, index) => (
            <ExperienceItem key={index}>
              <JobHeader>
                <CompanyName>{exp.company}</CompanyName>
                <JobDate>{exp.startDate} - {exp.endDate || 'Present'}</JobDate>
              </JobHeader>
              <JobTitle color={color}>{exp.position}</JobTitle>
              <JobDescription>
                {exp.description.split('\n').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </JobDescription>
            </ExperienceItem>
          ))}
        </Section>
      )}

      {data.education?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Education</SectionTitle>
          {data.education.map((edu, index) => (
            <EducationItem key={index}>
              <SchoolName>{edu.school}</SchoolName>
              <Degree>{edu.degree}</Degree>
              <JobDate>{edu.startYear} - {edu.endYear}</JobDate>
              {edu.grade && <div>Grade: {edu.grade}</div>}
            </EducationItem>
          ))}
        </Section>
      )}

      {data.skills?.length > 0 && (
        <Section>
          <SectionTitle color={color}>Skills</SectionTitle>
          <SkillsContainer>
            {data.skills.map((skill, index) => (
              <SkillTag key={index} color={color}>
                {skill}
              </SkillTag>
            ))}
          </SkillsContainer>
        </Section>
      )}
    </Resume>
  );
};

export default ClassicTemplate;