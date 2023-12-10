
import img1 from "../../assets/Frame12.png"
import "../ProjectCSS/Project3.css"
const Project3 = () => {
    return (
        <div className= "project3" >
            <div className= "container" >
                <div className= "project3DataList">
                    <div className= "project3Data" >
                        <h1>
                            Take marketing actions by yourself <br/>
                            without paying a marketer or developer
                        </h1>
                        <p>
                            It’s not convenient to need to pay professionals any time
                            you want to add a feature on your website. That’s why you <br/>
                            have everything integrated on your GonnaOrder website <br/>
                            and everything is ready to use on a few clicks.

                        </p>
                        <div className="homeBtn projectData__btn">
     
                             <button className="btn1">Start now</button>
                  
   
                                </div>
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project3;