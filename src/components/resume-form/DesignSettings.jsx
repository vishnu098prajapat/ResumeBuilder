import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.9rem;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
`;

const ColorButton = styled.button`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  border: 2px solid ${props => props.$selected ? '#3498db' : 'transparent'};
  background: ${props => props.color};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const DesignSettings = ({ data = {}, updateData }) => {
  const colors = [
    '#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6',
    '#34495e', '#1abc9c', '#d35400', '#7f8c8d', '#2c3e50'
  ];

  const fonts = [
    'Arial',
    'Roboto',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Source Sans Pro'
  ];

  const handleColorChange = (color) => {
    updateData({ ...data, color });
  };

  const handleFontChange = (e) => {
    updateData({ ...data, font: e.target.value });
  };

  return (
    <Container>
      <Section>
        <Label>Color Theme</Label>
        <ColorGrid>
          {colors.map(color => (
            <ColorButton
              key={color}
              color={color}
              $selected={data.color === color}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </ColorGrid>
      </Section>

      <Section>
        <Label>Font Family</Label>
        <Select value={data.font || 'Arial'} onChange={handleFontChange}>
          {fonts.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </Select>
      </Section>
    </Container>
  );
};

export default DesignSettings; 