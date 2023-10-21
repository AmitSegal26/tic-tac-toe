import "./App.css";
import COLORS from "./utils/COLORS";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main
        style={{ border: "3px solid black", backgroundColor: COLORS.SECONDARY }}
      >
        <Router />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
