import React from "react";
import yop from "../../assets/yop.png";
import { Button} from "@material-tailwind/react";

const Skills: React.FC = () => {
  return (

    <>
      <div className="flex flex-nowrap justify-start bg-presentation bg-cover pb-auto">
          <div className="flex flex-col items-center justify-top text-center pl-6 mt-6">
            <p className="font-titles text-body text-xl">Oscar Flores</p>
            <p className="font-subtitles text-sm text-primary-900">Full Stack Developer</p>
            <Button size="sm" variant="filled" className="w-fit mt-5 font-body border-primary-900 bg-primary-900 text-secondary">Contact Me</Button>
          </div>
          <img
              src={yop}
              alt="OscarFlores"
              className="w-[8rem] ml-3"
          />
      </div>
    </>
      
  );
};

export default Skills;
