import './App.css';
import Tempapp from './components/Tempapp';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/weather-details/:cityname" element={<Tempapp />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
