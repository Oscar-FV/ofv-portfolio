import AboutMeComponent from './components/aboutMe/aboutMe.component';
import BlockRightComponent from './components/blockRight/blockRight.component';
import BlockLeftComponent from './components/blockLeft/blockLeft.component';
import NavBar from './components/navBar/navBar.component';
import TitleAndDescription from './components/titleAndDescription/titleAndDescrition.component';

function App() {
  return (
    <div className="App relative">

        <NavBar />
        <AboutMeComponent />
        <TitleAndDescription title='About Me' content='Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.' showButton={true}/>

        <div className="grid grid-cols-12 ">
          <BlockRightComponent/>
          <BlockLeftComponent/>
        </div>
    </div>
  );
}

export default App;
