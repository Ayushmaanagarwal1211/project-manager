import React, { useRef } from 'react'
import { IoMdCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
export default function EditPopup({ InputDiv, setInputDiv }) {
    let title=useRef()
    let desc=useRef()
async function handleClick(e)
{
    e.preventDefault()
    let formData={
        id:localStorage.getItem("id"),
        title:title.current.value,
        desc:desc.current.value
      }
      let token=localStorage.getItem("token")

      console.log(formData,token)
      const response = await fetch('http://localhost:3001/api/v2/update-task', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,       
        },
        body: JSON.stringify(formData),
      });
      window.location.reload()
}
  return (
    <>

        <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
        <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-gray-900 p-4 rounded">
            <div className="text-xl flex justify-between items-end mb-4">
            <button  onClick={()=>setInputDiv("hidden")} className="text-gray-300 hover:text-gray-100">
                <IoMdCloseCircle />
            </button>
            </div>
            <form >
            <input
                type="text"
                placeholder="Title"
                // value={newTask}
                ref={title}
                // onChange={(e) => setNewTask(e.target.value)}
                className="w-full p-2 mb-4 rounded"
            />
            <textarea
                placeholder="Description"
                ref={desc}
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mb-4 rounded"
            />
          
            <br></br>
            <button onClick={handleClick} type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
        </div>
    </>
  )
}
