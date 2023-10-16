import AboutMeComponent from './components/aboutMe/aboutMe.component';
import BlockRightComponent from './components/blockRight/blockRight.component';
import BlockLeftComponent from './components/blockLeft/blockLeft.component';
import NavBar from './components/navBar/navBar.component';
import TitleAndDescription from './components/titleAndDescription/titleAndDescrition.component';

import { Jobs } from './consts/jobs.constants';
import React from 'react';

function App() {
  return (
    <div className="App relative">

        <NavBar />
        <AboutMeComponent />
        <TitleAndDescription title='About Me' content='Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.' showButton={true}/>


        {Jobs.map((job, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <BlockRightComponent job={job} />
            ) : (
              <BlockLeftComponent />
            )}
          </React.Fragment>
        ))}
          
    </div>
  );
}

export default App;
