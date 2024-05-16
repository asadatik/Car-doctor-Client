import About from "../About.jsx/About";
import Banner from "../Banner/Banner";
import Service from "./Service/Service";


const Home = () => {
    return (
        <div className="mb-10" >
             <Banner></Banner>
             <About></About>
             <Service></Service>
        </div>
    );
};

export default Home;