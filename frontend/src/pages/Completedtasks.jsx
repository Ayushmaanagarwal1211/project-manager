// import React, { useState, useEffect } from "react";
// // import Cards from "../components/Cards";
// // import axios from "axios";
// import './styles.css';

// const CompletedTasks = () => {
//     const [data, setData] = useState(null); // Initialize state with null or empty array

//     const headers = {
//         id: localStorage.getItem("id"),
//         Authorization: `Bearer ${localStorage.getItem("token")}`, // Correct template literal
//     };

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await axios.get(
//     //                 "http://localhost:1000/api/v2/get-complete-tasks",
//     //                 { headers }
//     //             );
//     //             setData(response.data.data); // Assuming response.data.data is an array
//     //         } catch (error) {
//     //             console.error("Error fetching data", error);
//     //         }
//     //     };

//     //     fetchData();
//     // }, []); // Empty dependency array to fetch data once on mount

//     return (
//         <div className="p-4 sm:p-6 md:p-8 lg:p-10">
//             {/* Pass data as a prop if Cards component expects data */}
//             <Cards home={"false"} data={data} />
//         </div>
//     );
// }

// export default CompletedTasks;
