import { Typography, Button } from "@material-tailwind/react";
import React from "react";

const TitleAndDescriptionComponent: React.FC = () => {
  return (
    <>
     <div className="mx-5 md:mx-0 md:flex md:flex-nowrap md:my-10">
          <p className="tracking-wider	font-titles bg-gradient-to-t from-accent-900 to-accent-50  bg-clip-text text-transparent underline underline-offset-4 decoration-3  decoration-accent-900 text-xl my-3 sm:text-3xl md:text-center md:w-full md:m-0 lg:text-4xl 2xl:text-5xl">About Me</p>
          <Typography variant="small" className="font-body text-body text-xs sm:text-base xl:mr-16">
          Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.
          <div className="hidden md:flex">
            <Button size="md" ripple={true} variant="filled" className="capitalize w-fit mt-8 font-body bg-secondary border-secondary text-accent-900 lg:text-sm">Download Resume</Button>
          </div>
          </Typography>
      </div>
      <div className="flex justify-end mx-6 md:hidden">
            <Button size="md" ripple={true} variant="filled" className="capitalize w-fit mt-5 font-body bg-secondary border-secondary text-accent-900">Download Resume</Button>
      </div>
    </>
  );
};

export default TitleAndDescriptionComponent;
