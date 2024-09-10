import React from 'react';
import Cards from '../components/Cards';
import './styles.css';
import Sidebar from '../components/Sidebar';

const ImportantTasks = () => {
    return (
        <div className="flex flex-row md:flex-row h-[98vh] gap-4 p-4">
            {/* Sidebar */}
            <div className="w-auto md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-row justify-between">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">
                <div>sdsdsd</div>
            </div>
        </div>
    );
}

export default ImportantTasks;
