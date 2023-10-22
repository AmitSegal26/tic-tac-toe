import "./App.css";
import COLORS from "./utils/COLORS";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [isContactPressed, setIsContactPressed] = useState(false);
  return (
    <div className="App">
      <header>
        <Navbar setIsContactPressedFunc={setIsContactPressed} />
      </header>
      <main
        style={{ border: "3px solid black", backgroundColor: COLORS.SECONDARY }}
      >
        <Router />
      </main>
      <footer>
        <Footer
          isContactPressedState={isContactPressed}
          setIsContactPressedFunc={setIsContactPressed}
        />
      </footer>
    </div>
  );
}

export default App;
