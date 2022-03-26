import "./App.css";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      {/* calling Header component */}
      <Header></Header>

      {/* calling Shop component */}
      <Shop></Shop>

      {/* calling Articles component */}
      <Articles></Articles>

      {/* calling Footer component */}
      <Footer></Footer>
    </div>
  );
}

// exporting return from App function
export default App;
