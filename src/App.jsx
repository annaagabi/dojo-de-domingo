import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurClients from "./components/Clients";
import PixelGrade from "./components/Pixelgrade";
import Helping from "./components/Helping";
import DesignInfo from "./components/DesignInfo";
import MeetInfo from "./components/MeetInfo";
import NewMarketing from "./components/NewMarketing";
import Demonstration from "./components/Demonstration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurClients />
      <PixelGrade />
      <Helping />
      <DesignInfo />
      <MeetInfo />
      <NewMarketing />
      <Demonstration />
      <Footer />
    </div>
  );
}

export default App;
