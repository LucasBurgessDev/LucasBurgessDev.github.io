import logo from './logo.svg';
import './App.css';
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
{/*         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          <main className="text-gray-400 bg-gray-900">
            <About />
          </main>
      </header>
    </div>
  );
}

export default App;

/* export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
    </main>
  );
} */