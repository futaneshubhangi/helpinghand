import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
//import Footer from './components/Footer';
// import Home from './Home';
// import Account from './Account';
// import About from './About';
// import Team from './Team';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      
      <Routes>

        {/* <Route path="/"  element={<Home/>}/> */}
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/account" element={<Account/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>  */}

        </Routes>
        </Router>
       
     {/* <Footer/> */}
    </div>
  );
}

export default App;
