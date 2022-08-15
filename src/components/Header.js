import Lottie from "lottie-react";
import anim from "../Annimation/115478-webdesign-support.json";
const Header = () => {
    return(<>
    <div class="container">
        <div class="row">
        <div class="col animation_div">
           <Lottie animationData={anim} loop={true} />
        </div>
        <div class="col v-centre  align-middle text-center  top-50 start-50 ">
            <div class="">
             
            <h1 class="align-middle ">Hello</h1>
            <h1 class="align-middle ">Welcome to Helping Hand</h1>
            <h3>How we can help You?</h3>
        
           
            
            </div>
        </div>
        
    </div>
    </div>
    
    </>)
}
export default Header;
