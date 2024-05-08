
import { Link, Outlet } from 'react-router-dom';
import { IoLogoChrome } from "react-icons/io";
import {BiArchive} from "react-icons/bi"
import Search from './components/Search';
export function History(){
  return(
    <div>
      <nav>
      <Link to="/home">History</Link>
        
      </nav>
    </div>
  );
}
export function Home(){
  return(
    <div className="App container mx-auto mt-3 font-thin">
      <nav>
        <h1 className="text-5xl">
          <BiArchive className="inline-block text-red-400 align-top"/>
          <IoLogoChrome />Your Appointments</h1>
        <Search/>
        <Link to="/home">Home</Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
      </nav>
    </div>
  );
}
export function About(){
  return(
    <div>
      <nav>
      <Link to="/about">About Us</Link>
      </nav>
      <h1>About us</h1>
      <Outlet/>
    </div>
  );
}
export function Contact(){
  return(
    <div>
      <nav>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
}
export function App() {
  return <Home/>; 
}

