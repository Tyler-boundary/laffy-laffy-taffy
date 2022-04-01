import Image from "next/image";
import Marquee from "./Marquee";
import HeroGrid from "../public/hero_grid.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const image = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE) ?? "";

const Hero = () => {
  return (
    <>

      <section className="h-[530px] w-full flex flex-col justify-center items-center max-w-[1440px] relative">

        <div className="absolute inset-0 w-full h-full max-h-full">
          <div className="relative w-full h-full max-h-full">
            <Image
              src={"/hero_image_3.png"}
              alt={"/hero_image_3.png"}
              className="object-cover min-h-full"
              layout="fill"
              quality={100}
              priority={true}
            />
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full items-center flex flex-col justify-center ">
            <h1 className="max-w-[673px px-1 md:px-0 w-full text-5xl md:text-[51px] text-secondary font-black text-center mb-9">Exclusive NFTs of your favorite athletes</h1>
            <a className="py-2.5 buttonShape px-5 bg-primary text-secondary text-[11px] font-medium text- leading-[10px]" href="">
              Explore ↓ 
            </a>
        </div>

      </section>

    </>
  );
};

export default Hero;
