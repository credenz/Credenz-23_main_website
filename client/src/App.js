
import './App.css';
import { Routes,Route} from "react-router-dom";
// import Home from './pages/Home';
import Events from "./pages/Events/Events"
import Contact from './pages/Contact/Contact';
import About from "./pages/About/About";
import Scrolltop from "./pages/Scrolltop/Scrolltop";
import Navbar from './Components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import Profile from './pages/Profile/Profile';
import Payment from './pages/Payment/Payment';
import Admin from './pages/Admin/Admin';
import Team from "./pages/team/Team"

import LoginNew from "./pages/Register/LoginNew";
import Register from "./pages/Register/Register"
import Error from './pages/Error/Error';
import User from './Components/useradd/User';
import Explore from './Components/Events3d/Explore';
import Loader from './Components/loader/Loader';
import CommingSoon from './pages/comingsoon/CommingSoon';



function App() {
  return (
    <>
    <div className="App">
    <Scrolltop/>
    <Scrolltop/>
    <Navbar/>
  <Routes>


   <Route exact path="/" element={<Home/> } />
   <Route exact path="/explore" element={<Explore /> } />
   <Route exact path="/events" element={<Events/> } />
   <Route exact path="/about" element={<About/> } />
   <Route exact path="/contact" element={<Contact/> } />
   <Route exact path="/login" element={<LoginNew/> } />
   <Route exact path="/register/:referral" element={<Register/> } />
   <Route exact path="/register" element={<Register/> } />
   <Route exact path="/cart" element={<Cart/> } />
   <Route exact path="/user" element={<User/> } />
   <Route exact path="/profile" element={<Profile/> } />
   <Route exact path="/payment" element={<Payment/> } />
   <Route exact path="/admin" element={<Admin/> } />
   <Route exact path="/team" element={<Team/> } />
   <Route exact path="/sessions" element={<CommingSoon/> } />
   <Route exact path="*" element={<Error/> } />
  </Routes> 
  <Footer/>
</div>
    </>
  );
}



export default App;
