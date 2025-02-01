import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  border-radius: 6px;
  font-size: 0.9rem;
  background: ${props => props.theme.surface};
  color: ${props => props.theme.text.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.primary}33;
  }

  &::placeholder {
    color: ${props => props.theme.text.light};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 6px;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
  background: ${props => props.theme.surface};
  color: ${props => props.theme.text.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.primary}33;
  }

  &::placeholder {
    color: ${props => props.theme.text.light};
  }
`;

const PersonalInfo = ({ data = {}, updateData }) => {
  const handleChange = (field, value) => {
    updateData({
      ...data,
      [field]: value
    });
  };

  return (
    <Form>
      <FormGroup>
        <Label>Full Name</Label>
        <Input
          type="text"
          value={data.fullName || ''}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="e.g. John Doe"
        />
      </FormGroup>

      <FormGroup>
        <Label>Professional Title</Label>
        <Input
          type="text"
          value={data.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="e.g. Senior Software Engineer"
        />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          value={data.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="e.g. john@example.com"
        />
      </FormGroup>

      <FormGroup>
        <Label>Phone</Label>
        <Input
          type="tel"
          value={data.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="e.g. +1 234 567 890"
        />
      </FormGroup>

      <FormGroup>
        <Label>Location</Label>
        <Input
          type="text"
          value={data.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="e.g. New York, USA"
        />
      </FormGroup>

      <FormGroup>
        <Label>Professional Summary</Label>
        <TextArea
          value={data.summary || ''}
          onChange={(e) => handleChange('summary', e.target.value)}
          placeholder="Write a brief summary of your professional background and key qualifications..."
        />
      </FormGroup>
    </Form>
  );
};

export default PersonalInfo; 