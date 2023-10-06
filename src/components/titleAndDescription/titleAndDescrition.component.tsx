import { Typography, Button } from "@material-tailwind/react";
import React from "react";

const TitleAndDescription: React.FC<{
  title: string;
  content: string;
  showButton?: boolean;
  onClick?: () => void;
}> = ({ title, content, showButton, onClick}) => {
  return (
    <>
      <div className="mx-5 md:mx-0 md:justify-end md:flex md:flex-row md:my-10">
        <p className="tracking-wider lg:basis-2/3 xl:basis-1/3 font-titles bg-gradient-to-t from-accent-900 to-accent-50  bg-clip-text text-transparent underline underline-offset-4 decoration-3  decoration-accent-900 text-xl my-3 sm:text-3xl md:text-center md:w-full md:m-0 lg:text-4xl 2xl:text-5xl">
          {title}
        </p>
        <Typography
          variant="small"
          className="font-body text-body text-xs md:mr-5 sm:text-base xl:text-lg xl:mx-5"
        >
          {content}
          {showButton && (
            <div className="hidden md:flex">
              <Button
                size="md"
                ripple={true}
                variant="filled"
                className="capitalize w-fit mt-8 font-body bg-secondary border-secondary text-accent-900 lg:text-sm xl:text-base"
                onClick={onClick}
              >
                Download Resume
              </Button>
            </div>
          )}
        </Typography>
      </div>
      <div className="flex justify-end mx-6 md:hidden">
        {showButton && (
          <Button
            size="md"
            ripple={true}
            variant="filled"
            className="capitalize w-fit mt-5 font-body bg-secondary border-secondary text-accent-900"
            onClick={onClick}
          >
            Download Resume
          </Button>
        )}
      </div>
    </>
  );
};

export default TitleAndDescription;
