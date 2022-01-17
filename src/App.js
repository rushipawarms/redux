
import './App.css';
import Bat from './Components/Bat';
import {Provider} from 'react-redux'
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Bat/>
      </Provider>
  
    </div>
  );
}

export default App;
