import Home1 from "../components/home/Home1"
import Home2 from "../components/home/Home2"
import Home3 from "../components/home/Home3"
import Home4 from "../components/home/Home4"
import "../components/home/home.css"


const Home = () => {
  return (
    <div>  
      <div className="container mainHome">
      <Home1/>
      <Home2/>
      <Home3/>
      <Home4/>
      </div>
    </div>
  )
}

export default Home
