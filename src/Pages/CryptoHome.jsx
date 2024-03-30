import React from 'react'
import Trending from '../Components/Trending'
import Market from '../Components/Market'

function CryptoHome() {
  return (
    <div className='wrapper-container'>
      <Trending />
      <Market />
    </div>
  )
}

export default CryptoHome