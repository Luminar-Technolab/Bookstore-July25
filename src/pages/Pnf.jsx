import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
      <img width={'25%'} src="https://webytag.com/wp-content/uploads/2024/07/c19fc414b5c17a9e286bd53c5ab19e7c.gif" alt="pnf" />
      <p>Oh!! No..</p>
      <h1 className="text-blue-600 text-2xl">Look Like You're Lost!</h1>
      <p>The Page your Looking is not avaliable</p>
      <Link to={'/'} className='bg-black py-2 px-3 rounded my-3 text-white'>Home</Link>
    </div>
  )
}

export default Pnf