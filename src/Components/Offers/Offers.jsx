import React from 'react'
import "./Offers.css"
import buy from "../../assets/real-estate-buy.webp"
import sell from "../../assets/real-estate-sell.webp"
import rent from "../../assets/real-estate-rent.webp"

const Offers = () => {
  return (
    <div>
        <h1 className='offer'>Deal with us</h1>
        <p className='render'>What we render</p>
      <div className="container">
        <div className="mini-container">
            <div className="row">
                <div className="col-1">
                    <img src={buy} className="buy" />
                    <h2>Buy a home</h2>
                    <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                    <button>Browse Home</button>
                </div>

                
                <div className="col-1">
                    <img src={sell} className="sell" />
                    <h2>Sell a home</h2>
                    <p>No matter what path you take to sell your home, we can help you navigate a successful sale that you'll love.</p>
                    <button>See your options</button>
                </div>

                <div className="col-1">
                    <img src={rent} className="buy" />
                    <h2>Rent a home</h2>
                    <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                    <button>See Rentals</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
