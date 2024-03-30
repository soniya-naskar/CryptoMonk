import React, { useEffect, useState } from 'react'

import Trendingcoin from './Trendingcoin'
import { Baseurl } from '../Hooks/BaseApi'
import axios, { Axios } from 'axios'

function Trending() {
//const {response} = Useaxios('search/trending')
//console.log(response)

const [loading, setloading] = useState(true)

const [trending,setrending] = useState([])

 const fetchdata = async()=>{
  try{
     const {data} = await axios.get(`${Baseurl}/search/trending`)
     console.log(data)
     setrending(data)
     setloading(false)
  } catch (error){
     console.log(error)
     setloading(false)
  }
 } 

useEffect(()=>{
  fetchdata()
},[])


  return (
    <div className='mt-8'>
        <h1 className='text-2xl mb-2'>Trending</h1>    
          {trending && trending.coins?.map(coin => <Trendingcoin key={coin.item.coin_id} coin={coin.item} />)}

    </div> 

    
  )
}

export default Trending