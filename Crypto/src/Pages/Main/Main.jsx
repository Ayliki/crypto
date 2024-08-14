import React, { useMemo } from 'react'
import cl from './styles.module.css'
import Card from '../../Components/Card/Card'
import CoinsList from '../../Components/CoinsList/CoinsList'
import FilterBlock from '../../Components/Filter/FilterBlock'

function Main({setBalance, balance, coins, filteredCoins, setCoins}) {
  
  return (
    <main className={cl.main}>
        <Card balance={balance} setBalance={setBalance}/>
        <FilterBlock setCoins={setCoins}/>
        { coins.length > 0 ?<CoinsList/> :<div>Loading...</div>}
    </main>
  )
}

export default Main