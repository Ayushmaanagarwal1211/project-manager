import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddProject() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending');
  let [users,setUser]=useState([])
  let [team,setTeam]=useState([])
  let [manager,setManager]=useState('')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData(){
        let data=await fetch("http://localhost:3001/api/v1/users",{
            method:"GET"
        })
        data=await data.json()
        console.log(data)
        setUser([...data.users])
    }
  const handleSubmit =  async (event) => {
    event.preventDefault();
    
    // Clear any previous error or success messages
    setError('');
    setSuccess('');
const formData={
    projectName:projectName,
    description:description,
    status:status,
    manager:manager,
    members:team
}
console.log(formData)
    try {
      const response = await fetch('http://localhost:3001/create-project', {
        method:"POST",headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
        
      });
console.log(response)
      if (response.status === 200) {
        setSuccess('Project added successfully!');
        // Optionally, reset form fields
        setProjectName('');
        setDescription('');
        setDueDate('');
        setStatus('pending');
      }
    } catch (err) {
      setError('Failed to add project. Please try again.');
    }
  };

  function handleClick(index){
    console.log(index)
    setManager(users[index]._id)
  }
  function addTeam(index){
    setTeam((prev)=>[...prev,users[index]._id])
  }
  return (
    <div className="add-project-page">
      <header className="page-header">
        <h1>Add New Project</h1>
      </header>

      <section className="add-project-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <select>
            {
                users.map((data,index)=>{
                   return data.role=="manager" && <option value={index} onClick={()=>handleClick(index)}> {data.username}</option>
                })
            }
          </select>
          <br></br>
          <select>
            {
                users.map((data,index)=>{
                   return data.role=="team member" && <option value={index} onClick={()=>addTeam(index)}> {data.username}</option>
                })
            }
          </select>
        
          
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <button type="submit" className="submit-button">Add Project</button>
        </form>
        
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </section>
    </div>
  );
}
