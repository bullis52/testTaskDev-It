import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Currency} from '../../utils';
import {CurrencyPickerProps} from '../../interface';

const CurrencyPicker: React.FC<CurrencyPickerProps> = ({onCurrencyChange}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    Currency.USD,
  );

  const handleValueChange = (value: Currency) => {
    setSelectedCurrency(value);
    onCurrencyChange(value);
  };

  return (
    <View>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={handleValueChange}>
        <Picker.Item label={Currency.USD} value={Currency.USD} />
        <Picker.Item label={Currency.EUR} value={Currency.EUR} />
        <Picker.Item label={Currency.GBP} value={Currency.GBP} />
      </Picker>
    </View>
  );
};

export default CurrencyPicker;
