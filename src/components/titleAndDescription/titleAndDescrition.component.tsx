import { Typography, Button } from "@material-tailwind/react";
import React from "react";

const TitleAndDescription: React.FC<{
  title: string;
  content: string;
  showButton?: boolean;
  buttonText?: string;
  onClick?: () => void;
}> = ({ title, content, showButton, buttonText, onClick}) => {
  return (
    <>
      <div className="mx-5 2xl:mx-32">
        <p className="tracking-wider font-titles bg-gradient-to-t from-primary-900 to-primary-50 bg-clip-text text-transparent underline underline-offset-4 decoration-3  decoration-accent-900 text-xl lg:text-3xl my-3">
          {title}
        </p>
        <Typography
          variant="small"
          className="font-body text-body text-sm lg:text-base"
        >
          {content}
        </Typography>
      </div>
      <div className="flex justify-end mr-5 2xl:mr-32 mb-5">
        {showButton && (
          <Button
            size="md"
            ripple={true}
            variant="filled"
            className="lg:text-base capitalize w-fit mt-5 font-body bg-secondary border-secondary text-accent-900"
            onClick={onClick}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </>
  );
};

export default TitleAndDescription;
