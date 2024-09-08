"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import Image from "next/image"
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import { useRef } from "react"

export const ProductShowcase = () => {

  const productShowcaseRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return <section ref={productShowcaseRef} className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>

        </div>

        <h2 className="section-title mt-5">A more Effective way to track progress</h2>
        <p className="section-description mt-5">
          Effortlessly turn your ideas into a fully functional, responsive SaaS website in just a munite with this template
        </p>
      </div>
      <div className="relative">
        <motion.img src={pyramidImage.src} alt="pyramid image" className=" hidden md:block absolute -right-36 -top-32 " height={262} width={262} style={{ translateY }} />
        <Image src={productImage} alt="product image - a picture showing a desktop screen of product " className="mt-10" />
        <motion.img src={tubeImage.src} alt="tube image" className="hidden md:block absolute bottom-24 -left-36 " height={248} width={248} style={{ translateY }} />
      </div>

    </div>
  </section>;
};
