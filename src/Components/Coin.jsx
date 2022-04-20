import React from 'react'
import '../styles/Coin.css'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {

  const type = {
    name: String,
    image: Image,
  }


  return (
    <div className='coin-container'>
      <div className="coin-row">
        <div className="coin">
          <img className='image-coin' src={image} alt="crypto" />
          <h1 className='name'>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
          {/* <div className="coin-data"> */}
          <p className='coin-price'>${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
          <p className="coin-marketcap">
            Market Cap : ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin