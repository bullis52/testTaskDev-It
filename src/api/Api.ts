import axios from 'axios';
import {ExchangeRate} from '../interface';

export const fetchExchangeRates = async (
  currencyCode: string,
  startDate: string,
  endDate: string,
): Promise<ExchangeRate[]> => {
  const url = `https://bank.gov.ua/NBU_Exchange/exchange_site?start=${startDate}&end=${endDate}&valcode=${currencyCode}&sort=exchangedate&json'`;
  try {
    const response = await axios.get(url);
    return response.data as ExchangeRate[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
