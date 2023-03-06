import React from 'react'

const Employee = ({employee, deleteEmployee}) => {
  return (
    <tr key={employee.id}>
     <td className='text-left'> <div className='text-sm px-5'>{employee.firstName}</div> </td>
     <td className='text-left'> <div className='text-sm px-5'>{employee.lastName}</div> </td>
     <td className='text-left '> <div className='text-sm px-5'>{employee.email}</div> </td>
     <td className='text-right'>
      <button className='px-5 text-blue-500 hover:text-blue-900 hover:cursor-pointer'> Edit </button>
      <button onClick={(e, id) => deleteEmployee(e, employee.id)} className='px-5 text-blue-500 hover:text-blue-900 hover:cursor-pointer'>Delete</button>
     </td>
    </tr>
  )
}

export default Employee