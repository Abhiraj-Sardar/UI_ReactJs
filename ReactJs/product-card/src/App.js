import card1 from "./cpu.jpg";
import card2 from "./gpu.jpg";
import card3 from "./camera.jpg";
import card4 from "./joystick.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
      <h1>Product Card</h1>
      <div className="template">
          <div className="card1">
            <img src={card1} height="200" width="180"/>
          </div>
          <div className="card1">
          <img src={card2} height="200" width="180"/>
          </div>
          <div className="card1">
          <img src={card3} height="190" width="170"/>
          </div>
          <div className="card1">
          <img src={card4} height="200" width="180"/>
          </div>
          <div className="label">
            <h1>
              CPU<br/>
              $400
            </h1>
            <h1>
              GPU<br/>
              $400
            </h1>
            <h1>
              CAMERA<br/>
              $400
            </h1>
            <h1>
              JOYSTICK<br/>
              $400
            </h1>
          </div>
      </div>
      </center>
    </div>
  );
}

export default App;
