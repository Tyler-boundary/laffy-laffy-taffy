import React from 'react'
import CustomProductViewer from './CustomProductViewer';

const topText = process.env.NEXT_PUBLIC_MAIN_TOP_TEXT ?? "";
const headline = process.env.NEXT_PUBLIC_MAIN_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_MAIN_DESCRIPTION ?? "";

function Main({featuredProduct}) {
  return (

    <section className='w-full max-w-[1440px] px-4 md:px-10 lg:px-20 mx-auto h-full flex flex-col justify-center items-center pt-20 md:pt-[120px]'>

      <div className='w-full justify-center items-center mb-20 md:mb-[120px]'>
        <h2 className='text-lg text-center font-medium max-w-[616px] mx-auto leading-[27px]'>
          {topText}
        </h2>
      </div>

      <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row md:items-center justify-between w-full max-w-[1140px] mr-auto">

        <div className="flex flex-col items-start w-full">
          <h2 className='text-[32px] leading-[32px] md:text-[52px] font-extrabold md:font-black md:max-w-[552px] md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-[600px] md:leading-[52px] mb-4 md:mb-6'>
            {headline}
          </h2>
          <p className='text-base lg:max-w-[487px] lg:mx-0 md:mx-auto lg:text-left md:text-center  md:max-w-[552px] font-medium leading-[25px]'>
            {description}
          </p>
        </div>

        <div className='hidden lg:block max-w-[360px] w-full'>
          <CustomProductViewer product={featuredProduct} />
        </div>
        

      </div>

      
    </section>
  )
}

export default Main