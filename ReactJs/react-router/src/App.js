
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";

// install router by writting in cmd: npm i react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* for Borwser */}
        <Routes>  {/* for link */}
          <Route exact path="/" element={<Menu/>}></Route> {/* for path */}
          <Route exact path="/About" element={<About/>}></Route> 
          <Route exact path="/Gallery" element={<Gallery/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
