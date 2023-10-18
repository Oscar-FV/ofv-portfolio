import { Carousel, IconButton } from '@material-tailwind/react';
import AboutMeComponent from './components/aboutMe/aboutMe.component';
import BlockRightComponent from './components/blockRight/blockRight.component';
import NavBar from './components/navBar/navBar.component';
import TitleAndDescription from './components/titleAndDescription/titleAndDescrition.component';
import { Icon } from '@iconify/react';

import { Jobs } from './consts/jobs.constants';

function App() {

  const jobsArray = [];
  for (let i = 0; i <= Jobs.length - 1; i++) {
    jobsArray.push(<BlockRightComponent key={Jobs[i].id} job={Jobs[i]} />);
  }

  return (
    <div className="App relative">
      <NavBar />
      <AboutMeComponent />
      <TitleAndDescription
        title="About Me"
        content="Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need."
        buttonText="download resume"
        showButton={true}
      />

      <div className="pt-1 pb-1">
        <TitleAndDescription
          title="Experience"
          content="Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need."
          showButton={false}
        />
        <div className="hidden lg:flex flex-wrap md:flex-row justify-center mt-6 2xl:mx-32">
          {jobsArray}
        </div>

        <div className="flex justify-center lg:hidden">
          <Carousel
            className="rounded-xl w-[350px]"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-0 -translate-y-2/4"
              >
                <Icon icon="ic:round-arrow-left" className="h-24 w-24 text-accent-900"/>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-0 -translate-y-2/4"
              >
                <Icon icon="ic:round-arrow-left" rotate={2} className="h-24 w-24 text-accent-900"/>
              </IconButton>
            )}

            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                      activeIndex === i ? " bg-accent-900" : " bg-accent-900/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >   
              {jobsArray}
          </Carousel>
        </div>
       
      </div>


    </div>
  );
}

export default App;
