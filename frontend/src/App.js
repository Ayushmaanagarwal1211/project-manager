import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signin from './components/Signin';
// import DashboardNav from './components/DashboardNav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './components/Landing';
import Alltasks from './pages/Alltasks';
import Home from './pages/Home';
import ImportantTasks from './pages/Importanttasks';
import CompletedTasks from './pages/Completedtasks';
import IncompletedTasks from './pages/Incompletedtasks';
import AddProject from './components/AddProject';
import Dash from './pages/Dash';
import Projectdetails from './pages/Projectdetails';
// import AddProject from './components/AddProject';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/add-project" component={AddProject} /> */}
          <Route  path='/' element={<Landing/>}/>
          <Route path='/login'element={<Login/>}></Route>
          <Route path='/signup'element={<Signin/>}></Route>
          <Route exact path='/dashboard' element={<Home />}>
          </Route>  
          <Route path='/home' element={<Dash />}/>

          <Route path='/alltasks' element={<Alltasks />}/>
          <Route path='/importanttasks' element={<ImportantTasks />}/>
          <Route path='/completedtasks' element={<CompletedTasks />}/>
          <Route path='/incompletedtasks' element={<IncompletedTasks />}/>



          <Route path="/admin" element={<AddProject/>}></Route>
          <Route path='/incompletetasks' element={<IncompletedTasks/>}></Route>
          <Route path='/completedtasks' element={<CompletedTasks/>}></Route>
<Route path='/projectdetails' element={<Projectdetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
