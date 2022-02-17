import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import EmployeeListPage from './components/List/List';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<EmployeeListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Route path="/list" element={<List/>}/>
