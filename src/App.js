// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import FacultyFormComponent from "./components/Signup";
import ApiUseEffects from "./components/getonefaculty";
import ApiGetall from "./components/getallfaculty";
import AdminFormComponent from "./admin/Signup";
import LeaveFormComponent from "./leavereq/applyleave";
import DataFetching from "./admin/datafetchingtable";
import LeaveRequestList from "./admin/approveleave";
import LeaveFetching from "./admin/alllleavefetch";
import LeaveApproval from "./admin/leaveapproval";
import Alogin from "./admin/Login";
import Mainadmin from "./admin/mainadmin";
import SuccessPage from "./components/success";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<FacultyFormComponent/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/getallfaculty" element={<ApiUseEffects/>}/>
          <Route path="/getonefaculty" element={<ApiGetall/>}/>
          <Route path="/asignup" element={<AdminFormComponent/>}/>
          <Route path="/leavereq" element={<LeaveFormComponent/>}/>
          <Route path="/leavereq" element={<LeaveFormComponent/>}/>
          <Route path="/dfetch" element={<DataFetching/>}/>
          <Route path="/approvereq" element={<LeaveRequestList/>}/>
          <Route path="/lfetch" element={<LeaveFetching/>}/>
          <Route path="/lapprove" element={<LeaveApproval/>}/>
          <Route path="/alogin" element={<Alogin/>}/>
          <Route path="/mainadmin" element={<Mainadmin/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;