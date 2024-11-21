"use client";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { NavbarLinks } from "../Navbar/NavbarLinks";
import { NavbarRightAction } from "../Navbar/NavbarRightAction";
import { Logo } from "./Logo";
import NavigationDrawer from "./NavigationDrawer";

export default function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <nav className="bg-[#F5F3FF] px-[15px] md:px-10 lg:px-20 py-4 md:py-[19.5px] flex-between gap-2 relative">
        <div className="block md:hidden">
          {/*navigation drawer controller button */}
          <CgMenuLeft
            onClick={() => setShowDrawer(true)}
            className="transition-all duration-500 icon hover:scale-125"
          />
        </div>
        <div className="flex-1 flex-between">
          <Logo />
          <div className="hidden md:block">
            <NavbarLinks />
          </div>
          <NavbarRightAction />
        </div>
      </nav>
      <NavigationDrawer showDrawer={showDrawer} handleDrawer={setShowDrawer} />
    </>
  );
}