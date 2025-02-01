import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 2rem;
  color: #3498db;
  margin: 1rem 0;
  text-align: center;
`;

const Features = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    color: #34495e;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  
  &:hover {
    background: #2980b9;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #7f8c8d;
  
  &:hover {
    color: #34495e;
  }
`;

const PaymentModal = ({ onClose, onSuccess }) => {
  const handlePayment = () => {
    // Integrate with your payment gateway here
    // For now, we'll just simulate a successful payment
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Upgrade to Premium</Title>
        <Price>₹499</Price>
        <Features>
          <li>Access to all premium templates</li>
          <li>No watermarks</li>
          <li>Priority support</li>
          <li>Future template updates</li>
        </Features>
        <Button onClick={handlePayment}>
          Pay Now
        </Button>
      </Modal>
    </Overlay>
  );
};

export default PaymentModal; 