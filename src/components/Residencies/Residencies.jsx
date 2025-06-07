import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart ">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <div className="r-price">
                  <span style={{ color: "orange", fontWeight: "bold", fontSize: "0.9rem" }}>$</span>
                  <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{card.price}</span>
                </div>

                <span className="primaryText r-name">{card.name}</span>
                <span className="secondaryText r-detail">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Residencies