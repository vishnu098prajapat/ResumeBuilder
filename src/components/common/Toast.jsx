import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const ToastMessage = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
  animation: ${slideIn} 0.3s ease;
  background: ${props => {
    switch (props.$type) {
      case 'success': return '#2ecc71';
      case 'error': return '#e74c3c';
      case 'warning': return '#f1c40f';
      default: return '#3498db';
    }
  }};
`;

const Toast = ({ messages = [] }) => {
  return (
    <ToastContainer>
      {messages.map((msg, index) => (
        <ToastMessage key={index} $type={msg.type}>
          {msg.text}
        </ToastMessage>
      ))}
    </ToastContainer>
  );
};

export default Toast; 