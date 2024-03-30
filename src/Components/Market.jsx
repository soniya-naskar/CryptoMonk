import React, { useEffect, useState } from 'react'
//import Useaxios from '../Hooks/Useaxios'
import axios from 'axios'
import { Baseurl } from '../Hooks/BaseApi'
import Coin from './Coin'

function Market() {
  //  const response = axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    //console.log(response)
    const[market,setmarket] = useState([])
    const[loading, setloading] = useState(true)

    const  fetchmarket = async()=>{
      try{
        const {data} = await axios.get(`${Baseurl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
        console.log(data)
        setmarket(data)
        setloading(false)
      }catch(error){
        console.log(error)
        setloading(false)
      }
    }
    useEffect(()=>{
      fetchmarket()
    },[])

  return (
    <div className='mt-8'>
    <h1 className='text-2xl mb-2 '>Market</h1>  
    {market && market?.map(coins =><Coin key={coins.id} coins={coins} />)}
     </div>
  )
}

export default Market