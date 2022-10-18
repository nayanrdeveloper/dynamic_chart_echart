import React from 'react'
import {FiMenu} from 'react-icons/fi'

function NavBar(props: any) {
  return (
    <div className='container bg-slate-500 text-white w-screen'>
        <div className='flex justify-between p-3'>
            <div className='flex gap-2 justify-items-center'>
                <FiMenu className='my-auto text-2xl cursor-pointer' onClick={() => props.setSideBarOpen(!props.open)} />
                <h1 className='text-2xl'>Digital Chart</h1>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default NavBar