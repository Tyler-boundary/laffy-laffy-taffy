import {useEffect, useState} from 'react'
import Image from "next/image";
import Grid from "../public/footer_grid.svg";
import { arraySocialMedia } from '../helpers';
// import LogoContact from "../public/logoContact.png";

const logoFileName = '/' +process.env.NEXT_PUBLIC_CONTACT_LOGO;
const footerImage = "/" + process.env.NEXT_PUBLIC_MAIN_IMAGE;
const title = process.env.NEXT_PUBLIC_CONTACT_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_CONTACT_DESCRIPTION ?? "";

function Contact() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);

  useEffect(() => {

    if(footerImage != "/undefined"){
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = footerImage;
      image.onload = () => {
        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);
      }
    }

  }, []);

  return (

    <section className='pt-10 pb-40 mx-auto w-full h-full lg:min-h-full relative overflow-hidden flex flex-col items-center bg_contact_footer '>

      <div className="max-w-[1440px] w-full h-full mx-auto flex flex-col items-center">

        <div className='w-max mx-auto h-full max-h-max mb-[125px]'>

          <Image
            src={logoFileName}
            width={107}
            height={40}
            alt={logoFileName}
          />

        </div>

        <div className="flex flex-col items-center text-standardO">

          <h2 className='text-[35px] font-black leading-[42px] text-center mb-[22px]'>
            {title}
          </h2>

          <p className='max-w-[658px] mb-[25px] text-center w-full text-lg font-medium leading-[25px]'>
            {description}
          </p>

          <div className="w-full flex max-w-max mx-auto items-center space-x-9">

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