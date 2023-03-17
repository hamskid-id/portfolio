
import './App.css';
import { HomeScreen } from './components/homescreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <HomeScreen/>
      <ToastContainer />
    </div>
  );
}

export default App;
