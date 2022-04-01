import React from 'react'
import CustomProductViewer from './CustomProductViewer';

const topText = process.env.NEXT_PUBLIC_MAIN_TOP_TEXT ?? "";
const headline = process.env.NEXT_PUBLIC_MAIN_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_MAIN_DESCRIPTION ?? "";

function Main({featuredProduct}) {
  return (

    <section className='w-full mb-[105px] max-w-[1440px] px-5 md:px-20 mx-auto h-full flex flex-col justify-center items-center pt-[110px]'>

      <div className='w-full justify-center items-center mb-[67px]'>
        <h2 className='text-lg text-center font-medium max-w-[616px] mx-auto leading-[27px]'>
          {topText}
        </h2>
      </div>

      <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row md:items-center justify-between w-full max-w-[1150px] mr-auto">

        <div className="flex flex-col items-start max-w-[521px] w-full">
          <h2 className='text-[45px] font-black leading-[54px] mb-9'>
            {headline}
          </h2>
          <p className='text-[20px] font-medium leading-[31px]'>
            {description}
          </p>
        </div>

        <div className='max-w-[360px] w-full'>
          <CustomProductViewer product={featuredProduct} />
        </div>
        

      </div>

      
    </section>
  )
}

export default Main