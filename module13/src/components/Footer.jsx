import "./footer.css"

const Footer = () => {
  return (
   <div>
    <div className="footer">
        <div className="container">
           <div className="footer__design">
           <div className="contact">
                <h3>CONTACT</h3>
                <span>+445645457422</span><br />
                <span>xyx@gmail.com</span>
            </div>
            <div className="service">
                <h3>CUSTOMER SERVICE</h3>
                <span>Contact</span><br />
                <span>Shipping</span><br />
                <span>FAQ</span>
            </div>
            <div className="information">
                <h3>INFORMATION</h3>
                <span>Work With US</span><br />
                <span>Privacy Policy</span><br />
                <span>Press Enquiries</span>

            </div>
            <div className="subcribe">
               <h3>Subscribe to TechDSF via Email</h3> 
               <p>Excepteur sint occaecat cupidatat non proident,<br /> sunt in culpa qui officia</p>
               <div className="input">
                <input type="text"  placeholder="Email Address"/>
                <button>SUBSCRIBE</button>
            </div>
            </div>
            
           
           
           </div>
           <div className="copyright">
       <p>
                ©2022 All right reserved by -
                <a href="https://www.facebook.com/jahid.jahidhasanbabu">Jahid hasan</a>
            </p>
       </div>
        </div>
       
    </div>
   </div>
  )
}

export default Footer
