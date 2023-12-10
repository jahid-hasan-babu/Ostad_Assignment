import About1 from "../components/about/About1"
import About2 from "../components/about/About2"
import About3 from "../components/about/About3"
import About4 from "../components/about/About4"
import "../components/about/About.css"

const About = () => {
  return (
    <div>
        
      <div className="about__design">
        <About1/>
        <About2/>
        <About3/>
        <About4/>
      </div>
    </div>
  )
}

export default About
