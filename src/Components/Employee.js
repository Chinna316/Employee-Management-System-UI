import React from 'react'

const Employee = ({employee}) => {
  return (
    <tr key={employee.id}>
     <td className='text-left'> <div className='text-sm px-5'>{employee.firstName}</div> </td>
     <td className='text-left'> <div className='text-sm px-5'>{employee.lastName}</div> </td>
     <td className='text-left '> <div className='text-sm px-5'>{employee.email}</div> </td>
     <td className='text-right'>
      <a href='#' className='px-5 text-blue-500 hover:text-blue-900'>Edit</a>
      <a href='#' className='px-5 text-blue-500 hover:text-blue-900'>Delete</a>
     </td>
    </tr>
  )
}

export default Employee