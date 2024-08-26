import React from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart, xAxis} from 'react-native-charts-wrapper';
import {ChartExchangeProps} from '../../interface';

const ChartExchange: React.FC<ChartExchangeProps> = ({data}) => {
  const chartData = {
    dataSets: [
      {
        values: data.map(entry => {
          const rate = parseFloat(entry.rate);
          return {y: isNaN(rate) ? 0 : rate};
        }),
        label: '',
        config: {
          lineWidth: 2,
          drawCircles: false,
          drawFilled: true,
          fillAlpha: 0.5,
        },
      },
    ],
  };

  const xAxis: xAxis = {
    valueFormatter: data.map(entry => entry.exchangedate),
    granularityEnabled: true,
    granularity: 1,
    labelCount: Math.min(data.length, 10),
    position: 'BOTTOM',
    labelRotationAngle: 45,
    drawLabels: true,
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <LineChart
        style={{height: 220, width: Dimensions.get('window').width}}
        data={chartData}
        xAxis={xAxis}
        chartDescription={{text: 'USD'}}
        legend={{enabled: false}}
        marker={{enabled: true}}
      />
    </View>
  );
};

export default ChartExchange;
