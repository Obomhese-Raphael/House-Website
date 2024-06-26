import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
        <div className='hero-container'>
            <div className="hero-text">
                <h1>Find your Future Home</h1>
                <p>Discover your dream home with HomeFinders, the ultimate platform for buying, selling, and leasing properties. Whether you're looking for a cozy apartment, a spacious family home, or a luxurious estate, we provide the tools and resources to make your real estate journey smooth and successful.</p>
            </div>
            <div className="search">
                <label className="label">Search the real estate you're looking for</label>
                <input type="text" placeholder= 'Location' autoComplete='location'/>
                <input type="text" placeholder= 'Type' />
                <input type="num" placeholder= 'Budget' />
                <button>Search now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
