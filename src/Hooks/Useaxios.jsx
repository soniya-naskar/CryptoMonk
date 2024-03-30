import React, { useEffect, useState } from 'react'
import axios from "axios"
function Useaxios(param) {
const [response,setresponse] = useState([])
const [loading,setloading] = useState(false)
const [error,seterror] = useState('')

axios.defaults.baseURL = "https://api.coingecko.com/api/v3"

const fetchdata = async (param)=>{
    try{
      const result = await axios(param)
      setresponse(result.data)
      //console.log(setresponse)
    }catch(err){
       seterror(err)
    }finally{
        setloading(false)
    }
}

useEffect(()=>{
    fetchdata(param)
},[])

  return (
    response,loading,error
  )
}

export default Useaxios