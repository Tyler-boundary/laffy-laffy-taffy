import React from 'react'
import { CustomClaimViewer } from './CustomClaimViewer';
import CustomProductViewer from './CustomProductViewer';

const topText = process.env.NEXT_PUBLIC_HERO_SECTION_BODY ?? "";
const headline = process.env.NEXT_PUBLIC_MIDSECTION_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_MIDSECTION_DESCRIPTION ?? "";

function Main({image}) {
  
  return (

    <section className='w-full pb-10 lg:pb-0 max-w-[1960px] px-4 md:px-10 lg:px-20 mx-auto h-full flex flex-col justify-center items-center pt-[3rem] md:pt-[120px]'>

      <div className='w-full justify-center items-center mb-[3rem] md:mb-[120px] flex flex-col space-y-6 md:space-y-12 max-w-max  md:max-w-[652px] mx-auto'>
        
        <div className="flex flex-col space-y-4 md:space-y-8 w-full">

          <h2 className="text-[18px] md:text-[34px] w-full uppercase text-start text-[#4E1DD0] font-body md:font-semibold leading-[16.8px] md:leading-[23.04px]">
            1. &nbsp; &nbsp;Connect your wallet
          </h2>

          <h3 className='text- md:text-[36px] text-start font-body md:font-light leading-[18px] md:leading-[38.4px]'>
            Retired joke NFTs drop 7/20! Connect <br></br> your wallet and explore the site so you&apos;re  ready to mint yours. First come, first served.
          </h3>

        </div>

        <div className="flex flex-col space-y-4 md:space-y-10 w-full">

          <h2 className="text-[18px] md:text-[34px] w-full uppercase text-start text-[#4E1DD0] font-body md:font-semibold leading-[16.8px] md:leading-[23.04px]">
            2. &nbsp; &nbsp;Get Your nft
          </h2>

          <h3 className='text- md:text-[36px] lowercase text-start font-body md:font-light  leading-[18px] md:leading-[38.4px]'>
            Check out our collection of 120 NFTs <br></br> featuring classic jokes, and claim your favorite! <br></br> All are free to mint.
          </h3>

        </div>

        <div className="flex flex-col space-y-4 md:space-y-10 w-full">

          <h2 className="text-[18px] md:text-[34px] w-full uppercase text-start text-[#4E1DD0] font-body md:font-semibold leading-[16.8px] md:leading-[23.04px]">
            3. &nbsp; &nbsp;Laff
          </h2>

          <h3 className='text- md:text-[36px] text-start font-body md:font-light  leading-[18px] md:leading-[38.4px]'>
            Congrats! You got a piece of Laff history.
          </h3>

        </div>

      </div>

      <div className="flex flex-col space-y-10 lg:space-y-0 lg:space-x-5 xl:space-x-0 lg:flex-row md:items-start justify-between w-full max-w-[1140px] base:max-w-[calc(89.0625%)] mr-auto" id='featuredProduct'>

        <div className="flex flex-col items-start md:pt-20">
          <h2 className='text-[32px] leading-[32px] md:text-[60px] font-headline md:font-black md:max-w-[552px] md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-[600px] md:leading-[52px] mb-4 md:mb-6 text-[#4E1DD0]'>
            THESE Classic lols <br></br> are now nfts
          </h2>
          <p className='text-base md:text-[27px] leading-[120%] font-extralight lg:max-w-[487px] lg:mx-0 md:mx-auto lg:text-left md:text-center  md:max-w-[552px]'>
            We all love the punderful jokes that Laffy <br></br> Taffy is known for. Now, some jokes are <br></br> retired from the wrappers and converted <br></br> into these playful, vibrant, trading <br></br> card-inspired NFTs.
          </p>
        </div>

        <div className='block w-full lg:min-w-[320px] lg:w-[36.5%] lg:max-w-[573.3px]'>
          
          { image?.length >0 && (
              <CustomClaimViewer filename={image} />              
          ) }
          
        </div>
        

      </div>

      
    </section>
  )
  
}

export default Main