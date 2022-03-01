import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import EmployeeListPage from './components/List/List';
import { useState } from 'react';



function App() {
  //employee state
  const [dataEmployees, setDataEmployees] = useState([{
    id: Number,
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  }])
  const addEmployee = (newEmployee) => {
    setDataEmployees([...dataEmployees, { ...newEmployee }]);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home addEmployee={addEmployee} />} />
          <Route path="/list" element={<EmployeeListPage data={dataEmployees} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Route path="/list" element={<List/>}/>
