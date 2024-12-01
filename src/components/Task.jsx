import React from 'react'

export default function Task() {
    return (
        <div className=' border border-black'>
            <div className='flex justify-items-start items-center'>
                <h1 className=' text-2xl'>Task Title</h1>
                <p className=' text-base'>updated_at</p>
            </div>
            <p className=' text-lg'>Task Description</p>
            <div className=' flex justify-between items-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Edit</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
                <button className='bg-green-500 text-white px-4 py-2 rounded'>Done</button>
            </div>
        </div>
    )
}
