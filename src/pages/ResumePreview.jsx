import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import PDFExport from '../components/common/PDFExport';
import { templates } from '../components/resume-templates';
import { useAnalytics } from '../contexts/AnalyticsContext';
import ShareModal from '../components/share/ShareModal';

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: #f8f9fa;
  padding: 2rem;
`;

const PreviewContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.$primary ? '#3498db' : 'white'};
  color: ${props => props.$primary ? 'white' : '#2c3e50'};
  border: ${props => props.$primary ? 'none' : '1px solid #ddd'};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$primary ? '#2980b9' : '#f8f9fa'};
  }

  i {
    font-size: 1.2rem;
  }
`;

const PreviewArea = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ResumePreview = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const { trackView } = useAnalytics();
  const [showShareModal, setShowShareModal] = useState(false);
  
  const [resumeData, setResumeData] = useState(() => {
    // Get data from localStorage
    const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    const resume = savedResumes.find(r => r.id === resumeId);
    
    if (!resume) {
      return null;
    }
    
    return resume;
  });

  useEffect(() => {
    if (resumeId) {
      trackView(resumeId);
    }
  }, [resumeId, trackView]);

  if (!resumeData) {
    return <div>Resume not found</div>;
  }

  const Template = templates[resumeData.template]?.component;

  if (!Template) {
    return <div>Template not found</div>;
  }

  return (
    <Container>
      <PreviewContainer>
        <Header>
          <Title>Resume Preview</Title>
          <ButtonGroup>
            <Button onClick={() => setShowShareModal(true)}>
              <i className="fas fa-share-alt" />
              Share
            </Button>
            <Button onClick={() => navigate(`/builder/${resumeId}`)}>
              <i className="fas fa-edit" />
              Edit Resume
            </Button>
            <PDFExport 
              contentRef={contentRef} 
              fileName={`${resumeData.data.personalInfo?.fullName || 'resume'}.pdf`}
            />
          </ButtonGroup>
        </Header>

        <PreviewArea ref={contentRef}>
          <Template 
            data={resumeData.data}
            design={resumeData.design}
          />
        </PreviewArea>
      </PreviewContainer>

      {showShareModal && (
        <ShareModal 
          resumeId={resumeId}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </Container>
  );
};

export default ResumePreview; 