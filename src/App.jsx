import "./App.css";
import { dict } from "./utils/dict";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import initialData from "./utils/initialData";
const { COLORS } = dict;
function App() {
  initialData();
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main style={{ backgroundColor: COLORS.SECONDARY }}>
        <Router />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
