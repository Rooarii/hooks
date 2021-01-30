import logo from './logo.svg';

// import components
import Axios from './components/Axios'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import WaitAxiosRender from './components/WaitAxiosRender'

// import style
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="test">test</h1>
        <WaitAxiosRender />
        {/* <Axios />
        <UseState />
        <UseEffect /> */}
      </header>
    </div>
  );
}

export default App;
