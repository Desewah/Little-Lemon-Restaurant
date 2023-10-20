import './App.css';
import Logo from  "./assets/images/Vector.png";
import {Link, Routes, Route} from "react-router-dom"
import {Menu}  from "./components/Menu";
import {Main}  from "./components/BookingPage";
import {About} from "./components/about";
import {Home, Footer} from "./components/Home"
import {ConfirmedBooking} from './components/confirmedBooking'

function Nav() {
    return (
        <>
            {/* Navigation menu */}
            <nav className='nav_bar'>
                <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link>
                <Link to="/" className="nav_item">Home</Link>
                <Link to="/about" className="nav_item">About</Link>
                <Link to="/menu" className="nav_item">Menu</Link>
                <Link to="/reservation" className="nav_item">Reservations</Link>
                <Link to="/order" className="nav_item">Order Online</Link>
                <Link to="/login" className="nav_item">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservation" element={<Main />}></Route>
                <Route path="/confirmed-booking" element= {<ConfirmedBooking />}></Route>
            </Routes>
        </>
    )
}

function App() {
    return (
        <>
            <Nav/>
            <Footer/>
        </>
    );
}

export default App;
