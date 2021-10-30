import './main.scss'
import React, { Component } from 'react'
import Burger from './burger.jpg';

export class menu extends Component {
    render() {
        return (
            <>
            <main className="menu" id="menu">

                <header className="header">MENU</header>
                <div className="sections">
                    <section className="section_name">
                            <header>BURGERY</header>
                                <div className="option_container">
                                    <div className="option">
                                        <img className="img" src={Burger}></img>


                                            <div className="option_name_price">
                                                <div className="head_price">
                                                <h2>Burger Vegański</h2>
                                                <h2>18.00zł/23.00zł*</h2>
                                                </div>
                                                <hr></hr>
                                                <p>Wołowina, Sałata, Pomidor, czerwona Cebula , Ogórek, sos: firmowy<br></br>
                                                </p>
                                            </div>
                                    </div>


                                <div className="option bottom">*-Cena za zestaw: małe frytki + colesław +ketchup/sos do wyboru</div>

                                </div>
                    </section>
                    <section className="section_name">
                            <header>FRYTY</header>
                                <div className="option_container">
                                    <div className="option">
                                        <img className="img" src={Burger}></img>


                                            <div className="option_name_price">
                                                <div className="head_price">
                                                <h2>FRYTKI DUŻE</h2>
                                                <h2>5.00zł</h2>
                                                </div>
                                                <hr></hr>
                                                {/* <p>Wołowina, Sałata, Pomidor, czerwona Cebula , Ogórek, sos: firmowy<br></br>
                                                </p> */}
                                            </div>
                                    </div>



                                </div>
                    </section>
                    <section className="section_name">
                            <header>Napoje</header>
                                <div className="option_container">
                                    <div className="option drinks">
                                            <div className="option_name_price">
                                                <div className="head_price">
                                                <h2>Cisowianka</h2>
                                                <h2>5.00zł</h2>
                                                </div>
                                                <hr className="line_drinks"></hr>

                                            </div>
                                            <div className="option_name_price">
                                                <div className="head_price">
                                                <h2>Coca-Cola</h2>
                                                <h2>5.00zł</h2>
                                                </div>
                                                <hr className="line_drinks"></hr>
                                            </div>
                                            <div className="option_name_price">
                                                <div className="head_price">
                                                <h2>Moon brothers trawa cytrynowa z imbirem</h2>
                                                <h2>5.00zł</h2>
                                                </div>
                                                <hr className="line_drinks"></hr>
                                            </div>
                                            <div className="option_name_price">
                                                <div className="head_price">
                                                <h2>Cisowianka</h2>
                                                <h2>5.00zł</h2>
                                                </div>
                                                <hr className="line_drinks"></hr>
                                            </div>
                                            <div className="option_name_price">
                                                <div className="head_price">
                                                <h2>Cisowianka</h2>
                                                <h2>5.00zł</h2>
                                                </div>
                                                <hr className="line_drinks"></hr>
                                            </div>
                                    </div>



                                </div>
                    </section>
                </div>
            </main>
        </>
        )
    }
}

export default menu

