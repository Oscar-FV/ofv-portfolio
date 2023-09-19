import React from "react";
import { Icon } from "@iconify/react";

const BlockRightComponent: React.FC = () => {
  return (
    <div
      className="justify-items-center
                          col-start-4 col-span-8
                          mt-20 rounded-xl relative bg-[#F2E9FA] shadow-xl flex items-center justify-between"
    >
      <div
        className="text-5xl
                        -top-9 absolute bg-white rounded-lg px-2 py-2 font-medium"
      >
        Flextronics
      </div>
      <div className="my-4 grid grid-cols-4 gap-2 items-center">
        <div className="col-span-2 p-3">
          <div className="my-4 flex justify-start">
            <Icon icon="carbon:user-filled" className="big-icon" />
            <p>Software Developer Intern</p>
          </div>

          <div className="my-4 flex justify-start">
            <Icon icon="ic:baseline-date-range" className="big-icon" />
            <p>November 2022 - Current</p>
          </div>

          <div className="my-4 flex justify-start">
            <Icon icon="mdi:location" className="big-icon" />
            <p>Guadalajara, Jalisco (Remote)</p>
          </div>
        </div>

        <div className="col-start-3 col-span-2">
          <div>
            <div className="flex justify-start">
              <Icon icon="ph:stack-fill" className="big-icon" />
              <p className="ml-3">Stack</p>
            </div>

            <ul className="ml-8 pt-2 list-disc">
              <li>Angular</li>
              <li>TypeScript</li>
              <li>.Net</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 mx-4">
          <div className="mt-5 flex justify-start">
            <Icon icon="ph:briefcase-fill" className="big-icon" />
            <p className="ml-3">Responsabilities</p>
          </div>

          <div className="ml-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tempora beatae eum facere ipsam ducimus, placeat neque reiciendis
            cum quod, facilis praesentium. Vel a voluptates blanditiis
            praesentium nesciunt ullam quis?
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockRightComponent;
