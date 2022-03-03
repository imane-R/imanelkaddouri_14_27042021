import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header/Header';

const CreateEmployee = React.lazy(() => import("./components/pages/CreateEmployee/CreateEmployee"));
const EmployeeListPage = React.lazy(() => import("./components/pages/EmployesList/List"));




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
          <Route path="/" element={<React.Suspense fallback={<>...</>}>
            <CreateEmployee addEmployee={addEmployee} />
          </React.Suspense>} />
          <Route path="/list" element={<React.Suspense fallback={<>...</>}>
            <EmployeeListPage data={dataEmployees} />
          </React.Suspense>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Route path="/list" element={<List/>}/>
