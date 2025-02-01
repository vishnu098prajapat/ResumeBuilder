import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: 2rem;
`;

const AddSectionButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: #f8f9fa;
  border: 2px dashed #3498db;
  border-radius: 8px;
  color: #3498db;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;

  &:hover {
    background: #3498db10;
    transform: translateY(-2px);
  }
`;

const CustomSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.$danger ? '#e74c3c' : '#3498db'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.$danger ? '#c0392b' : '#2980b9'};
  }
`;

const ItemContainer = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const AddItemButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #f8f9fa;
  border: 1px dashed #3498db;
  border-radius: 4px;
  color: #3498db;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #3498db10;
  }
`;

const CustomSections = ({ data = [], updateData }) => {
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState('');

  const handleAddSection = () => {
    if (showTitleInput && newSectionTitle.trim()) {
      updateData([
        ...data,
        {
          id: Date.now(),
          title: newSectionTitle,
          description: '',
          items: []
        }
      ]);
      setNewSectionTitle('');
      setShowTitleInput(false);
    } else {
      setShowTitleInput(true);
    }
  };

  const handleRemoveSection = (sectionId) => {
    updateData(data.filter(section => section.id !== sectionId));
  };

  const handleUpdateSection = (sectionId, field, value) => {
    updateData(data.map(section => 
      section.id === sectionId 
        ? { ...section, [field]: value }
        : section
    ));
  };

  const handleAddItem = (sectionId) => {
    updateData(data.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            items: [
              ...section.items,
              { id: Date.now(), title: '', description: '' }
            ]
          }
        : section
    ));
  };

  const handleUpdateItem = (sectionId, itemId, field, value) => {
    updateData(data.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            items: section.items.map(item =>
              item.id === itemId
                ? { ...item, [field]: value }
                : item
            )
          }
        : section
    ));
  };

  const handleRemoveItem = (sectionId, itemId) => {
    updateData(data.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            items: section.items.filter(item => item.id !== itemId)
          }
        : section
    ));
  };

  return (
    <SectionContainer>
      <h2>Custom Sections</h2>
      
      {data.map(section => (
        <CustomSection key={section.id}>
          <SectionHeader>
            <Input
              type="text"
              value={section.title}
              onChange={(e) => handleUpdateSection(section.id, 'title', e.target.value)}
              placeholder="Section Title"
              style={{ maxWidth: '300px' }}
            />
            <Button $danger onClick={() => handleRemoveSection(section.id)}>
              Remove Section
            </Button>
          </SectionHeader>

          <TextArea
            value={section.description}
            onChange={(e) => handleUpdateSection(section.id, 'description', e.target.value)}
            placeholder="Section Description (optional)"
          />

          {section.items.map(item => (
            <ItemContainer key={item.id}>
              <Input
                type="text"
                value={item.title}
                onChange={(e) => handleUpdateItem(section.id, item.id, 'title', e.target.value)}
                placeholder="Item Title"
                style={{ marginBottom: '1rem' }}
              />
              <TextArea
                value={item.description}
                onChange={(e) => handleUpdateItem(section.id, item.id, 'description', e.target.value)}
                placeholder="Item Description"
              />
              <Button 
                $danger 
                onClick={() => handleRemoveItem(section.id, item.id)}
                style={{ float: 'right' }}
              >
                Remove Item
              </Button>
            </ItemContainer>
          ))}

          <AddItemButton onClick={() => handleAddItem(section.id)}>
            + Add Item
          </AddItemButton>
        </CustomSection>
      ))}

      {showTitleInput ? (
        <div style={{ marginBottom: '1rem' }}>
          <Input
            type="text"
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
            placeholder="Enter section title..."
            autoFocus
          />
        </div>
      ) : null}

      <AddSectionButton onClick={handleAddSection}>
        + Add Custom Section
      </AddSectionButton>
    </SectionContainer>
  );
};

export default CustomSections; 