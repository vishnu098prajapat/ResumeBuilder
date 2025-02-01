import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { templates } from '../components/resume-templates';
import PDFExport from '../components/common/PDFExport';
import PersonalInfo from '../components/resume-form/PersonalInfo';
import Experience from '../components/resume-form/Experience';
import Education from '../components/resume-form/Education';
import Skills from '../components/resume-form/Skills';
import DesignSettings from '../components/resume-form/DesignSettings';
import Achievements from '../components/resume-form/Achievements';
import { ThemeProvider } from 'styled-components';

const BuilderContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: calc(100vh - 70px);
  background: ${props => props.theme.background};
  
  @media (max-width: 1200px) {
    grid-template-columns: 350px 1fr;
  }
`;

const Sidebar = styled.div`
  background: ${props => props.theme.surface};
  border-right: 1px solid ${props => props.theme.border};
  overflow-y: auto;
  height: calc(100vh - 70px);
  position: sticky;
  top: 70px;
`;

const PreviewPane = styled.div`
  padding: 2rem;
  background: #f0f0f0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

const FormSection = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const Tab = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  color: ${props => props.$active ? props.theme.primary : props.theme.text.secondary};
  font-weight: ${props => props.$active ? '600' : '400'};
  border-bottom: 2px solid ${props => props.$active ? props.theme.primary : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ToolBar = styled.div`
  position: sticky;
  top: 0;
  background: ${props => props.theme.surface};
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

const ActionButtons = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 400px;
  padding: 1rem;
  background: white;
  border-top: 1px solid ${props => props.theme.border};
  display: flex;
  gap: 1rem;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);

  @media (max-width: 1200px) {
    width: 350px;
  }
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  white-space: nowrap;

  &:hover {
    background: #27ae60;
  }

  i {
    font-size: 1rem;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  white-space: nowrap;

  &:hover {
    background: #2980b9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  i {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.$primary ? props.theme.primary : props.theme.surface};
  color: ${props => props.$primary ? 'white' : props.theme.text.primary};
  border: ${props => props.$primary ? 'none' : `1px solid ${props.theme.border}`};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$primary ? `${props.theme.primary}dd` : props.theme.background};
  }

  i {
    font-size: 1.2rem;
  }
`;

const ResumeName = styled.input`
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  width: 200px;

  &:hover {
    border-color: #ddd;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

// Add theme default values
const defaultTheme = {
  text: {
    primary: '#2c3e50',
    secondary: '#666666'
  }
};

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [saving, setSaving] = useState(false);
  const previewRef = useRef(null);

  const [resumeData, setResumeData] = useState(() => {
    // Check localStorage for existing data
    const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    const existingResume = savedResumes.find(r => r.id === resumeId);
    
    return existingResume || {
      id: resumeId,
      name: 'Untitled Resume',
      template: 'modern',
      data: {
        personalInfo: {},
        experience: [],
        education: [],
        skills: [],
        achievements: []
      },
      design: {
        color: '#3498db',
        font: 'Arial'
      }
    };
  });

  const handleDataChange = (section, data) => {
    setResumeData(prev => {
      const newData = {
        ...prev,
        data: {
          ...prev.data,
          [section]: data
        }
      };
      
      // Immediately save to localStorage
      const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
      const updatedResumes = savedResumes.map(resume => 
        resume.id === resumeId ? newData : resume
      );
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
      
      return newData;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      console.log('Saving resume data:', resumeData);
      const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
      
      // Find and update the existing resume
      const updatedResumes = savedResumes.map(resume => 
        resume.id === resumeId ? {
          ...resumeData,
          updatedAt: new Date().toISOString()
        } : resume
      );

      // If resume doesn't exist, add it
      if (!savedResumes.find(r => r.id === resumeId)) {
        updatedResumes.push({
          ...resumeData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }

      // Save to localStorage
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
      console.log('Saved resumes:', updatedResumes);
      alert('Resume saved successfully!');
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('Error saving resume');
    } finally {
      setSaving(false);
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setResumeData(prev => ({ ...prev, name: newName }));
  };

  const handlePreview = () => {
    navigate(`/preview/${resumeId}`);
  };

  const handleAddItem = (section) => {
    if (section === 'experience') {
      setResumeData(prev => ({
        ...prev,
        data: {
          ...prev.data,
          experience: [
            ...(prev.data.experience || []),
            {
              position: '',
              company: '',
              startDate: '',
              endDate: '',
              description: ''
            }
          ]
        }
      }));
    } else if (section === 'education') {
      setResumeData(prev => ({
        ...prev,
        data: {
          ...prev.data,
          education: [
            ...(prev.data.education || []),
            {
              degree: '',
              school: '',
              startYear: '',
              endYear: '',
              grade: '',
              description: ''
            }
          ]
        }
      }));
    } else if (section === 'achievements') {
      setResumeData(prev => ({
        ...prev,
        data: {
          ...prev.data,
          achievements: [
            ...(prev.data.achievements || []),
            {
              title: '',
              issuer: '',
              date: '',
              description: ''
            }
          ]
        }
      }));
    }
  };

  // Get the template component
  const Template = templates[resumeData.template]?.component;

  return (
    <ThemeProvider theme={defaultTheme}>
      <BuilderContainer>
        <Sidebar>
          <FormSection>
            <ResumeName
              type="text"
              value={resumeData.name || ''}
              onChange={handleNameChange}
              placeholder="Untitled Resume"
            />
            <Tabs>
              <Tab
                $active={activeTab === 'content'}
                onClick={() => setActiveTab('content')}
              >
                Content
              </Tab>
              <Tab
                $active={activeTab === 'design'}
                onClick={() => setActiveTab('design')}
              >
                Design
              </Tab>
            </Tabs>
          </FormSection>

          {activeTab === 'content' ? (
            <>
              <FormSection>
                <SectionTitle>Personal Information</SectionTitle>
                <PersonalInfo
                  data={resumeData.data.personalInfo}
                  updateData={(data) => handleDataChange('personalInfo', data)}
                />
              </FormSection>

              <FormSection>
                <SectionTitle>
                  Experience
                  <Button onClick={() => handleAddItem('experience')}>
                    <i className="fas fa-plus" /> Add
                  </Button>
                </SectionTitle>
                <Experience
                  data={resumeData.data.experience}
                  updateData={(data) => handleDataChange('experience', data)}
                />
              </FormSection>

              <FormSection>
                <SectionTitle>
                  Education
                  <Button onClick={() => handleAddItem('education')}>
                    <i className="fas fa-plus" /> Add
                  </Button>
                </SectionTitle>
                <Education
                  data={resumeData.data.education}
                  updateData={(data) => handleDataChange('education', data)}
                />
              </FormSection>

              <FormSection>
                <SectionTitle>Skills</SectionTitle>
                <Skills
                  data={resumeData.data.skills}
                  updateData={(data) => handleDataChange('skills', data)}
                />
              </FormSection>

              <FormSection>
                <SectionTitle>
                  Achievements & Certificates
                  <Button onClick={() => handleAddItem('achievements')}>
                    <i className="fas fa-plus" /> Add
                  </Button>
                </SectionTitle>
                <Achievements
                  data={resumeData.data.achievements}
                  updateData={(data) => handleDataChange('achievements', data)}
                />
              </FormSection>
            </>
          ) : (
            <DesignSettings
              data={resumeData.design}
              updateData={(data) => handleDataChange('design', data)}
            />
          )}

          <ActionButtons>
            <PDFExport
              contentRef={previewRef}
              fileName={`${resumeData.data.personalInfo?.fullName || 'resume'}.pdf`}
            />
            <SaveButton onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </SaveButton>
          </ActionButtons>
        </Sidebar>

        <PreviewPane>
          <div ref={previewRef}>
            {Template && (
              <Template 
                data={resumeData.data}
                design={resumeData.design}
              />
            )}
          </div>
        </PreviewPane>
      </BuilderContainer>
    </ThemeProvider>
  );
};

export default ResumeBuilder; 