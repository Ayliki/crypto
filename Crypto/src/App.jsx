import { useCallback, useEffect, useState } from "react"
import Header from "./Components/Header/Header"
import Main from "./Pages/Main/Main"
import { getCoins } from "./API/Api"
import { CoinsContext } from "./context/CoinsContext";

function App() {
  const [balance, setBalance] = useState(50000);
  const [coins,setCoins] = useState([]);
  const [filteredCoins,setFilteredCoins] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      const data = await getCoins();
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData()
  },[]);

  const addBalance = useCallback(()=>{
    setBalance(prev=>prev+1000)
  },[])
  return (
    <>
      <CoinsContext.Provider value={{coins, filteredCoins}}>
        <Header/>
        <Main setCoins={setFilteredCoins} coins={coins} balance={balance} setBalance={addBalance} filteredCoins={filteredCoins}/>
        </CoinsContext.Provider>
    </>
  )
}

export default App
