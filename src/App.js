//import logo from './logo.svg';
import './App.css';
import Registration from './component/RegistrationPage';
import { Routes } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import Footerpage from './component/FooterPage'
// import store from './store';
import { Route } from 'react-router-dom';
import NavBarPage from './component/NavBarPage';



function App() {
  
  return (

    <div>

      <NavBarPage></NavBarPage>
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div
            style={{ textAlign: "center" }}
            className="text-black shadow rounded-3 container-fluid"
          >

            <Routes>
              <Route path="Registration" element={<Registration />}></Route>


            </  Routes>

            <Footerpage></Footerpage>
          </div>

        </div>

      </div>
      <br />

    </div>





  );
}

export default App;
