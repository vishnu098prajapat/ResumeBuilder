import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Classic = ({ data }) => {
  return (
    <Template>
      {/* Template content will go here */}
      <h1>Classic Template Preview</h1>
    </Template>
  );
};

export default Classic; 