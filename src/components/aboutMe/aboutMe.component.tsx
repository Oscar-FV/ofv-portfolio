import React from "react";
import yop from "../../assets/yop.png";

const AboutMeComponent: React.FC = () => {
  return (
      <div className="grid grid-cols-8 bg-waves_pattern bg-cover">
        <div className="flex justify-center col-span-6 lg:col-span-4
                        items-end mb-20">
          <div className="grid grid-cols-6 text-center">
            <div className="lg:text-6xl text-4xl font-bold col-span-6 text-white">
              Oscar Flores
            </div>
            <div className="col-start-2 col-span-4 mt-12 font-semibold
                            text-xl text-[#ffffff] text-justify">
              "Lorem idivsum dolor sit, amet consectetur adidivisicing elit.
              Odivtio sed asdiveriores veniam ut vel est quibusdam? Odivtio ea
              quibusdam officia quidem tenetur divariatur aut, eius debitis
              laboriosam diversdiviciatis at rerum."
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-2 flex justify-end">
          <div className="w-[45rem] h-[35rem] flex justify-center items-center lg:items-center">
            <img
              src={yop}
              alt="OscarFlores"
              className="w-[30rem] mt-10 drop-shadow-[0_14px_8px_rgba(0,0,0,0.40)]"
            />
          </div>
        </div>
      </div>
  );
};

export default AboutMeComponent;
