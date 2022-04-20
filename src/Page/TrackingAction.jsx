import React from 'react'
import '../styles/App.css'
import axios from 'axios'
import Coin from '../Components/Coin'
import { useState, useEffect } from 'react'
import Nav from '../Components/Nav'
import { BsSearch } from 'react-icons/bs'



function TrackingAction() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )



  return (
    <div className="TrackingAction">
      <div className="nav-ttete">
        <Nav />
        <div className="coin-search">
          <h1 className='input-text'>Search a crypto...</h1>
          <form className='input-form'>
            <input type="text" placeholder='Search' className="coin-input" onChange={handleChange} />
            <button className='icon'><BsSearch className='search-icon' /></button>
          </form>
        </div>
      </div>
      <div className="table-coin">
        <div className="name">
          <h1>Name</h1>
        </div>
        <div className="price">
          <h1>Price</h1>
        </div>
        <div className="volume">
          <h1>Volume</h1>
        </div>
        <div className="porcentage">
          <h1>Porcentage</h1>
        </div>

      </div>
      {filteredCoins.map(coin => {
        return (
          <div>
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          </div>
        )
      })}
    </div>
  )
}

export default TrackingAction
