
import './App.css';
import { Routes,Route} from "react-router-dom";
// import Home from './pages/Home';
import Events from "./pages/Events"
import Contact from './pages/Contact';
import About from "./pages/About";
import Registration from './pages/Registration';
import Navbar from './Components/Navbar';
import Cart from './pages/Cart';
import Footer from './Components/Footer';
import Home from './Components/Home/Home'
import Profile from './pages/Profile/Profile';




function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
  <Routes>
   <Route exact path="/" element={<Home/> } />
   <Route exact path="/events" element={<Events/> } />
   <Route exact path="/about" element={<About/> } />
   <Route exact path="/contact" element={<Contact/> } />
   <Route exact path="/registration" element={<Registration/> } />
   <Route exact path="/cart" element={<Cart/> } />
   <Route exact path="/profile" element={<Profile/> } />
  </Routes> 
  {/* <Footer/> */}
</div>
    </>
  );
}



export default App;
