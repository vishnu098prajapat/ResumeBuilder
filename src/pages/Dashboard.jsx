import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  perspective: 1000px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #3498db;
    transform: skewX(-20deg);
  }
`;

const CreateButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    background: #2980b9;
    transform: translateY(-3px) rotateX(5deg);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const ResumeCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const ResumePreview = styled.div`
  height: 300px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #eee;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255,255,255,0.1) 50%,
      transparent 100%
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }
`;

const ResumeInfo = styled.div`
  padding: 1.5rem;
  background: white;
  transform: translateZ(20px);
`;

const ResumeName = styled.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`;

const ResumeDate = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  background: ${props => props.$primary ? '#3498db' : '#f8f9fa'};
  color: ${props => props.$primary ? 'white' : '#2c3e50'};
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    background: ${props => props.$primary ? '#2980b9' : '#eee'};
  }

  &:active {
    transform: translateY(1px);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  animation: ${fadeIn} 1s ease-out;

  h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    setResumes(savedResumes);
  }, []);

  const createNewResume = () => {
    const newResumeId = Date.now().toString();
    const newResume = {
      id: newResumeId,
      name: 'Untitled Resume',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      data: {
        personalInfo: {},
        experience: [],
        education: [],
        skills: []
      }
    };

    const updatedResumes = [...resumes, newResume];
    localStorage.setItem('resumes', JSON.stringify(updatedResumes));
    setResumes(updatedResumes);
    navigate(`/builder/${newResumeId}`);
  };

  const editResume = (id) => {
    navigate(`/builder/${id}`);
  };

  const previewResume = (id) => {
    navigate(`/preview/${id}`);
  };

  const deleteResume = (id) => {
    const updatedResumes = resumes.filter(resume => resume.id !== id);
    localStorage.setItem('resumes', JSON.stringify(updatedResumes));
    setResumes(updatedResumes);
  };

  return (
    <DashboardContainer>
      <Header>
        <Title>My Resumes</Title>
        <CreateButton onClick={createNewResume}>
          <i className="fas fa-plus"></i> Create New Resume
        </CreateButton>
      </Header>

      {resumes.length === 0 ? (
        <EmptyState>
          <h2>No Resumes Yet</h2>
          <p>Create your first resume to get started</p>
          <CreateButton onClick={createNewResume}>
            Create Your First Resume
          </CreateButton>
        </EmptyState>
      ) : (
        <ResumeGrid>
          {resumes.map((resume, index) => (
            <ResumeCard key={resume.id} $delay={index * 0.2}>
              <ResumePreview>
                {/* Add resume preview/thumbnail here */}
              </ResumePreview>
              <ResumeInfo>
                <ResumeName>{resume.name}</ResumeName>
                <ResumeDate>
                  Last modified: {new Date(resume.updatedAt).toLocaleDateString()}
                </ResumeDate>
                <ActionButtons>
                  <ActionButton onClick={() => editResume(resume.id)}>
                    <i className="fas fa-edit"></i> Edit
                  </ActionButton>
                  <ActionButton $primary onClick={() => previewResume(resume.id)}>
                    <i className="fas fa-eye"></i> Preview
                  </ActionButton>
                  <ActionButton onClick={() => deleteResume(resume.id)}>
                    <i className="fas fa-trash"></i>
                  </ActionButton>
                </ActionButtons>
              </ResumeInfo>
            </ResumeCard>
          ))}
        </ResumeGrid>
      )}
    </DashboardContainer>
  );
};

export default Dashboard; 