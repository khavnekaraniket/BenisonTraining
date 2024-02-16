import { useSelector } from 'react-redux';
import '../css/NavBarPage.css';

function NavBarPage() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div className={mystate.loggedIn ? 'hidden' : 'visible'}>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="brand">
            Benison Training
          </a>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="/Home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/Registration" className="nav-link">
                Registration
              </a>
            </li>
            <li className="nav-item">
              <a href="/SignUp" className="nav-link">
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarPage;




















































// import { useSelector } from 'react-redux';

// function NavBarPage(){
//     const mystate = useSelector((state) => state.logged);
//     return(
      

//         <div style={{ display: mystate.loggedIn ? "none" : "block " }}>
//           <nav className="navbar navbar-expand-lg bg-light" style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.4)" }}>
//             <div className="container-fluid">
//               <a className="navbar-brand" href="/">
//                 Benison Training
//               </a>
//               <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                 <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="/Home">
//                       Home
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="/Registration">
//                       Registration
//                     </a>
//                   </li>                
//                   <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="/SignUp">
//                       SignUp
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
  
  
//         </div>
//     )
// }
// export default NavBarPage ;

