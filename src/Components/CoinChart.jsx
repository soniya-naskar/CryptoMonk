import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from '../Hooks/BaseApi'
import { useParams } from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  //import Loader from './Loader';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function CoinChart() {
    const [chart,setchart] = useState([])
   // const [loading,setloading] = useState(true)
    const {id} = useParams()
    const [days,setdays] = useState(1)
    const getchart = async () =>{
        try{
            const {data} = await axios.get(`${Baseurl}/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
            //console.log(data)
            setchart(data.prices)
           // setloading(false)
        }catch(error){
            console.log(error)
           // setloading(false)
        }
    }
    useEffect(()=>{
        getchart()
    },[id,days])

    

    const myData = {
        labels: chart && Array.isArray(chart) && chart.map((value)=>{
         const date = new Date(value[0])
         const time = 
         date.getHours()> 12 
         ? `${date.getHours() -12} : ${date.getMinutes()} PM` 
         : `${date.getHours()} : ${date.getMinutes()} AM`
          return days===1 ? time : date.toLocaleDateString() 
        }), 
        datasets:[
            {
                label: ` Price in Past Days ${days} `,
                data: chart && Array.isArray(chart) && chart.map((value)=>value[1]),
                borderColor: 'orange',
                backgroundColor: 'black',
                borderWidth: 3 
            }
        ]
        
      }

  return (
    <div className='bg-black'>
    <Line data={myData} options={{
          elements:{
              point:{
                  radius:1, 
              }
          }
        }} className='bg-black mt-20 w-3/4' />

         <div className="mt-8">
               <button className={"text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"} onClick={()=>setdays(1)} >24 hours</button>
               <button className={'text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-oraorange600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800'} onClick={()=>setdays(30)}>1 Month</button>
               <button className={'text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800'} onClick={()=>setdays(365)}>1 Year</button>
             </div>
      </div>

  )
}

export default CoinChart