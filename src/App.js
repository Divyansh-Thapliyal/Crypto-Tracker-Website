
import {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';

 const api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en';

function App() {

  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState('');

  useEffect(()=>{

     axios.get(api).then((res)=>{
      console.log(res.data);
      setCoins(res.data);
     }).catch((err)=>{console.log(err)});

  },[]);

  const handleSearch=(event)=>
  {
    setSearch(event.target.value);
  }

   const filteredCoins=coins.filter((coin)=>{return coin.name.toLowerCase().includes(search.toLowerCase())});


  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a CryptoCurrency.</h1>
        <form>
          <input type="text" placeholder='Search' className='coin-input' onChange={handleSearch}/>
        </form>
      </div>
        {filteredCoins.length>0 && filteredCoins.map((coin)=>{return <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume}></Coin>})}
    </div>
  );
}

export default App;
