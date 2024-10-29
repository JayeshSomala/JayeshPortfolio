import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainPage} from './components/MainPage';
import {JayeshPortfolio} from './components/JayeshPortfolio';
import {PranjalPortfolio} from './components/PranjalPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JayeshPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
