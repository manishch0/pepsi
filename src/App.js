import "./App.css";
import Header from "./Molecule/header/Header.jsx";
import MainPage from "./pages/MainPage";
import Page from "./pages/Page";
import HeroSection from "./component/atoms/heroSection/HeroSection.jsx";
import Pepsi from "./PepsiComponent/pepsi";
import StartBucks from "./StartBucks/StartBucks";

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <HeroSection />
      <Header />
      <Page /> */}

      {/* <Pepsi /> */}
      <StartBucks />
    </div>
  );
}

export default App;
