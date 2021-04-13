import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo/LogoAndTitleSVG.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-section">
                <Logo className="logo"/>
                <div className="socials">
                    <a href="https://www.facebook.com/" target="_blank"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/" target="_blank"><InstagramIcon /></a>
                    <a href="https://twitter.com/?lang=pl" target="_blank"><TwitterIcon /></a>
                </div>
            </section>
            <section className="footer-section">
                <ul>
                    <li>NAZWA SCHRONISKA</li>
                    <li>Backendowa Street 01</li>
                    <li>10-255 Frontendowo</li>
                </ul>
            </section>
            <section className="footer-section">
                <ul>
                    <li>furry.tales.shelter@gmail.com</li>
                    <li>255-255-255</li>
                </ul>
            </section>
            <section className="footer-section">
                <ul>
                    <li>Dummy Text</li>
                    <li>Dummy Text</li>
                    <li>Dummy Text</li>
                </ul>
            </section>
            <section className="footer-section">
                {/* <ul>
                    <li>Team Leader: Piotr Bocian</li>
                    <li>Product Owner: Klaudia Wojciechowska</li>
                    <li>Tech Leader: Łukasz Żurawski</li>
                    <li>Development Manager: Daria Torz</li>
                    <li>Team Members: Jan Eliasz, Adam Połynka, Szymon Suchodolski</li>
                </ul> */}
                <p>Team Leader: Piotr Bocian, Product Owner: Klaudia Wojciechowska, Tech Leader: Łukasz Żurawski, Development Manager: Daria Torz, Team Members: Jan Eliasz, Adam Połynka, Szymon Suchodolski</p>
            </section>
        </footer>
    )
}

export default Footer;