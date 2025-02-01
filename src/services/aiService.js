const API_ENDPOINT = 'YOUR_AI_API_ENDPOINT';

export const optimizeResume = async (resumeData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/optimize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resumeData)
    });
    
    const data = await response.json();
    return data.optimizedContent;
  } catch (error) {
    console.error('Error optimizing resume:', error);
    throw error;
  }
};

export const checkATSCompatibility = async (resumeData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/ats-check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resumeData)
    });
    
    const data = await response.json();
    return {
      score: data.score,
      suggestions: data.suggestions
    };
  } catch (error) {
    console.error('Error checking ATS compatibility:', error);
    throw error;
  }
};

export const enhanceContent = async (content, role) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/enhance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, role })
    });
    
    const data = await response.json();
    return data.enhancedContent;
  } catch (error) {
    console.error('Error enhancing content:', error);
    throw error;
  }
}; 