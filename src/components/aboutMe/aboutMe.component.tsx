import React from "react";
import yop from "../../assets/yop.png";
import { Button } from "@material-tailwind/react";

const AboutMeComponent: React.FC = () => {
  return (
    <>
      <div
        className="flex flex-nowrap justify-start bg-presentation bg-cover pb-auto">
        <div className="flex flex-col items-center text-center mx-3
                        justify-center sm:px-16 xl:pl-24 2xl:mx-42">
          <p
            className="font-titles text-3xl bg-gradient-to-t from-body via-primary-900 to-primary-50  bg-clip-text text-transparent
                       md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            Oscar Flores
          </p>
          <p
            className="font-subtitles text-lg bg-gradient-to-t from-primary-900 to-primary-50  bg-clip-text text-transparent
                          md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
          >
            FullStack Developer
          </p>
          <Button
            size="sm"
            variant="gradient"
            className="mt-5 font-body border-primary-900 bg-gradient-to-t from-primary-900 to-primary-50 text-secondary capitalize lg:text-lg"
          >
            Contact Me
          </Button>
        </div>
        <img src={yop} alt="OscarFlores" className="w-[8rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] 
                                                    2xl:w-[22rem]"/>
      </div>
    </>
  );
};

export default AboutMeComponent;
