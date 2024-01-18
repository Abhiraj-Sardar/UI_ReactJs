import './App.css';
import Head from "./components/Head";
import Card from "./components/Card";
import movie1 from "./img/movie1.jpg";
function App() {
  return (
    <div className="App">
      <Head title="All Netflix Series Download From Here"/>
      <Card title="Extraordinary WOO" banner={movie1}/>
    </div>
  );
}

export default App;
