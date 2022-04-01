import Image from "next/image";
import Link from "next/link";
const logoFileName = '/' +process.env.NEXT_PUBLIC_NAVBAR_LOGO;


const Navbar = () => {

  return (

    <nav className="bg-NavBar w-full h-[76px] flex flex-col justify-center items-center">

      <div className="max-w-[1440px] w-full px-5 md:px-20 flex items-center md:justify-end">

        <div className="max-w-[700px] w-full flex items-center justify-between">

          <div className="h-max w-full max-w-[107px]">

            <Image
              className="w-max h-max logo"
              src={logoFileName}
              width={107}
              height={40}
              layout={"responsive"}
              alt={logoFileName}
            />

          </div>

          <a 
            href={process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT} 
            className="px-6 bg-primary py-2.5 text-center uppercase text-secondary buttonShape text-[11px] font-medium"
          >
            {process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT}
          </a>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;
