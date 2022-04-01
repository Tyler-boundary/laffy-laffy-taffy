import {useEffect, useState} from "react";
import Image from "next/image";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const imageDesktop = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE_DESKTOP) ?? "";
const imageMobile = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE_MOBILE) ?? "";
const cta_text = process.env.NEXT_PUBLIC_HERO_CTA_TEXT ?? "";
const cta_link = process.env.NEXT_PUBLIC_HERO_CTA_LINK ?? "/";


const Hero = () => {

  const [desktopImage,setDesktopImage] = useState(typeof window !== "undefined" ? window.innerWidth > 768 ? true : false : false);
  const [currentImage, setCurrentImage] = useState(imageDesktop);

  useEffect(() => {

    if(typeof window !== "undefined"){

      if(window.innerWidth > 768){
        setCurrentImage(imageDesktop)
      }else{
        setCurrentImage(imageMobile)
      }

      function handleResizeEvent(){

        if(window.innerWidth > 768){
          setDesktopImage(true);
        }else{
          setDesktopImage(false);
        }
  
      }
      
      window.addEventListener("resize", handleResizeEvent);
      return window.removeEventListener("resize",handleResizeEvent,true);

    }

  }, []);

  useEffect(() => {

    if(desktopImage){
      setCurrentImage(imageDesktop)
    }else{
      setCurrentImage(imageMobile)
    }

  }, [desktopImage]);

  return (
    <>

      <section className="h-[530px] w-full mx-auto flex flex-col justify-center items-center max-w-[2500px] relative">

        <div className="absolute inset-0 w-full h-full max-h-full">
    
          <div className="relative w-full h-full max-h-full">

            <Image
              src={currentImage}
              alt={currentImage.replace("/","")}
              className="object-cover min-h-full"
              layout="fill"
              quality={100}
              priority={true}
            />

          </div>

        </div>

        <div className="absolute inset-0 w-full h-full items-center flex flex-col justify-center ">
            <h1 className="max-w-[673px px-1 md:px-0 w-full text-5xl md:text-[51px] text-secondary font-black text-center mb-9">
              {title}
            </h1>
            <a href={cta_link} className="py-2.5 buttonShape px-5 bg-primary text-secondary text-[11px] font-medium text- leading-[10px]">
              {cta_text}
            </a>
        </div>

      </section>

    </>
  );
};

export default Hero;
