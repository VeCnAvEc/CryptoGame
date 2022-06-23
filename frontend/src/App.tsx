import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/elements/Header';
import BotsPage from './pages/BotsPage';
import ConnectPage from './pages/ConnectPage';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/connect' element={<ConnectPage />}/>
        <Route path='/partner' element={<StartPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/info' element={<InfoPage />}/>
        <Route path='/bots' element={<BotsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
