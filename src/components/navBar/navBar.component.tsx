import React from "react";
import {
  Drawer,
  IconButton ,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';

const NavBar: React.FC = () => {
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);
  const [openTop, setOpenTop] = React.useState(false);
  
  return (
    <>
      <div className="flex flex-nowrap justify-between lg:justify-between items-center py-4 px-4 lg:px-10  sticky top-0 bg-white z-10">
        <p className="font-body text-body text-lg flex items-center xl:text-2xl"> <span className="text-primary-900 text-4xl xl:text-6xl">&lt;</span> OFV <span className="text-primary-900 text-4xl xl:text-6xl">&gt;</span></p>

        <div className="hidden lg:flex flex-row lg:gap-10 xl:gap-16 rounded-3xl bg-secondary shadow-md shadow-accent-900/50 px-16 py-3">
            <button  className="navItemSelectedDesktop navItemDesktop">About Me</button>
            <button  className="navItem navItemDesktop">Skills</button>
            <button  className="navItem navItemDesktop">Experience</button>
            <button  className="navItem navItemDesktop">Projects</button>
        </div>

        <div className="hidden lg:flex flex-row gap-7">
            <a><Icon icon="simple-icons:github" className="text-primary-900 navIcon text-xl xl:text-3xl"/></a>
            <a><Icon icon="bi:linkedin" className="text-primary-900 navIcon text-xl xl:text-3xl"/></a>
        </div>

        <IconButton  size="sm" variant="text" onClick={openDrawerTop} className="lg:hidden">
          <Icon icon="mingcute:menu-fill" className="text-body text-xl" />
        </IconButton >
      </div>

      <Drawer
          placement="top"
          open={openTop}
          onClose={closeDrawerTop}
          className="items-center pt-4"
          size={120}
        >
          <div className="flex flex-col items-center gap-y-2">
            <p className="font-body text-body text-lg flex items-center"> <span className="text-primary-900 text-4xl">&lt;</span> OFV <span className="text-primary-900 text-4xl">&gt;</span></p>
          <div className="flex flex-row gap-x-6 font-body">
            <button  className="navItemSelected">About Me</button>
            <button  className="navItem">Skills</button>
            <button  className="navItem">Experience</button>
            <button  className="navItem">Projects</button>
          </div></div>
          
      </Drawer>
      
    </>
  );
};

export default NavBar;
