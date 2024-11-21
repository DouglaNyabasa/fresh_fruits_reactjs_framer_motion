import React from 'react'
import { motion } from "framer-motion";

import BannerPng from "../../assets/banner-bg.jpg";
import {  FadeLeft } from "../../utility/animation";



const bgStyle = {
     backgroundImage: `url(${BannerPng})`,
     backgroundPosition: "center",
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
};


const Banner3 = () => {
  return (
    <section className='container mb-12'>
    <div
    style={bgStyle}
    className="container rounded-3xl grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
      <div className="">

      </div>

      <div className="flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
          <motion.h1
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold uppercase "
          >
            {" "}
            Get Fresh Fruits Today
          </motion.h1>
          <motion.p
                variants={FadeLeft(0.7)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                >

            At Fresh Fruit Market, we believe in the power of nature's bounty!
            Our selection of hand-picked, organic fruits is sourced directly
            from local farms, ensuring that you receive only the freshest and
            most flavorful options. Whether you’re craving juicy strawberries
            or crisp apples, our seasonal offerings are perfect for your daily
            snacking or special events. Experience the taste of freshness with
            every bite!
          </motion.p>


          <motion.div
            variants={FadeLeft(0.9)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn ">Learn More</button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner3
