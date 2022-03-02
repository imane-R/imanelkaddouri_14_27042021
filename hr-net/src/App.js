import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header/Header';
import CreateEmployee from './components/pages/CreateEmployee/CreateEmployee';
import EmployeeListPage from './components/pages/EmployesList/List';
import { useState } from 'react';



function App() {
  //employee state
  const [dataEmployees, setDataEmployees] = useState([{
    id: '9',
    firstName: 'jane',
    lastName: 'eyer',
    dateOfBirth: '08/06/95',
    startDate: '08/06/22',
    street: 'visca',
    city: 'Alaa',
    state: 'Alaska',
    zipCode: '23009',
    department: 'Sales',
  }])
  const addEmployee = (newEmployee) => {
    setDataEmployees([...dataEmployees, { ...newEmployee }]);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee addEmployee={addEmployee} />} />
          <Route path="/list" element={<EmployeeListPage data={dataEmployees} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Route path="/list" element={<List/>}/>
