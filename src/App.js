import './App.css';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/EmployeeList';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<EmployeeList />}></Route>
    <Route path='/EmployeeList' element={<EmployeeList />}></Route>
    <Route path='/AddEmployee' element={<AddEmployee />}></Route>
    <Route index element={<EmployeeList />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
