import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='Featured'/>
      <FeaturedProducts type='Trending'/>
    </div>
  )
}

export default Home