import Mario from "../assets/images/Mario and Adrian A.jpg"
import Adrian from "../assets/images/Mario and Adrian b.jpg"

export function About() {
    return (
        <section id="about" className="heroSection aboutSection">
            <main className="hero1 about1" >
                    <h1 className="heroHeading" >
                        Little Lemon 
                    </h1>
                    <h3 className="heroSubHeading aboutSubHeading">
                        Chicago
                    </h3>
                    <p className="heroParagraph aboutP">
                    We are a family owned<br></br> Mediterranean restaurant, <br></br>focused on traditional<br></br> recipes served with a modern<br></br> twist.
                    </p>
                </main>
                <main className="imageContainer">
                    <img src={Mario} className='aboutImage' id="mario" alt="Restaurant pic" />
                    <img src={Adrian} className='aboutImage' id="adrian" alt="Restaurant pic" />
                </main>
        </section>
    )
}