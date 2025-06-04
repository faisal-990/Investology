export async function fetchStockData(symbol) {
  const dummyData = {
    AAPL: {
      symbol: "AAPL",
      name: "Apple Inc.",
      prices: [
        { time: "2025-06-01T10:00:00Z", price: 185.23 },
        { time: "2025-06-01T11:00:00Z", price: 186.10 },
        { time: "2025-06-01T12:00:00Z", price: 187.45 },
        { time: "2025-06-01T13:00:00Z", price: 186.80 },
        { time: "2025-06-01T14:00:00Z", price: 187.00 },
        { time: "2025-06-01T15:00:00Z", price: 187.75 },
        { time: "2025-06-01T16:00:00Z", price: 188.20 },
      ],
    },
    MSFT: {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      prices: [
        { time: "2025-06-01T10:00:00Z", price: 312.50 },
        { time: "2025-06-01T11:00:00Z", price: 313.20 },
        { time: "2025-06-01T12:00:00Z", price: 314.10 },
        { time: "2025-06-01T13:00:00Z", price: 313.80 },
        { time: "2025-06-01T14:00:00Z", price: 314.50 },
        { time: "2025-06-01T15:00:00Z", price: 315.00 },
        { time: "2025-06-01T16:00:00Z", price: 315.60 },
      ],
    },
    TSLA: {
      symbol: "TSLA",
      name: "Tesla Inc.",
      prices: [
        { time: "2025-06-01T10:00:00Z", price: 695.10 },
        { time: "2025-06-01T11:00:00Z", price: 700.55 },
        { time: "2025-06-01T12:00:00Z", price: 705.30 },
        { time: "2025-06-01T13:00:00Z", price: 702.00 },
        { time: "2025-06-01T14:00:00Z", price: 704.10 },
        { time: "2025-06-01T15:00:00Z", price: 706.45 },
        { time: "2025-06-01T16:00:00Z", price: 709.00 },
      ],
    },
    AMZN: {
      symbol: "AMZN",
      name: "Amazon.com, Inc.",
      prices: [
        { time: "2025-06-01T10:00:00Z", price: 3420.50 },
        { time: "2025-06-01T11:00:00Z", price: 3435.60 },
        { time: "2025-06-01T12:00:00Z", price: 3448.10 },
        { time: "2025-06-01T13:00:00Z", price: 3440.80 },
        { time: "2025-06-01T14:00:00Z", price: 3450.00 },
        { time: "2025-06-01T15:00:00Z", price: 3455.30 },
        { time: "2025-06-01T16:00:00Z", price: 3462.75 },
      ],
    },
    GOOGL: {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      prices: [
        { time: "2025-06-01T10:00:00Z", price: 2535.25 },
        { time: "2025-06-01T11:00:00Z", price: 2540.10 },
        { time: "2025-06-01T12:00:00Z", price: 2548.00 },
        { time: "2025-06-01T13:00:00Z", price: 2545.75 },
        { time: "2025-06-01T14:00:00Z", price: 2550.50 },
        { time: "2025-06-01T15:00:00Z", price: 2555.20 },
        { time: "2025-06-01T16:00:00Z", price: 2560.00 },
      ],
    },
    NFLX: {
      symbol: "NFLX",
      name: "Netflix, Inc.",
      prices: [
        { time: "2025-06-01T10:00:00Z", price: 515.30 },
        { time: "2025-06-01T11:00:00Z", price: 518.50 },
        { time: "2025-06-01T12:00:00Z", price: 520.00 },
        { time: "2025-06-01T13:00:00Z", price: 519.00 },
        { time: "2025-06-01T14:00:00Z", price: 521.25 },
        { time: "2025-06-01T15:00:00Z", price: 523.00 },
        { time: "2025-06-01T16:00:00Z", price: 525.10 },
      ],
    },
  };

  return dummyData[symbol] || { symbol, name: "Unknown", prices: [] };
}

export function getAvailableStocks() {
  return [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "MSFT", name: "Microsoft Corp." },
    { symbol: "TSLA", name: "Tesla Inc." },
    { symbol: "AMZN", name: "Amazon.com, Inc." },
    { symbol: "GOOGL", name: "Alphabet Inc." },
    { symbol: "NFLX", name: "Netflix, Inc." },
  ];
}

