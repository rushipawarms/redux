
import './App.css';
import Bat from './Components/Bat';
import {Provider} from 'react-redux'
import store from './Redux/store';
import Ball from './Components/Ball';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Bat/>
      <Ball/>
      <Users/>
      </Provider>
  
    </div>
  );
}

export default App;
