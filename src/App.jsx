import "./App.css";
import { dict } from "./utils/dict";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import { useState } from "react";
const { COLORS } = dict;
function App() {
  const [isContactPressed, setIsContactPressed] = useState(false);
  return (
    <div className="App">
      <header>
        <Navbar setIsContactPressedFunc={setIsContactPressed} />
      </header>
      <main style={{ backgroundColor: COLORS.SECONDARY }}>
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
