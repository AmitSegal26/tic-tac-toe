import "./App.css";
import COLORS from "./COLORS";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes/Router";

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
    </div>
  );
}

export default App;
