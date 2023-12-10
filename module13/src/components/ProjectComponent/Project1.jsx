
import img1 from "../../assets/Frame 10.jpg"
import "../ProjectCSS/Project1.css"
const Project1 = () => {
    return (
        <div>
            <div className= "project" >
                <div  className= "container">
                    <div  className= "projectlist">
                        <div className= "projectData" >
                            <h1>
                                All the revenue from the online <br/> orders belongs to you
                            </h1>
                            <p>
                                All the revenue from the orders is yours. You won't <br/>
                                have to pay every time when the customer orders <br/>
                                through the online platform.
                            </p>
                            <div className="homeBtn projectData__btn">
     
                             <button className="btn1">Start now</button>
                  
   
                                </div>
                           
                        </div>
                        <div className= "projectImg" >
                            <img src={img1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;