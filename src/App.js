import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      {/* calling Header component */}
      <Header></Header>

      {/* calling Shop component */}
      <Shop></Shop>
    </div>
  );
}

// exporting return from App function
export default App;
