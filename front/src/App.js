import "./Styles/ResetCss.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import Login from "./Components/Login/Login";
import SearchByCPF from "./Components/SearchByCPF/SearchByCPF";
import HomePage from "./Components/HomePage/HomePage";
import SearchBySUSNumber from "./Components/SearchBySUSNumber/SearchBySUSNumber";
import RegisterUser from "./Components/RegisterUser/RegisterUser";
import SearchResult from "./Components/SearchResult/SearchResult";
import GetUser from "./Components/SearchResult/GetUser.js";
import PatientInformation from "./Components/PatientInformation/PatientInformation.js";
import GetPatientInformation from "./Components/PatientInformation/GetPatientInformation.js";
import ChangePassword from "./Components/ChangePassword/ChangePassword.js";

function App() {
  const logout = "https://taubatende-back.herokuapp.com/logout";

  return (
    <>
      <UserContext.Provider value={{ logout }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/searchbycpf" element={<SearchByCPF />} />
            <Route path="/searchbysusnumber" element={<SearchBySUSNumber />} />
            <Route path="/registeruser" element={<RegisterUser />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/getuser" element={<GetUser />} />
            <Route path="/patientinformation" element={<PatientInformation />} />
            <Route path="/getpatientinformation" element={<GetPatientInformation />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>

    </>
  );
}

export default App;
