import React, { useContext} from 'react'
import './styles.css'
import { CoinsContext } from '../../context/CoinsContext';
import { useFilterCoins } from '../../Helpers/hooks/UseFilterCoins';

function FilterBlock({ setCoins }) {
  const coinsContext = useContext(CoinsContext);
  const {coins} = coinsContext;

  const {setValue, value } = useFilterCoins(setCoins, coins);

  console.log('---render filter')


  return (
    <div className='filter-block'>
      <input 
        value={value} 
        onChange={(e)=>setValue(e.target.value)} 
        type="text" className='input' 
        placeholder='bitcoin'/>
    </div>
  )
}

export default React.memo(FilterBlock);