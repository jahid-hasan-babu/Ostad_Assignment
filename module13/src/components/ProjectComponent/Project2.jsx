
import img1 from "../../assets/Frame 11.png"
import "../ProjectCSS/Project2.css"
const Project2 = () => {
    return (
        <div className= "project2" >
            <div className= "container" >
                <section className= "project2data" >
                    <div className= "img" >
                        <img src={img1} />
                    </div>
                    <div className= "data" >
                        <h1>
                            All the important customers belong to <br/>
                            your brand, not to a third-party tool
                        </h1>
                        <p>
                            When customers place their order from wolt, or <br/>
                            deliveroo, they are clients of wolt and deliveroo. Not <br/>
                            yours. With Gonna Order, the clients for the first time, <br/>
                            engage with your brand.
                        </p>
                        <div className="homeBtn projectData__btn">
     
                             <button className="btn1">Start now</button>
                  
   
                                </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Project2;