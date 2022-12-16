import './App.css';
import AddEmployees from './components/AddEmployees';
import EmployeeList from './components/EmployeesList';
import Header from './components/Header';
import UpdateEmployees from './components/UpdateEmployees';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<EmployeeList/>} />
      <Route path='/employees/add' element={<AddEmployees/>} />
      <Route path='/employees/:empID/update' element={<UpdateEmployees/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
