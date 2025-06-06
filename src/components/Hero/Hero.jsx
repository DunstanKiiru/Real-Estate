import React from 'react'
import  "./Hero.css"
import {HiLocationMarker} from  'react-icons/hi'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*left*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br />
              Most Suitable
              <br />
              Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              {" "}
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={10000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">premium products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={2000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/*right*/}

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="heroimage" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero