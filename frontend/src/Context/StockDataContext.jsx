import { createContext, useContext, useState, useEffect } from "react";
import { fetchStockData, getAvailableStocks } from "@/Services/MarketData";

const StockDataContext = createContext();

export const StockDataProvider = ({ children }) => {
  const [symbol, setSymbol] = useState("AAPL");
  const [stockData, setStockData] = useState(null); // Single stock object
  const [availableStocks] = useState(getAvailableStocks()); // List for dropdown
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!symbol) return;
    
    const loadingStocksData = async () => {
      setLoading(true);
      try {
        const data = await fetchStockData(symbol);
        setStockData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadingStocksData();
  }, [symbol]);

  return (
    <StockDataContext.Provider value={{ 
      symbol, 
      setSymbol, 
      stockData, 
      availableStocks, 
      loading 
    }}>
      {children}
    </StockDataContext.Provider>
  );
};

export const useStock = () => useContext(StockDataContext);
