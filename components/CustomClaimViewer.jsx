import React from 'react'
import Image from "next/image";
import Link from "next/link";


export const CustomClaimViewer = ({filename}) => {
  
  return (
    
    <div className='w-full flex flex-col items-start select-none'>
    
      <a className='w-full relative pb-[calc(100%*1.52)] rounded-[32px] shadow-productViewer'>

        <div className="absolute inset-0 w-full flex flex-col justify-center items-center">
          
          <div className='relative h-full w-full flex max-h-full justify-center max-w-full transition-transform duration-200 ease-[ease-in-out] md:hover:scale-105'>

            <div className='w-full h-full '>
                <Image
                  className='object-cover h-full w-full object-center rounded-[32px]'
                  src={`/laffyTaffy/${filename}`}
                  alt={filename}
                  layout="responsive"
                  height={1675}
                  width={1096}
                />
              </div>

          </div>  

        </div>

      </a>

    </div>


  )

}
