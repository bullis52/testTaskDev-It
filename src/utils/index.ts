export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export const getLastWeekDates = (): [Date, Date] => {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - 7);

  return [startDate, endDate];
};

export const formatDate = (date: Date, display?: boolean): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return display ? `${year}-${month}-${day}` : `${year}${month}${day}`;
};
