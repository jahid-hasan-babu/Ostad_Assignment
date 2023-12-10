import  {useState} from 'react';
import {serviceData} from "./serviceData.js";
import "../ServiceCss/Service4.css"
const Service4 = () => {
    const [data,setData] = useState(serviceData)
    return (
        <div>
            <div className= "service4" >
                <div className= "container" >
                    <section>
                        {
                            data.map((item,i)=>{
                                const {body} = item
                                return(
                                    <article className= "listdata" key={i} >
                                        <p>
                                            {
                                                body
                                            }
                                        </p>
                                    </article>
                                )
                            })
                        }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Service4;