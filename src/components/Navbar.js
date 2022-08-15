import {Link} from "react-router-dom"
const Navbar = () => {
return(
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    <a className="navbar-brand" href="#">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LCX0ned2lt0-ysO2NRhg0ihh0V5ovNFNsQ&usqp=CAU" alt="" width="70" height="70" />Helping Hand
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" class="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" class="nav-link">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/account" class="nav-link">Account</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" class="nav-link">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/team" class="nav-link">Team</Link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </>
)

}
export default Navbar;