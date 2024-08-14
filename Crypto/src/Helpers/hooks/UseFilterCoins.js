import { useState, useEffect } from "react";

export const useFilterCoins = (setCoins, coins) =>{
    const [value,setValue] = useState('');

    useEffect (()=>{
        const filteredCoins = coins.filter(coin=>coin.name.toLowerCase().includes(value.toLowerCase()));
        setCoins(filteredCoins)
      },[value]);

     return {setValue, value} 
}