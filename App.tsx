import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ChartExchange from './src/components/ChartExchange/ChartExchange';
import CurrencyPicker from './src/components/CurrencyPicker';
import useExchangeRates from './src/hooks/useRates.ts';
import {Currency, formatDate, getLastWeekDates} from './src/utils';
import DateSelector from './src/components/DateSelector/Index.tsx';

const App: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>(Currency.USD);
  const [startDate, setStartDate] = useState<Date>(getLastWeekDates()[0]);
  const [endDate, setEndDate] = useState<Date>(getLastWeekDates()[1]);

  const [openStartDatePicker, setOpenStartDatePicker] =
    useState<boolean>(false);
  const [openEndDatePicker, setOpenEndDatePicker] = useState<boolean>(false);

  const exchangeData = useExchangeRates(
    currency,
    formatDate(startDate),
    formatDate(endDate),
  );

  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      <CurrencyPicker onCurrencyChange={setCurrency} />
      <DateSelector
        label="Start Date"
        date={startDate}
        onDateChange={setStartDate}
        openDatePicker={openStartDatePicker}
        setOpenDatePicker={setOpenStartDatePicker}
        maxDate={endDate}
      />
      <DateSelector
        label="End Date"
        date={endDate}
        onDateChange={setEndDate}
        openDatePicker={openEndDatePicker}
        setOpenDatePicker={setOpenEndDatePicker}
        minDate={startDate}
        maxDate={new Date()}
      />
      <ChartExchange data={exchangeData} />
    </SafeAreaView>
  );
};

export default App;
