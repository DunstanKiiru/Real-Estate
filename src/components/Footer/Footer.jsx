import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/*left*/}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt=""  width={120}/>
            </div>
        </div>
    </section>
  )
}

export default Footer