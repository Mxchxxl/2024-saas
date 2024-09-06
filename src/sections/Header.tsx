import ArrowRight from "@/assets/arrow-right.svg"
import Image from "next/image";
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-centered py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflowand boost your productivity</p>
        <div className="inline-flex gap-1 items-center">

          <p>Get started for free</p>
          <ArrowRight className=" h-4 w-4 inline-flex justify-center items-center " />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="site logo" width={40} height={40} />
            <MenuIcon className=" h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">about</a>
              <a href="">features</a>
              <a href="">customers</a>
              <a href="">updates</a>
              <a href="">help</a>

              <button className="btn btn-primary">get for free</button>
            </nav>
          </div>

        </div>

      </div>
    </header>
  )
};
