export class AppError extends Error {
  constructor(message, type = 'error', statusCode = 400) {
    super(message);
    this.type = type;
    this.statusCode = statusCode;
    this.name = 'AppError';
  }
}

export const handleError = (error) => {
  console.error('Error:', error);

  if (error instanceof AppError) {
    return {
      message: error.message,
      type: error.type,
      statusCode: error.statusCode
    };
  }

  // Network errors
  if (error.name === 'NetworkError') {
    return {
      message: 'Unable to connect to the server. Please check your internet connection.',
      type: 'error',
      statusCode: 503
    };
  }

  // Default error
  return {
    message: 'Something went wrong. Please try again later.',
    type: 'error',
    statusCode: 500
  };
}; 