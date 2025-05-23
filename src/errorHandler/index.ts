import { AxiosError } from 'axios';

export const handleApiError = (error: AxiosError): string => {
  if (error.response ) {
    // Server responded with a status other than 200 range
    
    return error?.message  || 'An error occurred';
  } else if (error.request) {
    // Request was made but no response was received
    return 'Network error';
  } else {
    // Something happened in setting up the request
    return error.message;
  }
};