import axios from 'axios';

export const getAddressByZipcode = async zipCode => {
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipCode.replace(/\D/g, '')}/json`
    );
    return response.data || {};
  } catch (error) {
    throw error;
  }
};
