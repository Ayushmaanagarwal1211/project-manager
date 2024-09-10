import React from 'react';
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs"; // Chat icon
import { Link } from 'react-router-dom';
import './sidebar.css'; // Adjust the path as needed

const Sidebar = () => {
    const data = [
        {
            title: "Home",
            icon: <CgNotes className="icon" />,
            link: '/home',
        }
        ,{
            title: "All tasks",
            icon: <CgNotes className="icon" />,
            link: '/alltasks',
        },{
            title: "Incomplete tasks",
            icon: <CgNotes className="icon" />,
            link: '/incompletetasks',
        },{
            title: "Completed tasks",
            icon: <CgNotes className="icon" />,
            link: '/completedtasks',
            
        },{
            title: "Project Details",
            icon: <CgNotes className="icon" />,
            link: '/projectdetails',
            
        }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>The code master is</h2>
                <h4>{localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).name}</h4>
                <hr />
            </div>
            <div className="sidebar-nav">
                {data.map((item, index) => (
                    <Link to={item.link} key={index} className="sidebar-item">
                        <div className="icon">{item.icon}</div>
                        <div className="title">{item.title}</div>
                    </Link>
                ))}
            </div>
            <div className="sidebar-footer">    
                {/* Chat Button */}
                <Link to="/chat" className="sidebar-item sidebar-chat">
                    <div className="icon">
                        <BsChatDots />
                    </div>
                    <div className="title">Chat</div>
                </Link>
                {/* Logout Button */}
                <button onClick={()=>window.location.href="/"} className="logout-button">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
