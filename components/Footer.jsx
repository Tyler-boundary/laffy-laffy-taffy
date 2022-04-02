import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (
    <>
      <div className="h-px absolute w-full bg-standardO opacity-20"></div>
      <footer className="py-10 bg_contact_footer text-standardO mx-auto px-5 md:px-20 flex w-full items-center justify-center space-x-5">

        <p className="uppercase text-[11px] font-medium">Powered By</p>

        <div>
          <Bitski className="filter_logo_footer" />
        </div>

      </footer>

    </>
  );
};

export default Footer;
