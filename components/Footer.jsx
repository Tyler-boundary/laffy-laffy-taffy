import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (

    <footer className="max-w-[1440px] border border-white border-opacity-20 py-10 bg-[#1A1A1A] mx-auto  px-5 md:px-20 flex w-full items-center justify-center space-x-5">

      <p className="uppercase text-white text-[11px] font-medium">Powered By</p>

      <div>
        <Bitski className="" />
      </div>


    </footer>

  );
};

export default Footer;
