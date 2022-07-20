import {useEffect, useState} from 'react'
import Image from "next/image";
import Grid from "../public/footer_grid.svg";
import { arraySocialMedia } from '../helpers';
// import LogoContact from "../public/logoContact.png";

const logoFileName = '/' +process.env.NEXT_PUBLIC_NAVBAR_LOGO;
const footerImage = "/" + process.env.NEXT_PUBLIC_MAIN_IMAGE;
const title = process.env.NEXT_PUBLIC_FOOTER_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_FOOTER_BODY ?? "";

function Contact() {

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

    <section className='pt-10 md:pt-8 lg:pt-10 pb-[96px] md:pb-[64px] lg:pb-[98.5px] mx-auto w-full h-full lg:min-h-full relative overflow-hidden flex flex-col items-center bg_contact_footer '>

      <div className="max-w-[1960px] px-4 md:px-10 lg:px-20 w-full h-full mx-auto flex flex-col items-center">

        <div className='h-full max-h-max max-w-[146.3px] mb-[96px] md:mb-[60px] lg:mb-[97px]'>

          {

            isLoadImage && (
              <Image
              src={logoFileName}
              alt={logoFileName.replace("/","")}
              width={width}
              height={height}
              className="invert"
              />
            )

          }

        </div>

        <div className="flex flex-col items-center text-standardO">

          <h2 className='text-[32px] font-headline leading-[32px] text-center mb-12'>
            What do you call a really funny NFT?
            <br/><br/>
            An NFHehehehe
          </h2>

          <a target="_blank" href="https://www.laffytaffy.com/nft-terms-of-use" rel="noopener noreferrer" className='max-w-[568px] text-base mb-12 text-center w-full font-body leading-[25px]'>
            {description}
          </a>

          <div className="w-full flex max-w-max mx-auto items-center space-x-4 md:space-x-8">

            { arraySocialMedia.map( (child,index) => {

              const {Icon,URL} = child;
              if(URL != ""){
                
                return(

                  <a className="block" rel="noreferrer" target={"_blank"} href={URL} key={index}>
                    <Icon className="fill-standardO" />
                  </a>
                  
                )
              }

            })}

          </div>

        </div>
        
      </div>

    </section>

  )

}

export default Contact