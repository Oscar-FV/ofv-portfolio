import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';

const NavBarComponent: React.FC = () => {
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  
  const [openTop, setOpenTop] = React.useState(false);
  return (
    <>
      <div className="flex flex-nowrap justify-between items-center p-1 sticky top-0">
        <p>Aquí va un logo culo</p>

        <IconButton size="sm" variant="text" onClick={openDrawerTop} className="">
          <Icon icon="iconamoon:menu-kebab-horizontal" className="text-body text-lg" />
        </IconButton>
        <Drawer
          placement="top"
          open={openTop}
          onClose={closeDrawerTop}
          className="p-4"
          size={80}
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Drawer on Top
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
        </Drawer>
      </div>
      
    </>
  );
};

export default NavBarComponent;
