import React from 'react'
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <div>
      <div className="container">
        <h2> Satisfied Customers</h2>
        <h2 className='render'>Testimonials</h2>
        <div className="row">
                <div className="col-1">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" className="buy" />
                    <h2>John Doe</h2>
                    <p className='desc'>Living here feels like leveling up in life. The neighborhood vibes and cozy setup make it the ideal spot for anyone looking to kickstart their journey.</p>
                </div>

                
                <div className="col-1">
                    <img src="https://i.pinimg.com/564x/6c/8d/35/6c8d355403264c71bc1acfac8c73262b.jpg" className="sell" />
                    <h2>Brain Cooper</h2>
                    <p className='desc'>Finding this house was a game-changer. Its location and charm exceeded our hopes. Highly recommend for anyone looking to buy, lease, or rent.</p>
                    
                </div>

                <div className="col-1">
                    <img src="https://img.freepik.com/free-photo/horizontal-view-attractive-young-black-man-with-toothy-smile-shows-okay-gesture-says-alright-likes-somebodys-idea_273609-23585.jpg?t=st=1714736660~exp=1714740260~hmac=7778d292bc79f8a31498031a406a4b3aab1f9354e0a7f699e07ce5ba097b5957&w=826" className="buy" />
                    <h2>Marshall Peters</h2>
                    <p className='desc'>This house exceeded our expectations. The spacious layout and modern amenities make it a perfect fit for our family's needs.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Testimonials
