import React, { useContext } from 'react'
import './styles.css'
import { CoinsContext } from '../../context/CoinsContext'

function CoinsList() {
  const coinsContext = useContext(CoinsContext);
  const {filteredCoins} = coinsContext;
  
  return (
    <ul className='coins-list'>
        {filteredCoins.map(coin =>{
          return <li key={coin.uuid} className='coin-item'>
              <div>
                <img className="coin-item_logo" src={coin.iconUrl} alt={coin.name}/>
                <p style={{color: coin.color}}>{coin.name}/USD</p>
              </div>
              <div className="coin-item_price">
                <p style={{color: coin.color}}>{(+coin.price).toFixed(2)} USD </p>
                <p style={{color: coin.color}}>{(+coin.btcPrice).toFixed(2)} BTC </p>
              </div>
            </li>
        }
        )}
    </ul>
  )
}

export default CoinsList