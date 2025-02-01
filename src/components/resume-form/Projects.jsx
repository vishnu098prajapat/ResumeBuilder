import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.div`
  margin-bottom: 2rem;
`;

const ProjectCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #eee;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
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
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.$danger ? '#e74c3c' : '#3498db'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
  
  &:hover {
    background-color: ${props => props.$danger ? '#c0392b' : '#2980b9'};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.div`
  background: #3498db20;
  color: #3498db;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    padding: 0;
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const Projects = ({ data = [], updateData }) => {
  const handleAdd = () => {
    updateData([
      ...data,
      {
        name: '',
        description: '',
        technologies: [],
        link: '',
        github: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const handleRemove = (index) => {
    updateData(data.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value
    };
    updateData(newData);
  };

  const handleAddTech = (index) => {
    const tech = prompt('Enter technology name:');
    if (tech?.trim()) {
      const newData = [...data];
      newData[index].technologies = [...(newData[index].technologies || []), tech.trim()];
      updateData(newData);
    }
  };

  const handleRemoveTech = (projectIndex, techIndex) => {
    const newData = [...data];
    newData[projectIndex].technologies.splice(techIndex, 1);
    updateData(newData);
  };

  return (
    <ProjectSection>
      <h2>Projects</h2>
      {data.map((project, index) => (
        <ProjectCard key={index}>
          <FormGroup>
            <Label>Project Name</Label>
            <Input
              type="text"
              value={project.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              placeholder="My Awesome Project"
            />
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <TextArea
              value={project.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              placeholder="Describe your project, its features and impact..."
            />
          </FormGroup>

          <FormGroup>
            <Label>Project Link</Label>
            <Input
              type="url"
              value={project.link}
              onChange={(e) => handleChange(index, 'link', e.target.value)}
              placeholder="https://myproject.com"
            />
          </FormGroup>

          <FormGroup>
            <Label>GitHub Repository</Label>
            <Input
              type="url"
              value={project.github}
              onChange={(e) => handleChange(index, 'github', e.target.value)}
              placeholder="https://github.com/username/repo"
            />
          </FormGroup>

          <FormGroup>
            <Label>Duration</Label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Input
                type="text"
                value={project.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                placeholder="Start Date (MM/YYYY)"
                style={{ width: '50%' }}
              />
              <Input
                type="text"
                value={project.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                placeholder="End Date (MM/YYYY or Ongoing)"
                style={{ width: '50%' }}
              />
            </div>
          </FormGroup>

          <Label>Technologies Used</Label>
          <TechStack>
            {project.technologies?.map((tech, techIndex) => (
              <TechTag key={techIndex}>
                {tech}
                <button onClick={() => handleRemoveTech(index, techIndex)}>&times;</button>
              </TechTag>
            ))}
            <Button type="button" onClick={() => handleAddTech(index)}>
              + Add Technology
            </Button>
          </TechStack>

          <div style={{ marginTop: '1rem' }}>
            <Button $danger onClick={() => handleRemove(index)}>
              Remove Project
            </Button>
          </div>
        </ProjectCard>
      ))}

      <Button onClick={handleAdd}>
        + Add New Project
      </Button>
    </ProjectSection>
  );
};

export default Projects; 