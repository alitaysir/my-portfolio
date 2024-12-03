import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// bg-tertiary
// green-pink-gradient

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' bg-purple-1000 rounded-[20px] py-2 px-4 min-h-[250px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-35 h-35 '
        />

        {/* <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3> */}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
  
      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        An enthusiastic Computer Science student with strong skillset and passionate about coding. 
        Skilled in MERN stack and Next.js, I have developed full-stack projects showcased in my portfolio.
        Since I’m in the early stages of my career, my goal is to learn, acquire knowledge and grow as much as possible,
        where I can apply my skills while continuously learning from experienced professionals.
      </motion.p>
   */}
      <div className='mt-2 flex flex-col sm:flex-row sm:gap-10 justify-center items-center gap-10'>
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          // className='text-secondary text-[17px] sm:max-w-none max-w-3xl sm:w-auto w-full leading-[30px]'
          className='mt-2 text-secondary text-[17px] sm:text-[18px] max-w-3xl leading-[30px] sm:leading-[40px]'
        >
          {/* Optionally add any extra text or components here */}
          An enthusiastic Computer Science student with a strong skillset and a passion for coding. Skilled in the MERN stack and Next.js, I have developed full-stack projects showcased in my portfolio. Since I’m in the early stages of my career, my goal is to learn, acquire knowledge, and grow as much as possible, applying my skills while continuously learning from experienced professionals.
        </motion.p>
  
        {services.map((service, index) => (
          <div
            key={service.title}
            className='flex justify-center sm:w-auto w-full'
          >
            <ServiceCard key={service.title} index={index} {...service} />
          </div>
        ))}
      </div>
    </>
  );
  
  
};

export default SectionWrapper(About, "about");