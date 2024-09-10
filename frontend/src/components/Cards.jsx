// components/Cards.js
import React, { useEffect, useState } from 'react';
import { IoAddCircle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";  // Like icon
import { FaEdit } from "react-icons/fa";   // Edit icon
import { MdDelete } from "react-icons/md"; // Delete icon
import InputData from './Inputdata';
import EditPopup from './EditPopup';
import {FaCheck} from 'react-icons/fa6'
const Cards = ({ InputDiv, setInputDiv }) => {
  let user = localStorage.getItem('user');
  let [tasks, setTasks] = useState([]);
let [InputDiv1,setInputDiv1]=useState("hidden")
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let project = JSON.parse(localStorage.getItem('project'))[0]._id;
    let formData = { project: project };

    let data = await fetch("http://localhost:3001/api/v2/get-all-tasks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    data = await data.json();
    data = data.data.filter((d) => d.user == JSON.parse(user).id);
    setTasks([...data]);
  }
async function handleStatusChange(task){
  let formData={
    id:task._id
  }
  let token=localStorage.getItem("token")
  console.log(formData,token)
  const response = await fetch('http://localhost:3001/api/v2/changestatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,       
    },
    body: JSON.stringify(formData),
  });
  window.location.reload()
}
  // Handle Like Button Click
  const handleLike = (task) => {
    console.log(`Liked task: ${task.title}`);
  };

  // Handle Edit Button Click
  const handleEdit = (task) => {
    console.log(`Editing task: ${task.title}`);
    setInputDiv1("block")
    localStorage.setItem("id",task._id)
  };

  // Handle Delete Button Click
  const handleDelete = async (task) => {
    console.log(`Deleting task: ${task.title}`);
    let formData={
      id:task._id
    }
    let token=localStorage.getItem("token")
    console.log(formData,token)
    const response = await fetch('http://localhost:3001/api/v2/delete-task', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,       
      },
      body: JSON.stringify(formData),
    });
    window.location.reload()

    // Add functionality for deleting the task (API call)
  };

  return (
    <div className='p-4'>
      {/* Title Heading */}
      <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
        Your Tasks
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {/* Render each task */}
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className='text-xl font-semibold text-gray-800'>{task.title}</h2>
            <p className='text-sm text-gray-500 mt-2'>{task.desc || 'No description available.'}</p>
            <div className='mt-4 flex justify-between'>
              <p className={`text-sm ${task.complete ? 'text-green-600' : 'text-yellow-500'}`}>
                Status: {task.complete?"Completed":"Incomplete"}
              </p>
              {/* <p className='text-sm text-gray-500'>Due: {task.dueDate || 'N/A'}</p> */}
            </div>

            {/* Buttons Section: Like, Edit, Delete */}
            <div className='mt-4 flex justify-around items-center'>
              {/* Like Button */}
             

              {/* Edit Button */}
           {
user && JSON.parse(user).role=="manager" &&
<>
<button
  className='text-blue-500 hover:text-blue-700 transition-colors'
  onClick={() => handleEdit(task)}
>
  <FaEdit className='text-2xl' />
</button>

{/* Delete Button */}
<button
  className='text-gray-700 hover:text-gray-900 transition-colors'
  onClick={() => handleDelete(task)}
>
  <MdDelete className='text-2xl' />
</button>
<FaCheck onClick={()=>handleStatusChange(task)}/>
</>
           }
            </div>
          </div>
        ))}

        {/* Manager-specific add button */}
        {localStorage.getItem('role') === 'manager' && (
          <button
            className='flex flex-col justify-center items-center bg-gray-800 text-white p-6 rounded-lg hover:scale-105 cursor-pointer transition-transform duration-300'
            onClick={() => setInputDiv("fixed")}
          >
            <IoAddCircle className='text-5xl' />
            <span className="mt-2 text-lg">Add Task</span>
          </button>
        )}
      </div>

      {/* InputData component for adding tasks */}
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
      <EditPopup InputDiv={InputDiv1} setInputDiv={setInputDiv1}/>
    </div>
  );
}

export default Cards;
