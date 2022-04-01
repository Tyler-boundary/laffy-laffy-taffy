import React from 'react'
import CustomProductViewer from './CustomProductViewer'

function Main({featuredProduct}) {
  return (

    <section className='w-full mb-[105px] max-w-[1440px] px-5 md:px-20 mx-auto h-full flex flex-col justify-center items-center pt-[110px]'>

      <div className='w-full justify-center items-center mb-[67px]'>
        <h2 className='text-lg text-center font-medium max-w-[616px] mx-auto leading-[27px]'>
          Blue bottle williamsburg farm-to-table cillum flexitarian. Pour-over cliche heirloom occupy semiotics ad photo booth kale chips.
        </h2>
      </div>

      <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row md:items-center justify-between w-full max-w-[1150px] mr-auto">

        <div className="flex flex-col items-start max-w-[521px] w-full">
          <h2 className='text-[45px] font-black leading-[54px] mb-9'>Two-line headline about NFT Collection</h2>
          <p className='text-[20px] font-medium leading-[31px]'>Blue bottle williamsburg farm-to-table cillum flexitarian. Pour-over cliche heirloom occupy semiotics ad photo booth kale chips.</p>
        </div>

        <div className='max-w-[360px] w-full'>
          <CustomProductViewer product={featuredProduct} />
        </div>
        

      </div>

      
    </section>
  )
}

export default Main