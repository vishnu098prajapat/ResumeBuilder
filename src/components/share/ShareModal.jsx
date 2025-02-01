import React, { useState } from 'react';
import styled from 'styled-components';
import { useAnalytics } from '../../contexts/AnalyticsContext';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const ShareOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.bg};
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  i {
    font-size: 1.2rem;
  }
`;

const LinkSection = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const LinkInput = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.9rem;
  }

  button {
    padding: 0.8rem 1.2rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #2980b9;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

const ShareModal = ({ resumeId, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { trackShare } = useAnalytics();
  const shareUrl = `${window.location.origin}/preview/${resumeId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform) => {
    trackShare(resumeId);
    
    const shareText = 'Check out my resume!';
    let shareUrl;

    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent('My Resume')}&body=${encodeURIComponent(`${shareText}\n\n${window.location.href}`)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Share Resume</Title>

        <ShareOptions>
          <ShareButton 
            bg="#0077b5"
            onClick={() => handleShare('linkedin')}
          >
            <i className="fab fa-linkedin" />
            LinkedIn
          </ShareButton>
          <ShareButton 
            bg="#1da1f2"
            onClick={() => handleShare('twitter')}
          >
            <i className="fab fa-twitter" />
            Twitter
          </ShareButton>
          <ShareButton 
            bg="#ea4335"
            onClick={() => handleShare('email')}
          >
            <i className="fas fa-envelope" />
            Email
          </ShareButton>
        </ShareOptions>

        <LinkSection>
          <Label>Share Link</Label>
          <LinkInput>
            <input 
              type="text" 
              value={shareUrl} 
              readOnly 
            />
            <button onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </LinkInput>
        </LinkSection>
      </Modal>
    </Overlay>
  );
};

export default ShareModal; 