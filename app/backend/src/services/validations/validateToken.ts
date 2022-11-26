const validateToken = async (token: string) => {
  if (!token) {
    return { type: 'UNAUTHORIZED', message: 'Token not found' };
  }

  return { type: null, message: '' };
};

export default validateToken;
