import Image from "next/image";
import Marquee from "./Marquee";
import HeroGrid from "../public/hero_grid.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const image = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE) ?? "";

const Hero = () => {
  return (
    <>

      <section className="h-[681px] w-full flex flex-col justify-center items-center">
        <h2 className="text-7xl">Hero</h2>
      </section>

    </>
  );
};

export default Hero;
