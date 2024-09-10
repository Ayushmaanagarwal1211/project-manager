import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Sidebar from '../components/Sidebar'

export default function Dash() {
    const [InputDiv, setInputDiv] = useState("hidden");
    let token=localStorage.getItem("token")
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData(){
        console.log(token)
      let data= await fetch("http://localhost:3001/api/v1/get",{
        method:"GET",
            headers: {
                'authorization': `Bearer ${token}` // Forward the token in the proper format
            }
        })
        data=await data.json()
        console.log(data,'user')
        data=data.users
        let user=JSON.stringify(data)
        localStorage.setItem("user",user)
            fetchData1()
        
    async function fetchData1(){
      let project =  await fetch('http://localhost:3001/getprojects',{method:"GET"})
    project=await project.json()
    console.log(project,'sdsdsds')
    if(project.length>0){

      if(JSON.parse(localStorage.getItem("user")).role=='manager' ){
          let arr=project.projects.filter((item)=>item.manager==JSON.parse(localStorage.getItem("user")).id)
          arr=JSON.stringify([...arr])
          localStorage.setItem("project",arr)
      }else if(JSON.parse(localStorage.getItem("user")).role=='team member' ){
  
          let arr=project.projects.filter((item)=>item.members.includes(JSON.parse(localStorage.getItem("user")).id))
        console.log(arr,'ARR')
          arr=JSON.stringify([...arr])
          localStorage.setItem("project",arr)
      }
    }
    
    }
       
    }
  return (
    <div className="flex flex-row md:flex-row h-[98vh] gap-4 p-4">
    {/* Sidebar */}
    <div className="w-auto md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-row justify-between">
        <Sidebar />
    </div>

    {/* Main Content */}
    <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">
        {/* <Outlet /> */}
       <Cards InputDiv={InputDiv} setInputDiv={setInputDiv}/>
    </div>
</div>
  )
}
