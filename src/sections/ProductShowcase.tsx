import Image from "next/image"
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"

export const ProductShowcase = () => {
  return <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="max-w-[540px] mx-auto">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>

        </div>

        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80]  text-transparent bg-clip-text mt-5">A more Effective way to track progress</h2>
        <p className="text-center text-[#22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          Effortlessly turn your ideas into a fully functional, responsive SaaS website in just a munite with this template
        </p>
      </div>
      <div className="relative">
        <Image src={pyramidImage} alt="pyramid image" className=" hidden md:block absolute -right-36 -top-32 " height={262} width={262} />
        <Image src={productImage} alt="product image - a picture showing a desktop screen of product " className="mt-10" />
        <Image src={tubeImage} alt="tube image" className="hidden md:block absolute bottom-24 -left-36 " height={248} width={248} />
      </div>

    </div>
  </section>;
};
