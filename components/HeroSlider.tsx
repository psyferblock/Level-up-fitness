'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-start pt-48 ">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] -mt-9">
            <motion.h1
              className="h1 text-center lg:text-left mb-2 font-anta"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              Where <span className="text-accent font-anta">Peak </span>
              effort meets success
            </motion.h1>
            <motion.p
              className="text-gray-200 font-semibold italic text-center lg:text-left mb-4"
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              Achieve results from our facility and a community ready to be
              engaged in realizing your goals.
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}>
            <CustomButton
              text="Get started"
              containerStyles="w-[196px] h-[62px] bg-accent rounded-full font-anta "
            />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-start pt-48 ">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] -mt-9">
            <h1 className="lg:text-8xl text-gray-200 text-center lg:text-left mb-2 font-anta sm:text-5xl">
              Our <span className="text-accent">Team </span>
              of expert <span className="text-accent">coaches</span> to guide
              and motivate to your <span className="text-accent">peak</span>{' '}
              potiental
            </h1>
            <p className="text-gray-200 italic font-semibold text-center lg:text-left mb-4">
              Our trainers are highly qualified and experienced with a wide
              range of clients. Our team is equipped and knowledgable in meeting
              your goals.
            </p>
            <CustomButton
              text="Learn More"
              containerStyles="w-[196px] h-[62px] bg-accent rounded-full font-anta "
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex sm:justify-end sm:py-9 sm:mr-50  lg:justify-end mr-60 mb-7 gap-2"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center
                 items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
