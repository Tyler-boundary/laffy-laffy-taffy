import Image from "next/image";
import Link from "next/link";
const logoFileName = '/' +process.env.NEXT_PUBLIC_NAVBAR_LOGO;


const Navbar = () => {
  return (

    <nav className="absolute z-40 pt-[36px] w-full min-h-[200px] flex flex-col justify-center items-center">
      <h1 className="text-7xl">NavBar</h1>
    </nav>

  );
};

export default Navbar;
