import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (
    <>
      <div className="h-px absolute w-full bg-standardO opacity-20"></div>
      <footer className="py-10 bg_contact_footer text-standardO mx-auto px-4 md:px-10 lg:px-20 flex w-full items-center justify-center space-x-3">

        <p className="uppercase tracking-[.36em] text-[12px] font-medium">Powered By</p>

        <div>
          <Bitski className="filter_logo_footer" />
        </div>

      </footer>

    </>
  );
};

export default Footer;
