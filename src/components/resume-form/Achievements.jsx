import React from 'react';
import styled from 'styled-components';

const AchievementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AchievementItem = styled.div`
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.error};
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    opacity: 0.8;
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
  color: ${props => props.theme.text.secondary};
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: ${props => props.theme.primary}dd;
  }
`;

const Achievements = ({ data = [], updateData }) => {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value
    };
    updateData(newData);
  };

  const handleAdd = () => {
    updateData([
      ...data,
      {
        title: '',
        description: '',
        date: '',
        issuer: ''
      }
    ]);
  };

  const handleRemove = (index) => {
    updateData(data.filter((_, i) => i !== index));
  };

  return (
    <AchievementList>
      {data.map((achievement, index) => (
        <AchievementItem key={index}>
          <DeleteButton onClick={() => handleRemove(index)}>
            <i className="fas fa-times" />
          </DeleteButton>

          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                value={achievement.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                placeholder="e.g. AWS Certified Solutions Architect"
              />
            </FormGroup>

            <FormGroup>
              <Label>Issuer</Label>
              <Input
                type="text"
                value={achievement.issuer}
                onChange={(e) => handleChange(index, 'issuer', e.target.value)}
                placeholder="e.g. Amazon Web Services"
              />
            </FormGroup>

            <FormGroup>
              <Label>Date</Label>
              <Input
                type="text"
                value={achievement.date}
                onChange={(e) => handleChange(index, 'date', e.target.value)}
                placeholder="e.g. March 2023"
              />
            </FormGroup>

            <FormGroup>
              <Label>Description (Optional)</Label>
              <TextArea
                value={achievement.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                placeholder="Add any additional details about this achievement..."
              />
            </FormGroup>
          </Form>
        </AchievementItem>
      ))}

      <AddButton onClick={handleAdd}>
        <i className="fas fa-plus" /> Add Achievement
      </AddButton>
    </AchievementList>
  );
};

export default Achievements; 