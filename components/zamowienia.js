import React, { Component } from 'react'
import Pyszne from './pyszne.svg';


export class  zamowienia extends Component {
    render() {
        return (
            <main id="kontakt">
        <header className="header">Zamówienia</header>
        <div className="sections" id="kontakt_container">
            <section className="open_adress">
                    <h2>Numer telefonu</h2>
                    <hr></hr>
                    <h3>Nr.tel: 555555555</h3>

            </section>
            <section >
            <img src={Pyszne} className="logo_kontakt" ></img>

            </section>
            {/* <section className="open_adress">
            <h2>Telefon i adres</h2>
                    <hr></hr>
                    <h3>Al.sjaisdjksa 16/23</h3><br></br>
                    <h3>Nr.tel: 555555555</h3>
            </section> */}
        </div>
    </main>
        )
    }
}

export default zamowienia
