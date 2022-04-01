import {useEffect, useState} from 'react'
import Image from "next/image";
import Grid from "../public/footer_grid.svg";
import { arraySocialMedia } from '../helpers';
// import LogoContact from "../public/logoContact.png";

const logoFileName = '/' +process.env.NEXT_PUBLIC_CONTACT_LOGO;
const footerImage = "/" + process.env.NEXT_PUBLIC_MAIN_IMAGE;

function Contact() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);

  useEffect(() => {

    const image = document.createElement("IMG");
    image.classList.add("w-full","h-full");
    image.src = footerImage;
    image.onload = () => {
      setHeight(image.height);
      setWidth(image.width);
      setIsLoadImage(true);
    }

  }, []);

  return (

    <section className='mt-[120px] pt-10 pb-40 max-w-[1440px] mx-auto w-full h-full lg:min-h-full relative overflow-hidden flex flex-col items-center bg-[#1A1A1A]'>

      <div className='w-max mx-auto h-full max-h-max mb-[132px]'>

        <Image
          src={logoFileName}
          width={107}
          height={40}
          alt={logoFileName}
        />

      </div>

      <div className="flex flex-col items-center text-white">

        <h2 className='text-[35px] font-black leading-[42px] text-center mb-6'>Yuccie ut brooklyn, duis wolf</h2>
        <p className='max-w-[658px] mb-[30px] text-center w-full text-lg font-medium leading-[25px]'>Blue bottle williamsburg farm-to-table cillum flexitarian. Pour-over cliche heirloom occupy semiotics ad photo booth kale chips.</p>

        <div className="w-full flex max-w-max mx-auto items-center space-x-9">

          { arraySocialMedia.map( (child,index) => {

            const {Icon,URL} = child;
            
            if(URL != ""){
              
              return(

                <a className="block" rel="noreferrer" target={"_blank"} href={URL} key={index}>
                  <Icon className="fill-secondary" />
                </a>
                
              )
            }

          })}

        </div>

      </div>

    </section>

  )

}

export default Contact