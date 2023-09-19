/* eslint-disable jsx-a11y/anchor-is-valid */
import NavBarComponent  from './components/navBar/navBar.component';
import AboutMeComponent from './components/aboutMe/aboutMe.component';
import TitleAndDescriptionComponent from './components/titleAndDescription/titleAndDescrition.component';
import BlockLeftComponent from './components/blockLeft/blockLeft.component';
import BlockRightComponent from './components/blockRight/blockRight.component';

function App() {
  return (
    <div className="App">
      <div className="my-10 container mx-auto bg-white rounded-[38px] shadow-md">

        <NavBarComponent/>

        <AboutMeComponent/>

        <div className="grid grid-cols-12 py-20">
          <TitleAndDescriptionComponent/>
          <BlockRightComponent/>
          <BlockLeftComponent/>
        </div>

      </div>
    </div>
  );
}

export default App;
