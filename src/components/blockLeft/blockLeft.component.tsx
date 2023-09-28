import React from "react";
import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function IconUpdate(id: number, open: number) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform mt-3`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const BlockRightComponent: React.FC = () => {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <div
      className="col-start-2 col-span-10 rounded-xl shadow-xl bg-white mt-20 relative
                 lg:col-start-4 lg:col-span-7
                 xl:col-start-2 xl:col-span-5"
    >
      <div
        className="text-5xl text-center font-medium text-[#7E2E84] bg-white rounded-lg py-2
                    md:text-left md:-top-9 md:absolute md:px-12"
      >
        Daikin Applied
      </div>
      <div className="lg:flex lg:flex-wrap mt-1 md:mt-6 mx-5
                       xl:justify-around">
        <div
          className="flex flex-col 
                     xl:justify-around"
        >
          <div className="my-4 flex flex-wrap">
            <Icon icon="carbon:user-filled" className="big-icon" />
            <span className="mt-2 ml-2">FullStack Developer Intern</span>
          </div>

          <div className="mb-4 flex flex-wrap">
            <Icon icon="ic:baseline-date-range" className="big-icon" />
            <span className="mt-2 ml-2">November 2022 - Current</span>
          </div>

          <div className="mb-4 flex flex-wrap">
            <Icon icon="mdi:location" className="big-icon" />
            <span className="mt-2 ml-2">Guadalajara, Jalisco (Remote)</span>
          </div>
        </div>
        <Accordion open={alwaysOpen} className="lg:basis-full xl:basis-1/3">
          <AccordionHeader onClick={handleAlwaysOpen}>
            <div className="flex justify-start">
              <Icon icon="ph:stack-fill" className="big-icon" />
              <p className="ml-3">Stack</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
              <div className="flex flex-wrap justify-center items-center px-4 gap-x-12 gap-y-3">
                <div className="flex flex-col items-center">
                  <Icon icon="skill-icons:angular-light" className="big-icon" />
                  <p className="mt-1">Angular</p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon icon="skill-icons:dotnet" className="big-icon" />
                  <p className="mt-1">.Net</p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon icon="skill-icons:typescript" className="big-icon" />
                  <p className="mt-1">TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon icon="simple-icons:microsoftsqlserver" color="red" className="big-icon" />
                  <p className="mt-1">MS SQL Server</p>
                </div>
              </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={IconUpdate(1, open)} className="xl:px-12 pb-10">
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="mt-5 flex justify-start">
              <Icon icon="ph:briefcase-fill" className="big-icon" />
              <p className="ml-3 font-bold">Responsabilities</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tempora beatae eum facere ipsam ducimus, placeat neque reiciendis
            cum quod, facilis praesentium. Vel a voluptates blanditiis
            praesentium nesciunt ullam quis?
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default BlockRightComponent;
