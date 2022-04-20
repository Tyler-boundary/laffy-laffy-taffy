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
        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);
      }
      
    }

  }, []);

  return (

    <nav className="fixed top-0 z-40 bg-NavBar w-full flex flex-col justify-center items-center py-6 md:py-10">

      <div className="max-w-[1440px] w-full px-4 md:px-10 lg:px-20 flex items-center justify-end">

        <div className="max-w-max space-x-[51px] md:space-x-0 md:max-w-[431px] lg:max-w-[700px] w-full flex items-center justify-between">

          <div className="min-h-[36px] max-h-[40px] h-max w-max">

            {

              isLoadImage && (
                <Image
                src={logoFileName}
                alt={logoFileName.replace("/","")}
                width={width}
                height={height}
                />
              )

            }

          </div>

          <a 
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT} 
            className=" py-[9.5px] px-[19px] md:px-[62.5px] leading-[13px] bg-primary md:py-[13.5px] text-center uppercase text-secondary buttonShape text-[12px] font-medium"
          >
            {process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT}
          </a>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;
