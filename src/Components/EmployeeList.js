import {React, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Employee from './Employee'
import EmployeeService from './Services/EmployeeService'

const EmployeeList = () => {

  const [employee, setemployee] = useState(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      setloading(true)
      try{
        const response = await EmployeeService.getEmployee();
        setemployee(response.data);
      }
      catch (error){
        console.log("Error")
      }
      setloading(false)
    }
    fetchData();
   
  }, [])
  
  const navigate = useNavigate();
  return (
    <div className='container mx-auto my-8'>
        <div className='h-12 '>
            <button onClick={() => navigate("/addEmployee")}className='bg-slate-600 rounded shadow border-b mx-6 my-2 px-2 py-2 text-white'>
              Add Employee
            </button>
        </div>
        <div className='flex shadow border-b my-3'>
           <table className='min-w-full'>
              <thead className='bg-gray-200'>
                <tr>
                    <th className='text-left font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>FirstName</th>
                    <th className='text-left font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>LastName</th>
                    <th className='text-left font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>Email</th>
                    <th className='text-right font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>Actions</th>
                </tr>
              </thead>
              {!loading && (
              <tbody className='bg-white'>
                {employee.map((employee) => 
                <Employee employee={employee} key={employee.id}></Employee>
                )}
              </tbody>
              )
              }
            </table>
        </div>    
    </div>
  )
}

export default EmployeeList