import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam rerum, tempore praesentium harum inventore dolorum excepturi ut. Eius iure quasi qui fugit laudantium ab praesentium nihil repudiandae obcaecati architecto.</p>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dicta autem praesentium qui eum aut a earum, corrupti libero voluptate voluptas exercitationem? Quis voluptas, tempora in esse incidunt laborum hic!</p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>VTEXXX</span>
          <span className='.copyright'>© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="imagen pagos" />
        </div>
      </div>
    </div>
  )
}

export default Footer