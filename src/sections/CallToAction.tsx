"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import ArrowRight from '@/assets/arrow-right.svg';
import Image from 'next/image';
import springImage from '@/assets/spring.png';
import starimage from '@/assets/star.png';
import { useRef } from "react"

export const CallToAction = () => {
    const ctaRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ctaRef,
        offset: ["start end", "end start"]
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])


    return <section ref={ctaRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
        <div className="container">
            <div className="section-heading relative">
                <h2 className='section-title'>Sign up for free today</h2>
                <p className='section-description mt-5'>
                    Celebrate the joy of accomplishment with an app designed to track your progress and motivate your effots.
                </p>
                <motion.img src={starimage.src} alt="star image" width={360} className='absolute -left-[350px] -top-[137px]' style={{ translateY }} />
                <motion.img src={springImage.src} alt="sping image" width={360} className='absolute -right-[331px] -top-[19px]' style={{ translateY }} />
            </div>

            <div className='flex gap-2 mt-10 justify-center'>
                <button className='btn btn-primary'>get for free</button>
                <button className='btn btn-text gap-1'><span>Learn more</span><ArrowRight className="w-5 h-5" /></button>
            </div>
        </div>
    </section>;
};
