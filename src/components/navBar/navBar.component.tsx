import React from "react";

const NavBarComponent: React.FC = () => {
  return (
    <div
      className="flex flex-nowrap justify-end font-semibold
                  py-5 pl-5 gap-6 pr-20 text-lg"
    >
      <a href="">About Me</a>
      <a href="">Experience</a>
      <a href="">Contact</a>
      <a href="">Resume</a>
    </div>
  );
};

export default NavBarComponent;
