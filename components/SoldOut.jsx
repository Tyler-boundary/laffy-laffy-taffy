import React from 'react'
import Image from "next/image";

function SoldOut() {
  return (

    <section className="w-full max-w-[2500px] mx-auto pt-[50px] md:pt-[70px] lg2:pt-[75px] 2xl:pt-[143px] pb-[45px] relative">

      <div className="flex flex-col relative z-[1]">

        <h2 className="z-[3] px-5 lg2:px-0 font-lilita leading-[48px] text-[48px] sm:leading-[80px] sm:text-[80px] lg2:text-[100px] lg2:leading-[90px] 3xl:!leading-[117px] 3xl:!text-[135px] lg2:max-w-[80%] 2xl:max-w-[75%] mx-auto text-[#FEE63E] w-full font-normal text-center tracking-[-.02em] uppercase">
          ThAT’S A WRAP(PER), ALL NFTS ARE CLAIMED!
        </h2>

        <p className="text-[#FEE63E] max-w-[654px] mx-auto lg2:max-w-full mt-6 lg2:mt-16 uppercase text-center tracking-[.01em] px-5 text-[24px] sm:text-[36px] md:text-[45px] lg:2leading-[44px] font-lilita font-normal mb-7">
          STAY IN TOUCH FOR INFO ON NEW PRODUCTS AND DROPS
        </p>
        
        <form name="contact" method="POST" data-netlify="true" className="flex flex-col max-w-max mx-auto mb-[22px] w-full px-5" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex justify-between space-x-1 bg-white w-full max-w-[487px] lg2:max-w-[633px] rounded-[29px]">

            <input
              type="email"
              className="outline-none rounded-l-[29px] w-full py-[7px] bg-white pl-[33px] font-lilita text-[#DAD0FC]  text-[20px] sm:text-[28px] lg2:text-[34px] leading-[44px] uppercase font-normal placeholder:text-[#DAD0FC]"
              placeholder="YOUR EMAIL..."
              name="email"
            />

            <input
              type="submit"
              className="outline-none cursor-pointer rounded-r-[29px] py-[7px] pl-5 pr-[27px] bg-[#5229D1] text-[#FFBBC8]  text-[20px] sm:text-[28px] lg2:text-[34px] leading-[44px] uppercase font-normal font-lilita"
              value="SUBMIT"
            />

          </div>
          
        </form>

        <h4 className="text-white px-5 sm:px-0 max-w-[355px] mx-auto lg2:max-w-full font-lilita text-center uppercase tracking-[-.01em] text-[24px] sm:text-[28px] lg2:text-[31px] leading-[33px] mb-7">
          IN THE MEAN TIME, ENJOY SOME LAFFY TAFFY
        </h4>

        <div className="relative max-w-max mx-auto mb-[220px] sm:mb-[394px] lg2:mb-[270px]">
          
          <div className="relative z-[2]">    
            <a href="" className="block bg-[#FFA2B5] transition-colors ease-in-out duration-150 hover:bg-[#EC6788] font-lilita rounded-[110px] max-w-max mx-auto py-2.5 md:py-5 px-[30px] text-white uppercase text-[24px] sm:text-[36px] lg2:text-[41px] leading-[44px] text-center font-normal">
              SHOP NOW
            </a>
          </div>

          <div className="absolute bg-[#EC6788] rounded-[110px] w-full h-full left-[-2px] bottom-[-4px] z-[0]">

          </div>

        </div>

        <p className="font-gotham px-5 sm:px-0 pt-[30px] lg2:mt-0 max-w-[592px] mx-auto lg2:max-w-full text-base sm:text-lg lg2:text-[20px] text-center font-normal text-white tracking-[.01em] leading-6">By clicking submit, you agree to receive marketing and promotional emails from Ferrara Candy Compan</p>

      </div>

      <div className="absolute inset-0 w-full h-full z-[0]">

        <div className="relative w-full h-full hidden flex-col lg2:flex">
          <Image
            src={"/background-desktop.png"}
            alt={"background-desktop.png"}
            className="object-cover select-none"
            layout="fill"
            priority={true}
          />
        </div>

        <div className="relative w-full h-full flex flex-col lg2:hidden">
          <Image
            src={"/background_mobile.png"}
            alt={"background-mobile.png"}
            className="object-cover select-none"
            layout="fill"
            priority={true}
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
              priority={true}
          />
        </div>

        <div className="pb-[125px] lg2:pb-[110px] h-max block lg2:hidden">
          <Image
              src={"/soldout_mobile.png"}
              alt={"soldout_mobile.png"}
              className="object-cover select-none"
              width={1010}
              height={482}
              layout="responsive"
              priority={true}
          />
        </div>

      </div>

    </section>

  )
}

export default SoldOut