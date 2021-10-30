import React, { Component } from 'react'
import './navbar.scss';
import { Link } from "react-scroll";
import Logo from './logo.png';




export class Navbar extends Component {
    state = {
        active: false,
        theposition: -100,

    };

    handlerBurger = () => {
        this.setState({ active: !this.state.active })
        const body = document.querySelector("body");

        body.classList.toggle("toggle_body");
    }
    render() {

        return (
            <>
                <nav className={this.props.data ? 'container container_animation' : 'container container_animation_reverse'}>
                    <div className="navbar_my">
                    <img src={Logo} className="logo_nav" ></img>

                        <section className={this.state.active ? " elements_container  navbar_phone_active" : " elements_container "}>
                            <Link
                                className="element"
                                activeClass="active"
                                to="start"
                                spy={true}
                                smooth={true}
                                offset={-82}
                                duration={500}
                                onClick={this.handlerBurger}
                            >
                                <p className={this.state.active ? "element_anim  " : ""} >Start</p>
                            </Link>
                            <Link
                                className="element"
                                activeClass="active"
                                to="zainteresowania"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={this.handlerBurger}
                            >
                                <p className={this.state.active ? "element_anim  " : ""} >O nas</p>
                            </Link>
                            <Link
                                className="element"
                                activeClass="active"
                                to="menu"
                                spy={true}
                                smooth={true}
                                offset={-82}
                                duration={500}
                                onClick={this.handlerBurger}
                            >
                                <p className={this.state.active ? "element_anim2  " : ""} >Menu</p>
                            </Link>
                           < Link
                                className="element"
                                activeClass="active"
                                to="kontakt"
                                spy={true}
                                smooth={true}
                                offset={-82}
                                duration={500}
                                onClick={this.handlerBurger}
                            >
                                <p className={this.state.active ? "element_anim3  " : ""} >Kontakt</p>
                            </ Link>
                           < Link
                                className="element"
                                activeClass="active"
                                to="zamowienia"
                                spy={true}
                                smooth={true}
                                offset={-82}
                                duration={500}
                                onClick={this.handlerBurger}
                            >
                                <p className={this.state.active ? "element_anim3  " : ""} >Zamówienia</p>
                            </ Link>

                        </section>
                        <div className={this.state.active ? " burger toggle_burger" : " burger"} onClick={this.handlerBurger}>

                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </div>
                </nav>
                </>
        )
    }
}

export default Navbar
