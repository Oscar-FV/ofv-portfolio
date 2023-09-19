import React from "react";
import yop from "../../assets/yop.png";

const AboutMeComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-8 my-10">
          <div className="col-start-1 col-span-4 flex justify-center items-center mb-10">
            <div className="grid grid-cols-6 text-center">
              <div className="text-xl font-medium col-span-6">Jr Software Developer</div>
              <div className="text-5xl font-medium col-span-6">Oscar Flores</div>

              <div
                className="text-justify col-start-2 col-span-4 mt-5"
              >
                "Lorem idivsum dolor sit, amet consectetur adidivisicing elit.
                Odivtio sed asdiveriores veniam ut vel est quibusdam? Odivtio ea
                quibusdam officia quidem tenetur divariatur aut, eius debitis
                laboriosam diversdiviciatis at rerum."
              </div>
            </div>
          </div>
          <div className="col-start-5 col-span-4 flex justify-end items-center">
            <div className="w-[90%] lg:h-[85%] md:h-[85%] sm:h-[40%] bg-[#F2E9FA] flex items-center justify-center">
              <img
                src={yop}
                alt="OscarFlores"
                className="w-[70%] drop-shadow-[0_14px_8px_rgba(0,0,0,0.40)]"
              />
            </div>
          </div>
        </div>
  );
};

export default AboutMeComponent;
