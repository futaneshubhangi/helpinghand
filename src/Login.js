import './login.css';

import email from "./images/email.png";
import pass from "./images/pass.png";
function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
      
             

           </div>


         </div>
         <div>
           <h2>Log in </h2>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="email/user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#"><h5>Forgot password ?</h5></a> Or<a href="#"><h5>Sign Up</h5></a>
            </p>
            

           
 
         </div>
       </div>
       

     </div>
  
  );
}

export default Login;