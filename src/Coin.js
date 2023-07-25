import React from 'react';
import './Coin.css';

const Coin = (props) => {
    if(props.length==0) return ;
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={props.image} alt='crypto' />
          <h1>{props.name}</h1>
          <p className='coin-symbol'>{props.symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>INR {props.price}</p>
          <p className='coin-volume'>INR {props.volume}</p>

          {props.priceChange < 0 ? (
            <p className='coin-percent red'>{props.priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{props.priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: INR {props.marketcap}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
