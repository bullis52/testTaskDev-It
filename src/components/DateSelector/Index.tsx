import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {formatDate} from '../../utils';
import {DateSelectorProps} from '../../interface';

const DateSelector: React.FC<DateSelectorProps> = ({
  label,
  date,
  onDateChange,
  openDatePicker,
  setOpenDatePicker,
  minDate,
  maxDate,
}) => {
  const handleDateConfirm = (selectedDate: Date) => {
    if (minDate && selectedDate < minDate) {
      Alert.alert(
        'Invalid Date',
        'Selected date is before the minimum allowed date.',
      );
      return;
    }
    if (maxDate && selectedDate > maxDate) {
      Alert.alert(
        'Invalid Date',
        'Selected date is after the maximum allowed date.',
      );
      return;
    }
    onDateChange(selectedDate);
    setOpenDatePicker(false);
  };

  return (
    <View style={{marginVertical: 20}}>
      <Text>{label}</Text>
      <Button
        title={`${label}: ${formatDate(date, true)}`}
        onPress={() => setOpenDatePicker(true)}
      />
      <DatePicker
        modal
        mode="date"
        open={openDatePicker}
        date={date}
        maximumDate={maxDate}
        minimumDate={minDate}
        onConfirm={handleDateConfirm}
        onCancel={() => setOpenDatePicker(false)}
      />
    </View>
  );
};

export default DateSelector;
