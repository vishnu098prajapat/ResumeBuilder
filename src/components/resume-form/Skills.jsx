import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillInput = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  button {
    padding: 0.8rem 1rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.div`
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    color: red;
    cursor: pointer;
  }
`;

const Skills = ({ data, updateData }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      const updatedSkills = [...(data || []), newSkill.trim()];
      updateData(updatedSkills);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = (data || []).filter(skill => skill !== skillToRemove);
    updateData(updatedSkills);
  };

  return (
    <Container>
      <form onSubmit={handleAddSkill}>
        <SkillInput>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill (e.g. JavaScript)"
          />
          <button type="submit">Add</button>
        </SkillInput>
      </form>

      <SkillsList>
        {(data || []).map((skill, index) => (
          <SkillTag key={index}>
            {skill}
            <button type="button" onClick={() => handleRemoveSkill(skill)}>×</button>
          </SkillTag>
        ))}
      </SkillsList>
    </Container>
  );
};

export default Skills; 