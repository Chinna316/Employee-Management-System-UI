import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from './Services/EmployeeService'

const UpdateEmployee = () => {
    const navigate = useNavigate()
    const {id} = useParams;
    const [employee, setemployee] = useState(    {
        id:id,
        firstName:"",
        lastName:"",
        email:"",
    })

    const handlechange = (e) =>{
        const value = e.target.value;
        setemployee({...employee,[e.target.name] : value})
    }

    const updateEmployee = (e) => {
    e.preventDefault()
    EmployeeService.updateEmployee(employee, id).then((response) => {navigate('/EmployeeList')})
    .catch((error) => {
        console.log(error)
    })
    }

    useEffect(() => {
        const fetchData = async() => {
        try {
            const response = await EmployeeService.getEmployeeById(id);
            setemployee(response.data)
        }
        catch(error) {
            console.log(error);
        }
    }
    fetchData();
    }, [])


    
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b-2">
    <div className="px-8 py-8">
    <div className='font-thin text-2xl tracking-wider'>
      <h1>Update Employee</h1>
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
    <button onClick= {updateEmployee}className='bg-green-700 rounded hover:bg-green-400 px-2 mt-2 py-1'>Update</button>
    <button onClick={() => navigate('/EmployeeList')}className='bg-red-700 rounded hover:bg-red-400 px-2 mt-2 py-1'>Cancel</button>
</div>

</div>
</div>
  )
}

export default UpdateEmployee