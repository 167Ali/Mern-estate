import React from 'react';
import { motion } from 'framer-motion';
import ceoImage from '../assets/PHOTO-2022-05-03-08-49-00.jpg';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="mt-10">
      <div className="px-4 max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-6xl font-semi-bold mb-6 text-slate-800"
            variants={itemVariants}
          >
            About
            <div className="text-2xl mt-2">
              <span className="text-red-500">5 </span>Brothers
            </div>
          </motion.h1>
          <motion.p className="mb-6 text-slate-700 text-lg" variants={itemVariants}>
            It is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
          </motion.p>
          <motion.p className="mb-6 text-slate-700 text-lg" variants={itemVariants}>
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </motion.p>
          <motion.p className="mb-6 text-slate-700 text-lg" variants={itemVariants}>
            Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
          </motion.p>
          <motion.div className="my-10" variants={itemVariants}>
            <img
              src={ceoImage}
              alt="CEO"
              className="rounded-full mx-auto w-48 h-48 object-cover"
            />
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">Meet Our CEO</h2>
            <p className="text-slate-700 text-lg mb-6">
              Ch.Hamza is the visionary behind 5 Brothers. With over 7 years of experience in the real estate industry, Mr.Hamza has a passion for helping clients find their dream homes. His dedication to excellence and customer satisfaction has made 5 Brothers a trusted name in real estate.
            </p>
          </motion.div>
          <div className='mb-6'>
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-slate-800 mb-2">Contact Us</h2>
            <p className="text-slate-700 text-lg mb-4">
              For inquiries or to schedule a consultation, reach out to us:
            </p>
            <p className="text-slate-700 text-lg">
              Phone: (+92) 300 0084269
              <br />
              Email: info@5brothersrealestate.com
            </p>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
