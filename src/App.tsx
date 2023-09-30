import NavBarComponent  from './components/navBar/navBar.component';
import AboutMeComponent from './components/aboutMe/aboutMe.component';
import TitleAndDescriptionComponent from './components/titleAndDescription/titleAndDescrition.component';
import BlockLeftComponent from './components/blockLeft/blockLeft.component';
import BlockRightComponent from './components/blockRight/blockRight.component';

function App() {
  return (
    <div className="App">

        <AboutMeComponent />

        {/* <div className="grid grid-cols-12 py-20"> */}
          {/* <TitleAndDescriptionComponent/> */}
          {/* <BlockRightComponent/>
          <BlockLeftComponent/>
        </div> */}

    </div>
  );
}

export default App;
