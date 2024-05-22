import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
    <pre>{process.env.REACT_APP_TEST_ENV}</pre>
    </div>
  );
}

export default App;
