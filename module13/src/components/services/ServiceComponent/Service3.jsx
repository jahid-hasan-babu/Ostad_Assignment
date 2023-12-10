import img1 from "../../../assets/Group 325.png"
import img2 from "../../../assets/Group 326.png"
import "../ServiceCss/Service3.css"
const Service3 = () => {
    return (
        <div>
            <div className= "servic3" >
                <div className= "container">
                    <div className= "serviceRestu" >
                        <div className= "dataLeft" >
                            <div className= "data-data" >
                                <h3>
                                    Most restaurant owners rely exclusively
                                   <span>
                                        on the delivery platforms for online ordering system
                                   </span>

                                </h3>
                            </div>
                            <div className= "dataImg" >
                                <img src={img1} />
                            </div>
                        </div>
                        <div className= "dataRight" >
                            <div className= "data-data" >
                                <span>
                                    Now you can have an online ordering system
                                    <h2>
                                        without paying commission fees
                                        with the GonnaOrder Online Ordering System
                                    </h2>
                                </span>
                            </div>
                            <div className= "dataImg" >
                                <img src={img2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service3;