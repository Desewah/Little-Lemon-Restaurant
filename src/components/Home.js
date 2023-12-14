import heroImage from "../assets/images/restauranfood.jpg";
import greekSalad from "../assets/images/greek salad.jpg"
import bruschetta from "../assets/images/bruchetta.svg"
import lemonDessert from "../assets/images/lemon dessert.jpg"
import delivery from "../assets/images/Group.png"
import '../App.css';
import { About } from "./about";
import {Main}  from "./BookingPage";
import { Menu } from "./Menu";
import {Link, Routes, Route} from "react-router-dom"
import footerLogo from "../assets/images/Asset 20@4x.png";
import { HashLink } from "react-router-hash-link";
import {ConfirmedBooking} from './confirmedBooking'


function HeroSection() {
    return (
        <>
            <section className='heroSection'>
                <main className="hero1" >
                    <h1 className="heroHeading" >
                        Little Lemon 
                    </h1>
                    <h3 className="heroSubHeading">
                        Chicago
                    </h3>
                    <p className="heroParagraph">
                    We are a family owned<br></br> Mediterranean restaurant, <br></br>focused on traditional<br></br> recipes served with a modern<br></br> twist.
                    </p>
                    <Link to="/reservation">
                        <button className="CTA">Reserve a Table</button>
                    </Link>
                    <Routes>
                        <Route path="/reservation" element={<Main />}></Route>
                    </Routes>
                </main>
                <main>
                    <img src={heroImage} className='heroImage' alt="Restaurant pic" />
                </main>
            </section>
        </>
    )
}


function Highlights() {
    return (
        <>
            {/* Highlight Section */}
            <section className="highlightSection" id="menu">
                <main className="sec1">
                    <h2 className="highlightHeading" >This weeks specials!</h2>
                    <Link to="/menu">
                    <button className="CTA">Online Menu</button>
                    </Link>
                    <Routes>
                        <Route path="/menu" element={<Menu />}></Route>
                    </Routes>
                </main>
                <main className="sec1 specialsDisplay">
                    <main className="specialFood">
                        <img src={greekSalad} alt="" className="specials greekSalad" />
                        <main className="foodDetails">
                            <main className="food">
                                <h3 className="foodName">Greek Salad</h3>
                                <h3 className="foodPrice">$12.99</h3>
                            </main>
                            <p className="foodP">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <main className="food lastBlock salad">
                                <h3 className="foodName">Order a delivery</h3>
                                <img src={delivery} alt="Delivery Icon" className='deliveryIcon'/>
                            </main>
                        </main>

                    </main>
                    <main className="specialFood">
                        <img src={bruschetta} alt="Bruschetta" className="specials bruschetta" />
                        <main className="foodDetails">
                            <main className="food">
                                <h3 className="foodName">Bruschetta</h3>
                                <h3 className="foodPrice">$5.99</h3>
                            </main>
                            <p className="foodP">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            <main className="food lastBlock">
                                <h3 className="foodName">Order a delivery</h3>
                                <img src={delivery} alt="Delivery Icon" className='deliveryIcon'/>
                            </main>
                        </main>
                    </main>
                    <main className="specialFood">
                        <img src={lemonDessert} alt="Lemon Dessert" className="specials lemonDessert" />
                        <main className="foodDetails">
                            <main className="food" >
                                <h3 className="foodName">Lemon Dessert</h3>
                                <h3 className="foodPrice">$5.00</h3>
                            </main>
                            <p className="foodP">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <main className="food lastBlock">
                                <h3 className="foodName">Order a delivery</h3>
                                <img src={delivery} alt="Delivery Icon" className='deliveryIcon'/>
                            </main>
                        </main>
                    </main>
                </main>
            </section>
        </>
    )
}

export function Home() {
    return (
        <>
            <HeroSection/>
            <Highlights/>
            <About/>
            <Footer/>
        </>
    )
    
}


export function Footer() {
    return (
        <>
            <footer>
                <section className="">
                    <main>
                        <img 
                            src={footerLogo}
                            alt="little lemon logo"
                            className="footerLogo"
                        />
                    </main>
                    <main>
                        <ul>
                            <li>Doormat</li>
                            <li>Navigation</li>
                            <li><Link to="/" className="">Home</Link></li>
                            <li><HashLink smooth to="/#about" className="">About</HashLink></li>
                            <li><HashLink smooth to="/#menu" className="">Menu</HashLink></li>
                            <li><Link to="/reservation" className="">Reservations</Link></li>
                            <li><Link to="/order" className="">Order Online</Link></li>
                            <li><Link to="/login" className="">Login</Link></li>
                        </ul>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/reservation" element={<Main />}></Route>
                            <Route path="/confirmed-booking" element= {<ConfirmedBooking />}></Route>
                        </Routes>
                    </main>
                    <main>
                        <ul>
                            <li>Contact</li>
                            <li>Address</li>
                            <li>Phone number</li>
                            <li>emmail</li>
                        </ul>
                    </main>
                    <main>
                        <li>Social Media Links</li>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>emmail</li>
                    </main>
                </section>
            </footer>
        </>
        
    )
}