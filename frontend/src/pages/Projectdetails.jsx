import React from 'react'
import Sidebar from '../components/Sidebar';

export default function Projectdetails() {

    let project = JSON.parse(localStorage.getItem('project'))[0];

    console.log(project)
  return (
    <div className="flex flex-row md:flex-row h-[98vh] gap-4 p-4">
        {/* Sidebar */}
        <div className="w-auto md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-row justify-between">
            <Sidebar />
        </div>
        <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">

        <h1 className='text-center text-2xl'>Project Details</h1>
        <div>
            <span>Project Name :</span>{project.projectName}
        </div>
        <div>
            <span>Project Description : </span>{project.description}
        </div>
    </div>
    </div>
  )
}
