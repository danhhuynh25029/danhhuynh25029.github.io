import logo from './logo.svg';
import './App.css';

function App() {
  const e = "Danh"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>{new Date().toLocaleTimeString()}</h1>
          {e}
          Learn React
        </a>
      </header>
    </div>
  );
}
setInterval(App,1000);
export default App;
