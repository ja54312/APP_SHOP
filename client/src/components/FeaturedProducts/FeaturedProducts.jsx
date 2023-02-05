import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import './FeaturedProducts.css'

const FeaturedProducts = ({type}) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
      );

      console.log(data)

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h2>{type} Products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa alias sit tempore voluptates veritatis illum natus minima nobis ut non, modi sequi dolore corrupti incidunt perspiciatis autem soluta aperiam suscipit!</p>
        </div>
        <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    </div>
  )
}

export default FeaturedProducts