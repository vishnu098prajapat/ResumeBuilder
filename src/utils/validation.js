export const validatePersonalInfo = (data) => {
  const required = ['fullName', 'title'];
  const errors = {};

  required.forEach(field => {
    if (!data[field]?.trim()) {
      errors[field] = 'This field is required';
    }
  });

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (data.linkedin && !data.linkedin.includes('linkedin.com')) {
    errors.linkedin = 'Invalid LinkedIn URL';
  }

  if (data.github && !data.github.includes('github.com')) {
    errors.github = 'Invalid GitHub URL';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateExperience = (data) => {
  return data.length > 0 && data.every(exp => 
    exp.company?.trim() &&
    exp.position?.trim() &&
    exp.startDate?.trim()
  );
};

export const validateEducation = (data) => {
  return data.length > 0 && data.every(edu => 
    edu.school?.trim() &&
    edu.degree?.trim() &&
    edu.startYear?.trim()
  );
};

export const validateSkills = (data) => {
  return data.length > 0;
};