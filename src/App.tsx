import AboutMeComponent from './components/aboutMe/aboutMe.component';
import BlockRightComponent from './components/blockLeft/blockLeft.component';
import BlockLeftComponent from './components/blockLeft/blockLeft.component';
import NavBarComponent from './components/navBar/navBar.component';
import TitleAndDescriptionComponent from './components/titleAndDescription/titleAndDescrition.component';

function App() {
  return (
    <div className="App relative">

        <NavBarComponent />
        <AboutMeComponent />
        <TitleAndDescriptionComponent/>

        <div className="grid grid-cols-12 ">
          <BlockRightComponent/>
          <BlockLeftComponent/>
        </div>

    </div>
  );
}

export default App;
