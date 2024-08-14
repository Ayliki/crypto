import axios from 'axios'

const url = import.meta.env.VITE_URL_API
const key = import.meta.env.VITE_KEY_API

export const getCoins = async () =>{
    const options={
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'coinranking81b92dce5e8efa35419cadd16b54d760fca6eef081bb3f36',
          },
    };

    try{
        const response = await axios.get('https://api.coinranking.com/v2/coins', options);
        return response.data.data;
    }catch(error){
        console.log(error) 
    }
}