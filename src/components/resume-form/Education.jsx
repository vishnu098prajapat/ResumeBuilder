import React from 'react';
import styled from 'styled-components';

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationItem = styled.div`
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

const Education = ({ data = [], updateData }) => {
  const handleChange = (index, field, value) => {
    const updatedEducation = [...data];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    updateData(updatedEducation);
  };

  const handleDelete = (index) => {
    const updatedEducation = data.filter((_, i) => i !== index);
    updateData(updatedEducation);
  };

  const handleAdd = () => {
    updateData([
      ...data,
      {
        degree: '',
        school: '',
        year: '',
        description: ''
      }
    ]);
  };

  return (
    <EducationList>
      {data.map((education, index) => (
        <EducationItem key={index}>
          <DeleteButton onClick={() => handleDelete(index)}>
            <i className="fas fa-trash" />
          </DeleteButton>

          <Form>
            <FormGroup>
              <Label>Degree</Label>
              <Input
                type="text"
                value={education.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                placeholder="e.g. Bachelor of Science in Computer Science"
              />
            </FormGroup>

            <FormGroup>
              <Label>School</Label>
              <Input
                type="text"
                value={education.school}
                onChange={(e) => handleChange(index, 'school', e.target.value)}
                placeholder="e.g. University Name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Year</Label>
              <Input
                type="text"
                value={education.year}
                onChange={(e) => handleChange(index, 'year', e.target.value)}
                placeholder="e.g. 2020"
              />
            </FormGroup>

            <FormGroup>
              <Label>Description (Optional)</Label>
              <TextArea
                value={education.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                placeholder="Add any relevant details about your education..."
              />
            </FormGroup>
          </Form>
        </EducationItem>
      ))}

      <button onClick={handleAdd}>
        <i className="fas fa-plus" /> Add Education
      </button>
    </EducationList>
  );
};

export default Education; 