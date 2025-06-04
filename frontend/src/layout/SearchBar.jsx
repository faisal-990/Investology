import { useStock } from "@/Context/StockDataContext"; 
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchBar() {
  const { setSymbol, availableStocks } = useStock(); // Use availableStocks instead
   
  const onSymbolSelect = (value) => {
    console.log("Selected symbol:", value);
    setSymbol(value);
  };

  return (
    <Select onValueChange={onSymbolSelect} className="border border-slate-950 hover:border-red-900">
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Select a company" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {availableStocks.map((stock) => (
            <SelectItem key={stock.symbol} value={stock.symbol}>
              {stock.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
