import React from 'react'
import Image from "next/image";

function SoldOut() {
  return (

    <section className="w-full max-w-[2500px] pt-[143px] pb-[45px] relative mt-20">

      <div className="flex flex-col relative z-[1]">

        <h2 className="z-[3] font-lilita text-[135px] max-w-[80%] 2xl:max-w-[75%] mx-auto text-[#FEE63E] w-full font-normal leading-[117px] text-center tracking-[-.02em] uppercase">
          ThAT’S A WRAP(PER), ALL NFTS ARE CLAIMED!
        </h2>

        <p className="text-[#FEE63E] max-w-[654px] mx-auto lg2:max-w-full mt-16 uppercase text-center tracking-[.01em] text-[45px] leading-[44px] font-lilita font-normal mb-7">
          STAY IN TOUCH FOR INFO ON NEW PRODUCTS AND DROPS
        </p>

        <form action="" className="flex flex-col max-w-max mx-auto mb-[22px]">

          <div className="flex justify-between space-x-1 bg-white min-w-[487px] lg2:min-w-[633px] rounded-[29px]">

            <input
              type="email"
              className="outline-none rounded-l-[29px] w-full py-[7px] bg-white pl-[33px] font-lilita text-[#DAD0FC] text-[34px] leading-[44px] uppercase font-normal placeholder:text-[#DAD0FC]"
              placeholder="YOUR EMAIL..."
              name="email"
            />

            <input
              type="submit"
              className="outline-none rounded-r-[29px] py-[7px] pl-5 pr-[27px] bg-[#5229D1] text-[#FFBBC8] text-[34px] leading-[44px] uppercase font-normal font-lilita"
              value="SUBMIT"
            />

          </div>
          
        </form>

        <h4 className="text-white max-w-[355px] mx-auto lg2:max-w-full font-lilita text-center uppercase tracking-[-.01em] text-[31px] leading-[33px] mb-7">
          IN THE MEAN TIME, ENJOY SOME LAFFY TAFFY
        </h4>

        <div className="relative max-w-max mx-auto mb-[394px] lg2:mb-[270px]">
          
          <div className="relative z-[2]">    
            <a href="" className="block bg-[#FFA2B5] transition-colors ease-in-out duration-150 hover:bg-[#EC6788] font-lilita rounded-[110px] max-w-max mx-auto py-5 px-[30px] text-white uppercase text-[41px] leading-[44px] text-center font-normal">
              SHOP NOW
            </a>
          </div>

          <div className="absolute bg-[#EC6788] rounded-[110px] w-full h-full left-[-2px] bottom-[-4px] z-[0]">

          </div>

        </div>

        <p className="font-gotham pt-[30px] lg2:mt-0 max-w-[592px] mx-auto lg2:max-w-full text-[20px] text-center font-normal text-white tracking-[.01em] leading-6">By clicking submit, you agree to receive marketing and promotional emails from Ferrara Candy Compan</p>

      </div>

      <div className="absolute inset-0 w-full h-full z-[0]">

        <div className="relative w-full h-full hidden flex-col lg2:flex">
          <Image
            src={"/background-desktop.png"}
            alt={"background-desktop.png"}
            className="object-cover select-none"
            layout="fill"
          />
        </div>

        <div className="relative w-full h-full flex flex-col lg2:hidden">
          <Image
            src={"/background_mobile.png"}
            alt={"background-mobile.png"}
            className="object-cover select-none"
            layout="fill"
          />
        </div>

      </div>

      <div className="absolute inset-0 w-full h-full z-[0] flex flex-col justify-end ">

        <div className="h-max hidden lg2:block pb-[132px]">
          <Image
              src={"/banner_desktop.png"}
              alt={"banner_desktop.png"}
              className="object-cover select-none"
              width={2740}
              height={917}
              layout="responsive"
          />
        </div>

        <div className="pb-[110px] h-max block lg2:hidden">
          <Image
              src={"/soldout_mobile.png"}
              alt={"soldout_mobile.png"}
              className="object-cover select-none"
              width={1010}
              height={482}
              layout="responsive"
          />
        </div>

      </div>

    </section>

  )
}

export default SoldOut