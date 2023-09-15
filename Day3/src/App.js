import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login.js';
import StudentRegister from './Pages/StudentRegister';
import Home from './Pages/Home';
import InstructorRegister from './Pages/InstructorRegister';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Home/>}></Route>
    <Route path="/login" element ={<Login/>}></Route>
    <Route path="/register" element ={<StudentRegister/>}></Route>
    <Route path="/instructor" element ={<InstructorRegister/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
