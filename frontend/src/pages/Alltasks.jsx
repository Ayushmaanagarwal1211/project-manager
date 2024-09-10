import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Alltasks = () => {
    const [InputDiv, setInputDiv] = useState("hidden");
    const [tasks, setTasks] = useState([]);

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
            body: JSON.stringify(formData),
        });
        data = await data.json();
        setTasks([...data.data]);
    }

    return (
        <>
            <div className="flex flex-row md:flex-row h-[98vh] gap-4 p-4">
                {/* Sidebar */}
                <div className="w-auto md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-row justify-between">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">
                    <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tasks.map((task, index) => (
                            <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white">
                                <h2 className="text-xl font-semibold">{task.title}</h2>
                                <p className="text-gray-700 mb-2">{task.desc}</p>
                                <p className={`text-sm ${task.complete ? 'text-green-600' : 'text-red-600'}`}>
                                    {task.complete ? 'Completed' : 'Incomplete'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Alltasks;
