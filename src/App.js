
import {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

 const api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en';

function App() {

  const [coins,setCoins]=useState([]);

  useEffect(()=>{

     axios.get(api).then((res)=>{
      console.log(res.data);
      setCoins(res.data);
     }).catch((err)=>{console.log(err)});

  },[]);



  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a CryptoCurrency.</h1>
        <form>
          <input type="text" placeholder='Search' className='coin-input'/>
        </form>
      </div>
    </div>
  );
}

export default App;
