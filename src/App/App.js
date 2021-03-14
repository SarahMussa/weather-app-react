import './App.css';
import Weather from "../WeatherFiles/Weather.js"
import CodedBy from "../Footer/CodedBy"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Lisbon" />
        <br />
        <CodedBy />
      </header>
    </div>
  );
}

export default App;
