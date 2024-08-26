import {useState, useEffect} from 'react';
import {fetchExchangeRates} from '../api/Api.ts';
import {Currency} from '../utils';
import {ExchangeRate} from '../interface';

const useExchangeRates = (
  currency: Currency,
  startDate: string,
  endDate: string,
) => {
  const [exchangeData, setExchangeData] = useState<ExchangeRate[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchExchangeRates(currency, startDate, endDate);
      setExchangeData(data);
    };
    loadData();
  }, [currency, startDate, endDate]);

  return exchangeData;
};

export default useExchangeRates;
