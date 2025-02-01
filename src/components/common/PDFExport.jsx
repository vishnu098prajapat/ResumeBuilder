import React from 'react';
import styled from 'styled-components';
import html2pdf from 'html2pdf.js';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  white-space: nowrap;

  &:hover {
    background: #27ae60;
  }

  i {
    font-size: 1rem;
  }
`;

const PDFExport = ({ contentRef, fileName = 'resume.pdf' }) => {
  const handleExport = () => {
    const element = contentRef.current;
    const opt = {
      margin: 1,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <Button onClick={handleExport}>
      <i className="fas fa-download" />
      Download PDF
    </Button>
  );
};

export default PDFExport; 