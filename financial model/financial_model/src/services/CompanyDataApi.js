import axios from 'axios';

export const getOneCompanyQuotes = async (symbol) => {
  const apiUrl = `https://backend.ymyc.ai/api/market_data/${symbol}`;
  try {
    const response = await axios.get(apiUrl);
    if (response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

export const getSearchCompanyReq = () => { return []; };
