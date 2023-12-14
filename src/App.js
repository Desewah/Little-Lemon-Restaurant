import './App.css';
import Logo from  "./assets/images/Vector.png";
import {Link, Routes, Route} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {Main}  from "./components/BookingPage";
import {Home} from "./components/Home"
import {ConfirmedBooking} from './components/confirmedBooking'

function Nav() {
    return (
        <>
            {/* Navigation menu */}
            <nav className='nav_bar'>
                <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link>
                <Link to="/" className="nav_item">Home</Link>
                <HashLink smooth to="/#about" className="nav_item">About</HashLink>
                <HashLink smooth to="/#menu" className="nav_item">Menu</HashLink>
                <Link to="/reservation" className="nav_item">Reservations</Link>
                <Link to="/order" className="nav_item">Order Online</Link>
                <Link to="/login" className="nav_item">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
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
        </>
    );
}

export default App;
