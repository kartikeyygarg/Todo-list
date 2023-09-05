"use client"
import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])


  const submitHandler = (e)=>{
    e.preventDefault()
    setmaintask([...maintask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(maintask)
  }
  const deleteHandler = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let renderTask = <h2>No Task Found</h2>

  if(maintask.length>0){
    renderTask = maintask.map((t,i)=>{
      return(
      <li key={i} className='flex items-center justify-between mb-4'>
        <div className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6> 
  
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-600 text-white font-semibold rounded px-4 py-2'>Delete</button>
      </li>
      )
    })
  }
  return (
    <>
    <h1 className='bg-black text-white p-4 text-4xl font-bold text-center'>Kartikey's ToDo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className="text-2xl border-zinc-800 border-4 m-16 px-4 py-2 rounded"
      placeholder='Enter Task'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
       <input type="text" className="text-2xl border-zinc-800 border-4 m-10 px-4 py-2 rounded"
      placeholder='Enter Description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

<button className='text-white px-4 py-3 text-2xl font-bold rounded m-12' style={{ backgroundColor: 'green' }}> Add Task </button>
    </form>
    <hr></hr>
    <div className='p-6 bg-orange-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page