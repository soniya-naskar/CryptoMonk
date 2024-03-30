import React from 'react'
import {currencyFormat} from "../utils"
// eslint-disable-next-line no-unused-vars
import Market from './Market'
import { TrendingDown, TrendingUp } from '../Icons'
import {Link} from "react-router-dom"

function Coin({coins}) {
    console.log(coins)
  return (
    <>
     <Link to={`/coin/${coins.id}`}>
    <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
    <div className="flex items-center gap-1 w-full">
    <img className="w-6" src={coins.image} alt={coins.name} />
      <p>{coins.name}</p>
      <span className="text-xs">({coins.symbol})</span>
    </div>
    <span className="w-full text-center">{currencyFormat(coins.current_price)}</span>
    <span className={`flex gap-1 ${coins.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
      {coins.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
      {coins.price_change_percentage_24h}
    </span>
    <div className="hidden sm:block">
      <p className="font-semibold">Market Cap</p>
      <span>{currencyFormat(coins.market_cap)}</span>
    </div>
  </div>
  </Link>
  </>
  )
}

export default Coin