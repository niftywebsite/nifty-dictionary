import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App m-3 p-3">
      <header>
        <h1 className="text-center m-3">Nifty Dictionary</h1>
      </header>
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
