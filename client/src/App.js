
import './App.css';
import { Routes,Route} from "react-router-dom";
// import Home from './pages/Home';
import Events from "./pages/Events/Events"
import Contact from './pages/Contact/Contact';
import About from "./pages/About/About";
import Registration from './pages/Register/Registration';
import Navbar from './Components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import Profile from './pages/Profile/Profile';
import Payment from './pages/Payment/Payment';
import Admin from './pages/Admin/Admin';



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
   <Route exact path="/payment" element={<Payment/> } />
   <Route exact path="/admin" element={<Admin/> } />
  </Routes> 
  <Footer/>
</div>
    </>
  );
}



export default App;
