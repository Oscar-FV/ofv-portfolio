import React from "react";

const TitleAndDescriptionComponent: React.FC = () => {
  return (
    <>
      <div
        className="text-5xl
                col-start-2 col-span-11 font-semibold"
      >
        Experience
      </div>
      <div
        className="text-xl
                    col-start-2 col-span-10 mt-3"
      >
        Currently my experience has consisted of jobs in manufacturing
        companies. Within these companies I have had different activities that
        have helped me to start developing my skills as a software developer.
      </div>
    </>
  );
};

export default TitleAndDescriptionComponent;
