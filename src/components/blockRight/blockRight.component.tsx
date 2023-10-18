import React from "react";
import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import job from "../../models/job.model";

function IconUpdate(open: boolean) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        open ? "rotate-180" : ""
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

const BlockRightComponent: React.FC<{
  job: job
}> = ({ job }) => {
  const [open, setOpen] = React.useState(false);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = () =>
    setOpen((prevOpen) => !prevOpen);

  return (
    <div>
    <div className="flex min-w-292 max-w-[350px] mx-6 my-5 bg-secondary rounded-xl shadow-lg shadow-accent-900/50 relative mb-10">
      <div className="tracking-wider text-xl lg:text-2xl text-center font-medium bg-gradient-to-t from-primary-900 to-primary-50  bg-clip-text text-transparent font-titles rounded-lg py-2 -top-6 absolute mx-6">
        {job.company}
      </div>

      <div className="mt-1 mx-6 font-subtitles text-sm ">
        <div className="flex flex-col">

          <div className="my-6 flex flex-wrap items-center">
            <Icon
              icon="carbon:user-filled"
              className="small-icon"
            />
            <span className="mt-1 ml-2 text-body">{job.jobTitle}</span>
          </div>

          <div className="mb-6 flex flex-wrap items-center">
            <Icon
              icon="ic:baseline-date-range"
              className="small-icon"
            />
            <span className="mt-1 ml-2 text-body">
              {job.dateStart} - {job.dateEnd}
            </span>
          </div>

          <div className="mb-6 flex flex-wrap items-center">
            <Icon icon="mdi:location" className="small-icon" />
            <span className="mt-1 ml-2 text-body">
              {job.jobLocation}
              {job.isRemote && (
                <span className="text-accent-900 font-body text-sm">
                  (Remote)
                </span>
              )}
            </span>
          </div>

        </div>

        <Accordion open={alwaysOpen}>
           <AccordionHeader onClick={handleAlwaysOpen}>
             <div className="flex items-center">
               <Icon icon="ph:stack-fill" className="small-icon" />
               <p className="ml-3 text-body text-sm font-subtitles ">
                 Stack
               </p>
             </div>
           </AccordionHeader>
           <AccordionBody>
             <div className="flex flex-wrap font-body justify-between items-center px-4 gap-x-12 gap-y-3 text-xs">
             {job.stack.map((tech, index) => (
              <div className="flex flex-col items-center max-w-[50px]" key={tech}>
                <Icon icon={job.iconStack[index]} className="text-2xl" />
                <p className="text-body">{tech}</p>
              </div>
            ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open}
          icon={IconUpdate(open)}
          className="pb-4"
        >
          <AccordionHeader onClick={() => handleOpen()}>
            <div className="flex justify-start items-center">
              <Icon
                icon="ph:briefcase-fill"
                className="md:big-icon small-icon"
              />
              <p className="ml-3 text-body text-sm font-subtitles">
                Responsabilities 
              </p>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-body font-body">
            {job.descritpion}
          </AccordionBody>
        </Accordion>

      </div>

      </div>  
    </div>
  );
};

export default BlockRightComponent;
