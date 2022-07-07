import React,{useState, useEffect, useCallback} from 'react'
import Image from "next/image";
import Link from "next/link";


export const CustomClaimViewer = ({claimCode}) => {

  function getOptimizedImage(url,width,height){

    const splitUrl = url.split('/');
    const domain =  "https://cdn.bitskistatic.com/cdn-cgi/image/";
    const settings = `width=${width},height=${height},quality=100,fit=cover,onerror=redirect,f=auto/tokens-raw/`
    const token = splitUrl[splitUrl.length - 2]+"/"+splitUrl[splitUrl.length - 1];
    return domain + settings + token;
    
  }

  return (
    
    <div className='w-full flex flex-col items-start select-none'>
    
      <a rel="noreferrer" target={"_blank"} href={`https://www.bitski.com/claim/${claimCode?.claimCode.id}`} className='w-full relative pb-[calc(100%*1)] rounded-[32px] shadow-productViewer'>

        <div className="absolute inset-0 w-full flex flex-col justify-center items-center">
          
          <div className='relative h-full w-full flex max-h-full justify-center max-w-full transition-transform duration-200 ease-[ease-in-out] md:hover:scale-105'>

            {

              claimCode?.tokenMetadata[0]?.animation_url != undefined ? (

                <video poster={claimCode.tokenMetadata[0].image} loop muted playsInline autoPlay preload="auto" className='object-cover h-full min-w-full max-h-full object-center w-full  mx-auto rounded-[32px]' >

                  <source src={claimCode.tokenMetadata[0].animation_url} />
                  <source src={claimCode.tokenMetadata[0].image} />
                  <p>Your browser Dont support videos</p>
                  
                </video>

              ) :

              (

                <div className='w-full h-full '>
                  <Image
                    className='object-cover h-full w-full object-center rounded-[32px]'
                    src={ getOptimizedImage(claimCode?.tokenMetadata[0]?.image,608,608) }
                    alt={claimCode?.tokenMetadata[0]?.name}
                    layout="responsive"
                    height={608}
                    width={608}
                    quality={100}
                    priority={true}
                  />
                </div>

              )

            }

          </div>  

        </div>

      </a>

      <article className='w-full flex flex-col items-start'>

        <div className={`flex w-full items-center py-2 justify-between border-standard  rounded-lg mt-5 mb-3 border-2 px-2 space-x-2`}>

          <p className='flex text-xs font-black leading-[14.4px] items-center'>
            Claim Free
          </p>
          <p className="text-xs font-body leading-[14.4px] text-right">
            Max claims: {claimCode?.claimCode?.maxClaims}
          </p>

        </div>

        <div className='w-full flex flex-col space-y-2 items-start'>

          <h2 className="text-lg leading-[21px] font-body uppercase">
            <a rel="noreferrer" target={"_blank"} href={`https://www.bitski.com/claim/${claimCode?.claimCode.id}`}>
              {claimCode?.tokenMetadata[0]?.name}
            </a>
          </h2>

          <h3 className="text-sm">
            <a className='flex items-center space-x-2'>

              <Image
                className='rounded-full object-cover '
                src={`${claimCode?.tokenMetadata[0].external_url}/image`}
                alt={""}
                width={20}
                height={20}
                priority={true}
              />

              <p className='text-[#93979F] '>&#64;{claimCode?.claimCode.storeUsername}</p>

            </a>
          </h3>
            
          <div className="text-sm text-[#93979F] limit-lines">
            {claimCode?.tokenMetadata[0].description}
          </div>

          {/* <p className='font-body text-lg leading-[22px]'>
            Free
          </p> */}

        </div>

      </article>

    </div>

  )

}
