import React from 'react'
import Logo from './logo.png';
import './kontakt.scss'
function kontakt() {
    return (

    <main id="kontakt">
        <header className="header">KONTAKT</header>
        <div className="sections" id="kontakt_container">
            <section className="open_adress">
                    <h2>Telefon i adres</h2>
                    <hr></hr>
                    <h3>Al.sjaisdjksa 16/23</h3><br></br>
                    <h3>Nr.tel: 555555555</h3>

            </section>

            <section >
            <img src={Logo} className="logo_kontakt" ></img>
            </section>

            <section className="open_adress">
                    <h2>Godziny otwarcia</h2>
                    <hr></hr>
                    <h3>pon-pt 18.00-20.00</h3><br></br>
                    <h3>Sob-ndz 19.00-20.00</h3>
            </section>
        </div>
    </main>

    )
}

export default kontakt
