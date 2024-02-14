//import logo from './logo.svg';
import './App.css';
import Registration from './component/RegistrationPage';
import { Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import store from './store';
import { Route } from 'react-router-dom';



function App() {
  const mystate=useSelector((state)=>state.logged);
  return (
   
    <div> 

        <div style={{display:mystate.loggedIn?"none":"block "}}>
        <nav className="navbar navbar-expand-lg bg-light" style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.4)" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Benison Training
            </a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Registration">
                    Registration
                  </a>
                </li>
                
                 {/* <li className="nav-item">
                  <a className="nav-link" href="/Navbar">
                    Contact
                  </a>
                </li> */}
                {/*<li className="nav-item">
                  <a className="nav-link" href="/homeviewservicecenter">
                    Service Centers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SignUp
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/customerregistration">
                        User
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/servicecenterregistration">
                        Service Center
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        </div>
        <div>
        <div className="d-flex align-items-center justify-content-center">
          <div
            style={{ textAlign: "center" }}
            className="text-black shadow rounded-3 container-fluid"
          >
           
         <Routes>
          <Route path="Registration" element={<Registration/>}></Route>
          
               {/* <Route path="customerregistration" element={<CustomerRegistration/>}></Route>
              <Route path="customerregistrationcopy" element={<CustomerRegistrationcopy/>}></Route>
              <Route
                path="servicecenterregistration"
                element={<ServiceRegistration/>}
              ></Route>
              <Route path="login"
                element={<LoginNewPage/>}></Route>
                <Route path="userlogin"
                element={<LoginNewPage/>}></Route>
                <Route path="homeviewservicecenter" element={<HomeviewServiceCenter/>}></Route>
                {/* _____________________Customer Nav Bar Link_______________ */}
              {/* <Route path="customerhome" element={<CustomerHome/>}>
                    <Route path="serviceprogress" element={<ServiceProgress/>}></Route>
                    <Route path="changepassword" element={<ChangePassword/>}></Route>
                    <Route path="viewServiceCenter" element={<ViewServiceCenter/>}></Route>
                    <Route path="bookingservice" element={<BookingService/>}></Route>
                    <Route path="payment" element={<Payment/>}></Route>
                     <Route path="rating" element={<Rating/>}></Route>
                     
              </Route>
              <Route path="invoice" element={<Invoice/>}></Route>
              <Route path="/logout" element={<Logout/>}></Route>
         */}
             
                 {/*__________________________Service Centre Bar LinK  */}     
                {/* <Route path="servicehome" element={<ServiceHome/>}>
                <Route path="viewbookings" element={<BookingList/>}></Route>
                <Route path="updateprice" element={<UpdatePrice/>}></Route>
                <Route path="updatestatus" element={<UpdateStatus/>}></Route>
                </Route>
            
             
             <Route path="bookinglist" element={<BookingList />}></Route>
                
               
                
                <Route path="Home" element={<Home/>}></Route>
                <Route path="contacts" element={<ContactUs/>}></Route>
               
                
               
                <Route path="/" element={<Home/>}></Route> 
                {/* _____________________Admin__________________________ */}

               

                {/* <Route path="/admin_Home" element={<AdminHome/>}>

                <Route path="Verifycenters" element={<AdminServiceCenterVerification/>}></Route>
                <Route path="allLogin" element={<LoginListWithDelete/>}></Route>
                <Route path="allbooking" element={<ViewBookings/>}></Route>
               
                <Route path="viewTransactions" element={<GetTransaction/>}></Route>

                </Route>  */}

               
                </  Routes>
                
                
                </div>
        </div>
      </div>
      <br />
    </div>
   


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
