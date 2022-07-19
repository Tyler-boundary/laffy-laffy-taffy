import React from 'react'
import { CustomClaimViewer } from './CustomClaimViewer';
import CustomProductViewer from './CustomProductViewer';

const topText = process.env.NEXT_PUBLIC_HERO_SECTION_BODY ?? "";
const headline = process.env.NEXT_PUBLIC_MIDSECTION_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_MIDSECTION_DESCRIPTION ?? "";
const cta_link = process.env.NEXT_PUBLIC_HERO_CTA_LINK ?? "/";

function Main({image}) {
  
  return (

    <section className='w-full pb-10 lg:pb-0 max-w-[1960px] px-4 md:px-10 lg:px-20 mx-auto h-full flex flex-col justify-center items-center pt-[3rem] md:pt-[120px]'>

      <div className='w-full justify-center items-center mb-[3rem] md:mb-[120px] flex flex-col space-y-6 md:space-y-12 max-w-max  md:max-w-[652px] mx-auto'>
        
        <div className="flex flex-col space-y-4 md:space-y-8 w-full">

          <h2 className="text-[26px] md:text-[54px] w-full uppercase text-start text-[#4E1DD0] font-body md:font-semibold leading-[16.8px] md:leading-[23.04px]">
            1. &nbsp; &nbsp;Connect your wallet
          </h2>

          <p className='text-lg md:text-[30px] text-start font-body md:font-light leading-[18px] md:leading-[38.4px]'>
            Click the “Claim My NFT” button above to start the minting process. NFTs will be given away at random — first come, first served.
          </p>

        </div>

        <div className="flex flex-col space-y-4 md:space-y-10 w-full">

          <h2 className="text-[26px] md:text-[54px] w-full uppercase text-start text-[#4E1DD0] font-body md:font-semibold leading-[16.8px] md:leading-[23.04px]">
            2. &nbsp; &nbsp;Get Your nft
          </h2>

          <p className='text-lg md:text-[30px] text-start font-body md:font-light  leading-[18px] md:leading-[38.4px]'>
            Follow the instructions, connect your wallet and claim your NFT. It’s that easy! All NFTs are backed by the Polygon blockchain and are free (yes, free) to mint.
          </p>

        </div>

        <div className="flex flex-col space-y-4 md:space-y-10 w-full">

          <h2 className="text-[26px] md:text-[54px] w-full uppercase text-start text-[#4E1DD0] font-body md:font-semibold leading-[16.8px] md:leading-[23.04px]">
            3. &nbsp; &nbsp;Laff
          </h2>

          <p className='text-lg md:text-[30px] text-start font-body md:font-light  leading-[18px] md:leading-[38.4px]'>
            Congrats! You got a piece of Laff history.
          </p>

        </div>

          <a 
            href={cta_link}
            className="px-[37.5px] leading-[14px] py-[13px] text-center text-secondary bg-[#EA6354] rounded-[4px] text-[20px] tracking-[.04em] font-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            CLAIM MY NFT!
          </a>

      </div>

      <div className="flex flex-col space-y-10 lg:space-y-0 lg:space-x-5 xl:space-x-0 lg:flex-row md:items-start justify-between w-full max-w-[1140px] base:max-w-[calc(89.0625%)] mr-auto" id='featuredProduct'>

        <div className="flex flex-col items-start md:pt-20">
          <h2 className='text-[32px] leading-[32px] md:text-[60px] font-headline md:font-black md:max-w-[552px] md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-[600px] md:leading-[52px] mb-4 md:mb-6 text-[#4E1DD0]'>
            THESE Classic lols <br></br> are now nfts
          </h2>
          <p className='text-base md:text-[27px] leading-[120%] font-extralight lg:max-w-[487px] lg:mx-0 md:mx-auto text-left'>
            We all love the punderful jokes that Laffy Taffy is known for. Now, 15 jokes have been retired from the wrappers and converted into these unique, limited edition NFTs.
            <br/>
            Check out the full collection below.
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