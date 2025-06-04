import React from 'react';
import { useStock } from '@/Context/StockDataContext';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function Graph() {
  const { stockData, loading, symbol } = useStock();
    

  if (loading) {
    return <p>Loading {symbol} data...</p>;
  }

  if (!stockData || !stockData.prices || stockData.prices.length === 0) {
    return <p>No data available for {symbol}</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={stockData.prices} // Use stockData.prices, not stockData
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dataKey="price" domain={['auto', 'auto']} />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="price" 
          stroke="red" 
          fill="green" 
          strokeWidth={2} 
          fillOpacity={0.3} 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Graph;
