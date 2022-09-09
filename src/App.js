import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App text-center m-3 p-3 border rounded">
      <header>
        <h1>Nifty Dictionary</h1>
      </header>
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
