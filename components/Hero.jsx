import {useEffect, useState} from "react";
import Image from "next/image";


const title = process.env.NEXT_PUBLIC_HERO_SECTION_HEADLINE ?? "";
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

  function scrollToTargetAdjusted(){

    if (!cta_link) {

      const element = document.getElementById('featuredProduct');
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });      

      return;
    }

    window.location.href = cta_link

  }

  return (
    <>

      {/* <section className="h-[368px] md:h-[500px] lg:h-[560px] w-full mx-auto flex flex-col justify-center items-center max-w-[2500px] relative"> */}
      <section className="h-[calc(95vh-94.35px)] w-full mx-auto flex flex-col justify-center items-center max-w-[6000px] relative">

        <div className="absolute inset-0 w-full h-full max-h-full">
    
          <div className="relative w-full h-full max-h-full">
            {process.env.NEXT_PUBLIC_HERO_VIDEO ? (

              <video loop muted playsInline autoPlay  className="object-cover !w-full h-full" >

                <source src={process.env.NEXT_PUBLIC_HERO_VIDEO} />
                <source src={process.env.NEXT_PUBLIC_HERO_VIDEO} />
                <p>Your browser Dont support videos</p>
                
              </video>
                          
            ) : (
              <Image
              src={currentImage}
              alt={currentImage.replace("/","")}
              className="object-cover object-bottom min-h-full"
              layout="fill"
              quality={100}
              priority={true}
            />
            )}

          </div>

        </div>

        <div className="absolute inset-0 w-full h-full items-center flex flex-col justify-center md:justify-start">

            <h1 className="max-w-[480px] md:max-w-[560px] lg:max-w-[955px] px-1 md:px-0 w-full text-[47.52px]  leading-[52px] md:text-[79.2px] md:leading-[60px] lg:text-[84.48px] lg:leading-[64px] text-[#5229D1] font-headline text-center mb-6 md:mb-10 md:pt-[120px]">
              GRAB A LAFFY TAFFY NTF!
              <br />
              <span className="text-[39.6px] md:text-[62.04px]">
                Minting is now open (and free)
              </span>
              
            </h1>
            
            <a 
              href={cta_link}
              className="px-[37.5px] leading-[14px] py-[13px] text-center text-secondary bg-[#8461D7] rounded-[4px] text-[18px] tracking-[.04em] font-light"
              onClick = {e => {e.preventDefault(); scrollToTargetAdjusted()}}
            >
              CLAIM MY NFT!
            </a>

        </div>

      </section>

    </>
  );
};

export default Hero;
