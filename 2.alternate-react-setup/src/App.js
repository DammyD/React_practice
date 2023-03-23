import logo from './logo.svg';
import './App.css';

// function-based component
// A component must always have a return statement
// It must always return a react element called react component(JSX)
// JSX is the combination of html tags. It expands the ability of html(html on steriods)
function App() {
  return (
    // JSX
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      React is very interesting...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
