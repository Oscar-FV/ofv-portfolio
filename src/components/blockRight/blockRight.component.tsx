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
      } h-5 w-5 transition-transform mt-3 text-accent`}
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
      className="col-start-2 col-span-10 rounded-xl shadow-lg shadow-accent-900/50 bg-secondary mt-20 relative lg:col-start-4 lg:col-span-7"
    >
      <div
        className="tracking-wider text-3xl md:text-5xl text-center font-medium text-primary-900 font-titles bg-secondary rounded-lg py-3 md:text-left md:-top-9 md:absolute md:px-12"
      >
        Daikin Applied
      </div>
      <div className="lg:flex lg:flex-wrap mt-1 md:mt-6 mx-6 lg:mx-3 2xl:mx-8 font-subtitles md:text-md xl:text-lg 2xl:text-xl text-sm xl:justify-around">
      <div className="flex flex-col lg:justify-center">
          <div className="my-6 flex flex-wrap items-center">
            <Icon icon="carbon:user-filled" className="md:big-icon small-icon" />
            <span className="mt-1 ml-2 text-body">FullStack Developer Intern</span>
          </div>

          <div className="mb-6 flex flex-wrap items-center">
            <Icon icon="ic:baseline-date-range" className="md:big-icon small-icon" />    
            <span className="mt-1 ml-2 text-body">November 2022 - Current</span>    
          </div>

          <div className="mb-6 flex flex-wrap items-center">
            <Icon icon="mdi:location" className="md:big-icon small-icon" />
            <span className="mt-1 ml-2 text-body">Guadalajara, Jalisco<span className="text-accent-900 font-body text-sm">(Remote)</span></span>
          </div>
        </div>
        <Accordion open={alwaysOpen} className="lg:basis-full xl:basis-1/3">
          <AccordionHeader onClick={handleAlwaysOpen}>
            <div className="flex justify-start items-center">
              <Icon icon="ph:stack-fill" className="md:big-icon small-icon" />
              <p className="ml-3 text-body  md:text-md xl:text-lg 2xl:text-xl text-sm font-subtitles ">Stack</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
              <div className="flex flex-wrap font-body justify-center items-center px-4 gap-x-12 gap-y-3 text-xs md:text-md">
                <div className="flex flex-col items-center">
                  <Icon icon="skill-icons:angular-light" className="text-2xl" />
                  <p className="text-body xl:text-base">Angular</p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon icon="skill-icons:dotnet" className="text-2xl" />
                  <p className="text-body xl:text-base">.Net</p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon icon="skill-icons:typescript" className="text-2xl" />
                  <p className="text-body xl:text-base">TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon icon="simple-icons:microsoftsqlserver" color="red" className="text-2xl" />
                  <p className="text-body xl:text-base">MS SQL Server</p>
                </div>
              </div>
          </AccordionBody>
        </Accordion>
        
        <Accordion open={open === 1} icon={IconUpdate(1, open)} className="xl:px-12 pb-10 xl:order-3">
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="mt-5 flex justify-start items-center">
              <Icon icon="ph:briefcase-fill" className="md:big-icon small-icon" />
              <p className="ml-3 text-body md:text-md xl:text-lg 2xl:text-xl text-sm font-subtitles">Responsabilities</p>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-body font-body xl:text-lg">
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
