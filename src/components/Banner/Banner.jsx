import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
        <div className=" flex justify-center items-center">
          <motion.img
          initial={{opacity:0, scale:0.5}}
          whileInView={{opacity:1, scale:1}}
          transition={{type:"spring", stiffness:100,delay:0.2}}
            src={BannerPng}
            alt=""
            className="w-[300px] md:max-w-[400px] drop-shadow h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase "
            >
              {" "}
              Brand Info
            </motion.h1>
            <motion.p
                  variants={FadeUp(0.7)}
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
            <motion.p
                  variants={FadeUp(0.9)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
            >
              Discover the vibrant world of fresh fruits at Fresh Fruit Market!
              Our commitment to quality means you can enjoy a colorful variety
              of fruits, all packed with essential vitamins and nutrients. From
              tropical delights to classic favorites, we cater to all your
              fruity desires. Join us in celebrating health and flavor—order
              today and taste the difference that fresh makes!
            </motion.p>

            <motion.div
              variants={FadeUp(1.1)}
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
  );
};

export default Banner;
