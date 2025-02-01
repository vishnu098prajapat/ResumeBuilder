import React from 'react';
import styled from 'styled-components';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Achievements from './Achievements';

const Form = styled.div`
  padding: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const ResumeForm = ({ data, updateData }) => {
  // Handler for updating any section of the data
  const handleUpdate = (section, newData) => {
    updateData({
      ...data,
      [section]: newData
    });
  };

  return (
    <Form>
      <Section>
        <h2>Personal Information</h2>
        <PersonalInfo 
          data={data.personalInfo} 
          onChange={(newData) => handleUpdate('personalInfo', newData)} 
        />
      </Section>

      <Section>
        <h2>Experience</h2>
        <Experience 
          data={data.experience} 
          onChange={(newData) => handleUpdate('experience', newData)} 
        />
      </Section>

      <Section>
        <h2>Education</h2>
        <Education 
          data={data.education} 
          onChange={(newData) => handleUpdate('education', newData)} 
        />
      </Section>

      <Section>
        <h2>Skills</h2>
        <Skills 
          data={data.skills} 
          updateData={(newSkills) => handleUpdate('skills', newSkills)} 
        />
      </Section>

      <Section>
        <h2>Achievements</h2>
        <Achievements 
          data={data.achievements} 
          onChange={(newData) => handleUpdate('achievements', newData)} 
        />
      </Section>
    </Form>
  );
};

export default ResumeForm; 