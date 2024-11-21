import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook , FaTwitter ,FaLeaf, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-primary/10  py-12 mt-12'>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1, delay:0.5}}
        className="container flex justify-between items-center">

        <div className="text-2xl flex items-center gap-2 uppercase font-bold">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-600" />
          </div>

            <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
                <FaInstagram/>
                <FaTwitter/>
                <FaFacebook/>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer
