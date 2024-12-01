import React from 'react'
import useTaskStore from '../store/TaskStore'

export default function Task({ id, status, title, description, created_at, updated_at }) {
    const deleteTask = useTaskStore((state) => state.deleteTask)
    const markAsDone = useTaskStore((state) => state.markAsDone)
    const markAsPending = useTaskStore((state) => state.markAsPending)

    return (
        <div className=' border border-black m-2'>
            <div className='justify-items-start items-center p-1'>
                <h1 className=' text-2xl'>{title}</h1><span>{status}</span>
                <p className=' text-base'>updated_at - created_at</p>
            </div>
            <hr />
            <p className=' text-lg m-2'>
                Task Description
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ex eligendi error doloribus voluptas quisquam exercitationem dolorum distinctio laborum facilis omnis eius magni sequi possimus, aperiam quam provident mollitia numquam.
                Sapiente repellat nesciunt debitis cumque nam minima facere officiis ipsam, inventore, laborum dolorum dolor quo. Dignissimos obcaecati voluptates repudiandae, magnam fuga ducimus eius temporibus aspernatur, culpa adipisci nulla quaerat maiores.
            </p>
            <div className=' flex justify-between items-center'>
                <button
                    className='bg-blue-500 text-white px-4 py-2 m-2 rounded'
                >
                    Edit
                </button>
                <button
                    className='bg-red-500 text-white px-4 py-2 m-2 rounded'
                    onClick={() => deleteTask(id)}
                >
                    Delete
                </button>
                {status === 'done' ? <button
                    className='bg-orange-500 text-white px-4 py-2 m-2 rounded'
                    onClick={() => markAsPending(id)}
                >
                    pending
                </button> : <button
                    className='bg-green-500 text-white px-4 py-2 m-2 rounded'
                    onClick={() => markAsDone(id)}
                >
                    Done
                </button>}
            </div>
        </div >
    )
}
