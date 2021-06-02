import logo from './assets/kbc.jpg';
import '../App.css';
import {BrowserRouter as Route, useHistory} from 'react-router-dom';
function Home() {
  let history=useHistory();
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} alt="kbc-logo" className="App-logo"/>
       <button className="App-button" onClick={()=>{history.push('/quiz')}}>Play</button>
      </header>
    </div>
  );
}

export default Home;
