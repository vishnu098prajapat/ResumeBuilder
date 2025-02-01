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
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${props => props.color};
`;

const Name = styled.h1`
  font-size: 32px;
  margin-bottom: 5px;
  color: ${props => props.color};
`;

const Title = styled.h2`
  font-size: 18px;
  color: #7f8c8d;
  margin-bottom: 15px;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7f8c8d;
  font-size: 14px;
  
  i {
    color: ${props => props.color};
  }
`;

const Summary = styled.div`
  margin-bottom: 30px;
  text-align: justify;
  
  p {
    line-height: 1.6;
    color: #34495e;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Section = styled.section`
  margin-bottom: 25px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.color};
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${props => props.color};
`;

const ExperienceCard = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 5px;
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const CompanyName = styled.h4`
  font-size: 18px;
  color: #2c3e50;
  margin: 0;
`;

const Position = styled.div`
  font-size: 16px;
  color: #34495e;
  margin-bottom: 5px;
`;

const Duration = styled.div`
  font-size: 14px;
  color: #7f8c8d;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #34495e;
  margin: 10px 0;
`;

const Achievements = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
  
  li {
    font-size: 14px;
    color: #34495e;
    margin-bottom: 5px;
  }
`;

const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const EducationCard = styled.div`
  margin-bottom: 15px;
`;

const SchoolName = styled.h4`
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const Degree = styled.div`
  font-size: 14px;
  color: #34495e;
`;

const Grade = styled.div`
  font-size: 14px;
  color: #7f8c8d;
  margin-top: 5px;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.span`
  padding: 5px 10px;
  background: ${props => `${props.color}15`};
  color: ${props => props.color};
  border-radius: 15px;
  font-size: 13px;
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AchievementItem = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const AchievementHeader = styled.div`
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

const AchievementTitle = styled.h3`
  font-size: 1.1rem;
  color: ${props => props.theme.text.primary};
  margin: 0;
`;

const AchievementDate = styled.span`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const AchievementIssuer = styled.div`
  color: ${props => props.color};
  font-size: 0.9rem;
`;

const AchievementDescription = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const BusinessTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#2c3e50', font = 'Arial' } = design;

  return (
    <Resume $font={font}>
      <Header color={color}>
        <Name>{personalInfo.fullName || 'Your Name'}</Name>
        <Title>{personalInfo.title || 'Your Title'}</Title>
        <ContactInfo>
          {personalInfo.email && <ContactItem><i className="fas fa-envelope" /> {personalInfo.email}</ContactItem>}
          {personalInfo.phone && <ContactItem><i className="fas fa-phone" /> {personalInfo.phone}</ContactItem>}
          {personalInfo.location && <ContactItem><i className="fas fa-map-marker-alt" /> {personalInfo.location}</ContactItem>}
        </ContactInfo>
      </Header>

      <Summary>
        <SectionTitle color={color}>Professional Summary</SectionTitle>
        <p>{personalInfo.summary}</p>
      </Summary>

      <MainContent>
        <Section>
          <SectionTitle color={color}>Experience</SectionTitle>
          {experience.map((exp, index) => (
            <ExperienceCard key={index}>
              <CompanyHeader>
                <CompanyName>{exp.company}</CompanyName>
                <Duration>{exp.startDate} - {exp.endDate || 'Present'}</Duration>
              </CompanyHeader>
              <Position>{exp.position}</Position>
              <Description>{exp.description}</Description>
              {exp.achievements && (
                <Achievements>
                  {exp.achievements.split('\n').map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </Achievements>
              )}
            </ExperienceCard>
          ))}
        </Section>

        <TwoColumnSection>
          <div>
            <SectionTitle color={color}>Education</SectionTitle>
            {education.map((edu, index) => (
              <EducationCard key={index}>
                <SchoolName>{edu.school}</SchoolName>
                <Degree>{edu.degree}</Degree>
                <Duration>{edu.startYear} - {edu.endYear}</Duration>
                {edu.grade && <Grade>Grade: {edu.grade}</Grade>}
              </EducationCard>
            ))}
          </div>

          <div>
            <SectionTitle color={color}>Skills</SectionTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillTag key={index} color={color}>
                  {typeof skill === 'string' ? skill : skill.name}
                </SkillTag>
              ))}
            </SkillsGrid>
          </div>
        </TwoColumnSection>

        {achievements?.length > 0 && (
          <Section>
            <SectionTitle color={color}>
              Achievements & Certificates
            </SectionTitle>
            <AchievementsList>
              {achievements.map((achievement, index) => (
                <AchievementItem key={index}>
                  <AchievementHeader>
                    <AchievementTitle>{achievement.title}</AchievementTitle>
                    <AchievementDate>{achievement.date}</AchievementDate>
                  </AchievementHeader>
                  <AchievementIssuer color={color}>{achievement.issuer}</AchievementIssuer>
                  {achievement.description && (
                    <AchievementDescription>
                      {achievement.description}
                    </AchievementDescription>
                  )}
                </AchievementItem>
              ))}
            </AchievementsList>
          </Section>
        )}
      </MainContent>
    </Resume>
  );
};

export default BusinessTemplate; 