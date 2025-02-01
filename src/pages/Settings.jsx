import React from 'react';
import styled from 'styled-components';
import { useSettings } from '../contexts/SettingsContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SettingGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #2c3e50;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Toggle = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;

  input {
    display: none;
  }

  span {
    width: 48px;
    height: 24px;
    background: ${props => props.checked ? '#2ecc71' : '#95a5a6'};
    border-radius: 12px;
    position: relative;
    transition: background 0.3s;

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      top: 2px;
      left: ${props => props.checked ? '26px' : '2px'};
      transition: left 0.3s;
    }
  }
`;

const SaveButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

const Settings = () => {
  const { settings, updateSettings } = useSettings();
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    updateSettings({ [key]: value });
  };

  return (
    <Container>
      <Title>Settings</Title>

      <Section>
        <SectionTitle>Appearance</SectionTitle>
        <SettingGroup>
          <Label>Theme</Label>
          <Select 
            value={settings.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Select>
        </SettingGroup>

        <SettingGroup>
          <Label>Font Size</Label>
          <Select 
            value={settings.fontSize}
            onChange={(e) => handleChange('fontSize', e.target.value)}
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </Select>
        </SettingGroup>
      </Section>

      <Section>
        <SectionTitle>Resume Preferences</SectionTitle>
        <SettingGroup>
          <Label>Default Template</Label>
          <Select 
            value={settings.defaultTemplate}
            onChange={(e) => handleChange('defaultTemplate', e.target.value)}
          >
            <option value="modern">Modern</option>
            <option value="professional">Professional</option>
            <option value="creative">Creative</option>
            <option value="simple">Simple</option>
          </Select>
        </SettingGroup>

        <SettingGroup>
          <Label>Auto Save</Label>
          <Toggle checked={settings.autoSave}>
            <input 
              type="checkbox"
              checked={settings.autoSave}
              onChange={(e) => handleChange('autoSave', e.target.checked)}
            />
            <span />
          </Toggle>
        </SettingGroup>
      </Section>

      <Section>
        <SectionTitle>Notifications</SectionTitle>
        <SettingGroup>
          <Label>Email Notifications</Label>
          <Toggle checked={settings.notifications}>
            <input 
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleChange('notifications', e.target.checked)}
            />
            <span />
          </Toggle>
        </SettingGroup>
      </Section>

      <SaveButton onClick={() => navigate('/dashboard')}>
        Save Changes
      </SaveButton>
    </Container>
  );
};

export default Settings; 