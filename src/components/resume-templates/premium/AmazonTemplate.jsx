import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
  width: 100%;
  max-width: 850px;
  min-height: 1100px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: ${props => props.$font || 'Amazon Ember'}, Arial;
  color: #232F3E;
`;

const Header = styled.header`
  background: #232F3E;
  color: white;
  padding: 2rem;
  position: relative;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #FF9900;
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  font-size: 0.9rem;

  a {
    color: #FF9900;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Main = styled.main`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: #232F3E;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #FF9900;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExperienceCard = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(5px);
    border-color: #FF9900;
  }
`;

const LeadershipPrinciples = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed #ddd;

  h4 {
    color: #FF9900;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      background: #232F3E;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      margin: 0.2rem;
    }
  }
`;

const Role = styled.h3`
  font-size: 1.2rem;
  color: #232F3E;
  margin-bottom: 0.3rem;
`;

const Company = styled.div`
  color: #FF9900;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Duration = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  color: #444;
  font-size: 0.95rem;
  line-height: 1.6;

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        color: #FF9900;
        position: absolute;
        left: 0;
        font-size: 1.2rem;
      }
    }
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillTag = styled.span`
  background: #FFF8E7;
  color: #FF9900;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid #FFEBC2;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const SkillCategory = styled.div`
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid #eee;

  h3 {
    color: #232F3E;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
      color: #444;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:before {
        content: "→";
        color: #FF9900;
      }
    }
  }
`;

const AchievementCard = styled.div`
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-bottom: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    border-color: #FF9900;
  }

  h3 {
    color: #232F3E;
    margin-bottom: 0.5rem;
  }

  .issuer {
    color: #FF9900;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .date {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  p {
    color: #444;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

// Amazon's Leadership Principles
const leadershipPrinciples = [
  "Customer Obsession",
  "Ownership",
  "Invent and Simplify",
  "Are Right, A Lot",
  "Learn and Be Curious",
  "Hire and Develop the Best",
  "Insist on the Highest Standards",
  "Think Big",
  "Bias for Action",
  "Frugality",
  "Earn Trust",
  "Dive Deep",
  "Have Backbone; Disagree and Commit",
  "Deliver Results"
];

const AmazonTemplate = ({ data, design }) => {
  const { personalInfo, experience, education, skills, achievements } = data;
  const { color = '#FF9900', font = 'Amazon Ember' } = design;

  return (
    <Resume $font={font}>
      <Header>
        <HeaderContent>
          <Name>{personalInfo?.fullName}</Name>
          <Title>{personalInfo?.title}</Title>
          <ContactInfo>
            {personalInfo?.email && (
              <a href={`mailto:${personalInfo.email}`}>
                <i className="fas fa-envelope" />
                {personalInfo.email}
              </a>
            )}
            {personalInfo?.phone && (
              <a href={`tel:${personalInfo.phone}`}>
                <i className="fas fa-phone" />
                {personalInfo.phone}
              </a>
            )}
            {personalInfo?.location && (
              <div>
                <i className="fas fa-map-marker-alt" />
                {personalInfo.location}
              </div>
            )}
          </ContactInfo>
        </HeaderContent>
      </Header>

      <Main>
        {personalInfo?.summary && (
          <Section>
            <SectionTitle>
              <i className="fas fa-user" /> Professional Summary
            </SectionTitle>
            <Description>
              {personalInfo.summary}
            </Description>
          </Section>
        )}

        {experience?.length > 0 && (
          <Section>
            <SectionTitle>
              <i className="fas fa-briefcase" /> Professional Experience
            </SectionTitle>
            {experience.map((exp, index) => (
              <ExperienceCard key={index}>
                <Role>{exp.position}</Role>
                <Company>{exp.company}</Company>
                <Duration>
                  {exp.startDate} - {exp.endDate || 'Present'}
                </Duration>
                <Description>
                  <ul>
                    {exp.description.split('\n').map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Description>
                <LeadershipPrinciples>
                  <h4>Leadership Principles Demonstrated:</h4>
                  <ul>
                    {exp.principles?.map((principle, i) => (
                      <li key={i}>{principle}</li>
                    ))}
                  </ul>
                </LeadershipPrinciples>
              </ExperienceCard>
            ))}
          </Section>
        )}

        {skills?.length > 0 && (
          <Section>
            <SectionTitle>
              <i className="fas fa-code" /> Skills
            </SectionTitle>
            <SkillsGrid>
              {(skills || []).map((skill, index) => (
                <SkillTag key={index} color="#FF9900">
                  {skill}
                </SkillTag>
              ))}
            </SkillsGrid>
          </Section>
        )}

        {achievements?.length > 0 && (
          <Section>
            <SectionTitle>
              <i className="fas fa-trophy" /> Key Achievements & Certifications
            </SectionTitle>
            {achievements.map((achievement, index) => (
              <AchievementCard key={index}>
                <h3>{achievement.title}</h3>
                <div className="issuer">{achievement.issuer}</div>
                <div className="date">{achievement.date}</div>
                {achievement.description && (
                  <p>{achievement.description}</p>
                )}
                {achievement.principles && (
                  <LeadershipPrinciples>
                    <h4>Related Leadership Principles:</h4>
                    <ul>
                      {achievement.principles.map((principle, i) => (
                        <li key={i}>{principle}</li>
                      ))}
                    </ul>
                  </LeadershipPrinciples>
                )}
              </AchievementCard>
            ))}
          </Section>
        )}

        {education?.length > 0 && (
          <Section>
            <SectionTitle>
              <i className="fas fa-graduation-cap" /> Education
            </SectionTitle>
            {education.map((edu, index) => (
              <ExperienceCard key={index}>
                <Role>{edu.degree}</Role>
                <Company>{edu.school}</Company>
                <Duration>{edu.startYear} - {edu.endYear}</Duration>
                {edu.description && (
                  <Description>
                    <ul>
                      {edu.description.split('\n').map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Description>
                )}
              </ExperienceCard>
            ))}
          </Section>
        )}

        <Section>
          <SectionTitle>
            <i className="fas fa-star" /> Amazon Leadership Principles
          </SectionTitle>
          <Description>
            <p>My experience aligns with Amazon's Leadership Principles:</p>
            <ul>
              {leadershipPrinciples.map((principle, index) => (
                <li key={index}>{principle}</li>
              ))}
            </ul>
          </Description>
        </Section>
      </Main>
    </Resume>
  );
};

export default AmazonTemplate; 