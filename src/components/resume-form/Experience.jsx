import React from 'react';
import styled from 'styled-components';

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #c0392b;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const DateGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Experience = ({ data = [], updateData }) => {
  const handleChange = (index, field, value) => {
    const updatedExperience = [...data];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    updateData(updatedExperience);
  };

  const handleDelete = (index) => {
    const updatedExperience = data.filter((_, i) => i !== index);
    updateData(updatedExperience);
  };

  const handleAdd = () => {
    updateData([
      ...data,
      {
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]);
  };

  return (
    <ExperienceList>
      {data.map((experience, index) => (
        <ExperienceItem key={index}>
          <DeleteButton onClick={() => handleDelete(index)}>
            <i className="fas fa-trash" />
          </DeleteButton>

          <Form>
            <FormGroup>
              <Label>Position</Label>
              <Input
                type="text"
                value={experience.position}
                onChange={(e) => handleChange(index, 'position', e.target.value)}
                placeholder="e.g. Senior Software Engineer"
              />
            </FormGroup>

            <FormGroup>
              <Label>Company</Label>
              <Input
                type="text"
                value={experience.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                placeholder="e.g. Tech Corp"
              />
            </FormGroup>

            <DateGroup>
              <FormGroup>
                <Label>Start Date</Label>
                <Input
                  type="text"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                  placeholder="e.g. 2020"
                />
              </FormGroup>

              <FormGroup>
                <Label>End Date</Label>
                <Input
                  type="text"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                  placeholder="e.g. Present"
                />
              </FormGroup>
            </DateGroup>

            <FormGroup>
              <Label>Description</Label>
              <TextArea
                value={experience.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities and achievements..."
              />
            </FormGroup>
          </Form>
        </ExperienceItem>
      ))}

      <button onClick={handleAdd}>
        <i className="fas fa-plus" /> Add Experience
      </button>
    </ExperienceList>
  );
};

export default Experience; 