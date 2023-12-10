
import img1 from "../../../assets/Vector.png"
import img2 from "../../../assets/Group.png"
import img3 from "../../../assets/Group 187.png"
import "../ServiceCss/Service2.css"
const Service2 = () => {
    return (
        <div>
            <div className= "servic2" >
                <div className= "container" >
                    <div className= "serviceDetails" >
                        <div className= "commision" >
                            <img className= "img1" src={img1} />
                            <p  >No Commissions</p>
                        </div>
                        <div className= "loyalty" >
                            <img className= "img2" src= {img2} />
                            <p>Loyalty features</p>
                        </div>
                        <div className= "Promotion" >
                            <img className= "img3" src={img3} />
                            <p>
                                Promotions <br/>
                                & Up-selling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service2;