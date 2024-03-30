import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from '../Hooks/BaseApi'
import { useParams } from 'react-router-dom'
import { currencyFormat } from '../utils'
import { TrendingDown, TrendingUp } from '../Icons'
import CoinChart from './CoinChart'

function CoinDetail() {
  const [detail, setdetail] = useState([])
  const [loading, setloading] = useState(true)
  const { id } = useParams()
  const price = detail.market_data && detail.market_data.current_price && detail.market_data.current_price.usd;

  const getDetail = async () => {
    try {
      const { data } = await axios.get(`${Baseurl}/coins/${id}`)
      console.log(data)
      setdetail(data)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  useEffect(() => {
    getDetail()
  }, [id])
  return (
    <>
    
      <div className='w-full  bg-black' >
        <div className=' pl-2 my-4'>

          <div className="font-bold text-orange-500">
            {detail.last_updated}
          </div>
          <div className="">
            {detail.image && detail.image.large && (
    <img src={detail.image.large} alt={detail.name} />
  )}
          </div>
          <div className="text-2xl mt-2 capitalize font-bold text-orange-500">
            {detail.name}
          </div>
          <div className="text-orange-500">
          {price && (
        <p className='font-bold text-xl'>Price: ${price}</p>
      )}
          </div>
          <div className= {`flex gap-1 ${detail.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
      {detail.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
      {detail.market_data && detail.market_data.price_change_percentage_24h}
            
          </div>
  
          <div className='text-orange-500'>

            <h2>Trending #{detail.market_cap_rank}</h2>
          </div>
          <div className='mt-6 w-80'>
            <p className=' text-yellow-800 font-semibold [&>a]:text-blue-600 [&>a]:underline'  dangerouslySetInnerHTML={{__html:detail.description && detail.description.en } }></p>
          </div>
        </div>
        <CoinChart />
        </div>
        </>
      
      )
}

export default CoinDetail;