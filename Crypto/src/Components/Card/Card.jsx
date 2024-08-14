import React from 'react'
import cl from './styles.module.css'
import { WithRuBalance } from '../../Helpers/Hoc/WithRuBalance'

function Card({balance, setBalance, ruBalance}) {
  console.log(ruBalance)
  return (
    <div className={cl.card}>
        <div className={cl.cardBlock}>
            <p>Crypto-Finance</p>
            <button  onClick={setBalance}>Add money</button>
        </div>
        <div className={cl.cardBlock}>
            <p>Ilya</p>
            <p>{balance} $</p>
        </div>
    </div>
  )
}

export default WithRuBalance(Card)