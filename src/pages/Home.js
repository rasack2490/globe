import Search from "../components/Search/Search";
import logo from '../assets/logo.png';


const Home = () => {

    return(
        <div>
            <div className="container-fluid p-5 text-center mt-5">
            <a href={'/'}>
                <img src={logo} alt="logo globe" />
            </a>
                
            </div>
            <Search />
            
        </div>
    )
}

export default Home