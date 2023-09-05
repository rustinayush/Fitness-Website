import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import TopContainer from "./components/NavBar/TopContainer";
import HeroSection from "./components/HeroPart/HeroSection";
import Swiped from "./components/Swiped-item/Swiped-item";
import Division1 from "./components/Divisions/Division1";
import Division2 from "./components/Divisions/Division2";
import Division3 from "./components/Divisions/Division3";
import Division4 from "./components/Divisions/Division4";
import Division5 from "./components/Divisions/Division5";
import Division6 from "./components/Divisions/Division6";
import Bottom from "./components/Bottom/Bottom";
import Footer from "./components/Footer/Footer";
import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

function App() {
  return (
    <div className="home-page">
      <TopContainer />
      <Navbar />
      <HeroSection />
      <div className="intro-text">
        <p className="text1">HONEST. CLEAN. NATURAL.</p>
        <p className="text2">Choose Your Favourite</p>
      </div>
      <Swiped />
      <Division1 />
      <Division2 />
      <Division3 />
      <Division4 />
      <div style={{ backgroundColor: "#fff9e5" }}>
        <Division5 />
      </div>
      <Division6 />
      <div className="intro-text2">
        <h1>The Näck Journal</h1>

        <Bottom />
      </div>
      <div className="sticky-message-icon">
        <IconButton style={{ color: "white" }}>
          <ChatIcon />
        </IconButton>
      </div>
      <Footer />
    </div>
  );
}

export default App;
