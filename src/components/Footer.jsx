import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer>
       <div className="container md:py-12 md:px-2 flex flex-col it md:flex-row justify-between items-center gap-4">
        <span><Link href={"/"}>
          <Image src="/images/logo.png" alt="logo" height={120} width={150} />
        </Link></span>
        <p className="text-[#ADB7BE]">Aakash Rai, 2023. © All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;