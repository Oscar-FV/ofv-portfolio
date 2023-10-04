import React from "react";
import {
  Drawer,
  IconButton ,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';

const NavBarComponent: React.FC = () => {
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  
  const [openTop, setOpenTop] = React.useState(false);
  return (
    <>
      <div className="flex flex-nowrap justify-between items-center py-4 px-4 sticky top-0 bg-white z-10">
        <p className="font-body text-body text-lg flex items-center"> <span className="text-primary-900 text-4xl">&lt;</span> OFV <span className="text-primary-900 text-4xl">&gt;</span></p>
        <IconButton  size="sm" variant="text" onClick={openDrawerTop}>
          <Icon icon="iconamoon:menu-kebab-horizontal" className="text-body text-3xl" />
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

export default NavBarComponent;
