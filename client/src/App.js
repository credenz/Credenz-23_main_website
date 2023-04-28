
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
import Forget from './pages/Register/Forget';
import toast, { ToastUtils } from "./utils/toastifyContainer";
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();

  let backgroundWindow = '';
  let backgroundImg="";
  if (location.pathname === '/login'||location.pathname === '/register' ||location.pathname === '/cart'||location.pathname === '/payment'||location.pathname === '/profile'||location.pathname === '/forget-password/:token/:uid'||location.pathname==='/forget-password') {
    {backgroundImg = 'BgImage';backgroundWindow='BgWindow '}
  } 
  return (
    <>
   
    <Scrolltop/>
    <Scrolltop/>
    <Navbar/>
    <ToastUtils />
    <div className={`App`}>
    <div className={`${backgroundImg}`}>
    <div className={`${backgroundWindow}`}>
  <Routes>


   <Route exact path="/" element={<Home/> } />
   <Route exact path="/explore" element={<Explore /> } />
   <Route exact path="/events" element={<Events toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/about" element={<About/> } />
   <Route exact path="/contact" element={<Contact/> } />
   <Route exact path="/login" element={<LoginNew toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/register/:referral" element={<Register toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/register" element={<Register toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/cart" element={<Cart toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/user" element={<User/> } />
   <Route exact path="/profile" element={<Profile toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/payment" element={<Payment toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/admin" element={<Admin toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="/team" element={<Team/> } />
   <Route exact path="/sessions" element={<CommingSoon/> } />
   <Route exact path="/forget-password/:token/:uid" element={<Forget toast={{ container: <ToastUtils />, toast }}/> } />
   <Route exact path="*" element={<Error/> } />
  </Routes> 
</div></div></div>
  <Footer/>
    </>
  );
}



export default App;
