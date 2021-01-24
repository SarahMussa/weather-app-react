import './App.css';
import Weather from "./Weather.js"
import CodedBy from "./CodedBy"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <br />
        <CodedBy />
      </header>
    </div>
  );
}

export default App;
