import React from 'react';
import styled from 'styled-components';
import { templates } from '../components/resume-templates';
import TemplatePreview from '../components/TemplatePreview';

const Container = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: #333;
`;

const CategoryTitle = styled.h2`
  margin: 2rem 0 1rem;
  color: #666;
`;

const TemplateSelection = ({ onSelect }) => {
  const premiumTemplates = Object.values(templates).filter(t => t.premium);
  const freeTemplates = Object.values(templates).filter(t => !t.premium);

  return (
    <Container>
      <Title>Choose Your Resume Template</Title>

      <CategoryTitle>Premium Templates</CategoryTitle>
      <Grid>
        {premiumTemplates.map(template => (
          <TemplatePreview 
            key={template.id}
            template={template}
            onSelect={onSelect}
          />
        ))}
      </Grid>

      <CategoryTitle>Free Templates</CategoryTitle>
      <Grid>
        {freeTemplates.map(template => (
          <TemplatePreview 
            key={template.id}
            template={template}
            onSelect={onSelect}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default TemplateSelection; 