import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
const logoFileName = '/' +process.env.NEXT_PUBLIC_NAVBAR_LOGO;


const Navbar = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);
  useEffect(() => {

    if(logoFileName != "/undefined"){
      
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = logoFileName;
      image.onload = () => {
        setHeight(image.height*.50);
        setWidth(image.width*.50);
        setIsLoadImage(true);
      }
      
    }

  }, []);

  return (

    <nav className="sticky top-0 z-40 bg-[#8461d7] w-full flex flex-col justify-center items-center py-3 md:py-5">

      <div className="max-w-[1960px] w-full flex items-center justify-end">

        {/* <div className="max-w-max space-x-[51px] md:space-x-0 md:max-w-[431px] lg:max-w-[700px] w-full flex items-center justify-between"> */}
        <div className="w-full flex items-center">

        {/* <style jsx>{`

          .max-w-navBar {
            max-width: calc(50% +${width/2}px);
          }

          .w-navBar{
            width: calc(50vw +${width/2}px );
          }

          @media(min-width: 768px){
            .w-navBar{
              width: calc(50vw +${width/2}px);
            }
          }

          @media(min-width: 1024px){
            .w-navBar{
              width: calc(50vw +${width/2}px);
            }
          }

        `}</style> */}

        {/* <div className="w-[calc(50vw+152px-16px)] md:w-[calc(50vw+152px-40px)] lg:w-[calc(50vw+152px-80px)] max-w-[calc(50%+150px)] flex items-center justify-between ml-auto"> */}

          <div className="w-full flex items-center justify-center">

            <a 
              className="block max-w-[60%] w-max sm:max-w-full" 
              style={ {width: width} }
              target="_blank"
              rel="noopener noreferrer"
              href={process.env.NEXT_PUBLIC_NAVBAR_LOGO_LINK}
            >

              {

                isLoadImage && (

                  <Image
                    src={logoFileName}
                    alt={logoFileName.replace("/","")}
                    width={width}
                    height={height}                
                    layout="responsive"
                    quality={100}
                  />
                )

              }

            </a>

              {/* <a 
              target="_blank"
              rel="noopener noreferrer"
              href={process.env.NEXT_PUBLIC_NAVBAR_WALLET_LINK} 
              className=" py-[9.5px] px-[19px] md:px-[62.5px] leading-[13px] bg-primary md:py-[13.5px] text-center text-secondary buttonShape text-[12px] font-body"
              >
              {process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT}
              </a> */}
          </div>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;
