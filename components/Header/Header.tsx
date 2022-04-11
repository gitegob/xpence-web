import Image from "next/image";
import { FC } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

export const Header: FC = () => {
  return (
    <div className="shadow-md p-3">
      <header className="flex flex-col sm:flex-row justify-between items-center h-auto first:ml-5 last:mr-12">
        <div>
          <Image
            src="/images/XPENCE@2x.png"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-between">
          <Image
            className="object-contain rounded-full"
            src="/images/profile_pic.jpg"
            height={40}
            width={40}
            alt="Profile"
          />
          <p className="font-bold flex justify-between mx-2 text-sm tracking-wide ml-4">
            <span>Brian Gitego</span> <MdOutlineArrowDropDown />{" "}
          </p>
        </div>
      </header>
    </div>
  );
};
