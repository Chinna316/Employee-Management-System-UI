import React, { useState } from 'react'
import EmployeeService from './Services/EmployeeService';

const AddEmployee = () => {

const [employee, setemployee] = useState(
    {
        id:"",
        firstName:"",
        lastName:"",
        email:"",
    }
)


const handlechange = (e) =>{
    const value = e.target.value;
    setemployee({...employee,[e.target.name] : value})
}

const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then((Response) => {
    console.log(Response);
    })
    .catch((error) => {
        console.log(error);
    })
    setemployee({ 
        id:"",
        firstName:"",
        lastName:"",
        email:"",})
}


const reset = (e) => {
    e.preventDefault();
    setemployee({ 
    id:"",
    firstName:"",
    lastName:"",
    email:"",})
}

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b-2">
        <div className="px-8 py-8">
        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add New Employee</h1>
        </div>
       
    

    <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>
            FirstName
        </label>
        <input 
           type="text"
           name='firstName'
           value={employee.firstName}
           onChange={(e) => handlechange(e)}
           className='h-10 w-96 border mt-2 px-2 py-2'></input>
    </div>

    <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>
            LastName
        </label>
        <input 
           type="text"
           name='lastName'
           value={employee.lastName}
           onChange={(e) => handlechange(e)}
           className='h-10 w-96 border mt-2 px-2 py-2'></input>
    </div>

    <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>
            Email
        </label>
        <input 
           type="email"
           name='email'
           value={employee.email}
           onChange={(e) => handlechange(e)}
           className='h-10 w-96 border mt-2 px-2 py-2'></input>
    </div>

    <div className='items-center justify-center h-14 w-full my-4 space-x-5 text-white'>
        <button onClick={saveEmployee}className='bg-green-700 rounded hover:bg-green-400 px-2 mt-2 py-1'>Save</button>
        <button onClick={reset}className='bg-red-700 rounded hover:bg-red-400 px-2 mt-2 py-1'>Clear</button>
    </div>

  </div>
  </div>
  )
}

export default AddEmployee