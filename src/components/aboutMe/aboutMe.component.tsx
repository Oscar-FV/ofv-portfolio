import React from "react";
import yop from "../../assets/yop.png";
import { Button, Typography } from "@material-tailwind/react";

const AboutMeComponent: React.FC = () => {
  return (

    <>
      <div className="flex flex-nowrap justify-start bg-secondary pb-auto">
          <div className="flex flex-col items-center justify-top text-center pl-6 mt-6">
            <p className="font-titles text-body text-xl">Oscar Flores</p>
            <p className="font-subtitles text-sm text-primary-900">Full Stack Developer</p>
            <Button size="sm" variant="outlined" className="w-fit mt-5 font-body border-primary-900 text-primary-900">Contact Me</Button>
          </div>
          <img
              src={yop}
              alt="OscarFlores"
              className="w-[8rem] ml-3"
          />
      </div>
      <div className="mx-5">
          <p className="font-titles text-primary-900 underline underline-offset-4 decoration-3  decoration-accent-900 text-xl my-3">About</p>
          <Typography variant="small" className="font-body text-body text-xs">
          Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.
          </Typography>
          <div className="flex justify-end">
            <Button size="sm" ripple={true} variant="filled" className="w-fit mt-5 font-body bg-secondary border-secondary text-accent-900">Download Resume</Button>
          </div>
          
      </div>
    </>
      
  );
};

export default AboutMeComponent;
