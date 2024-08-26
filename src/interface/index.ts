import {Currency} from '../utils';

export interface ExchangeRate {
  exchangedate: string;
  rate: string;
}

export interface ChartExchangeProps {
  data: ExchangeRate[];
}

export interface DateSelectorProps {
  label: string;
  date: Date;
  onDateChange: (date: Date) => void;
  openDatePicker: boolean;
  setOpenDatePicker: (open: boolean) => void;
  minDate?: Date;
  maxDate?: Date;
}

export interface CurrencyPickerProps {
  onCurrencyChange: (value: Currency) => void;
}
