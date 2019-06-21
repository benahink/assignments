import React from 'react';
import './Footer.css';
import africanPrint from './african-print.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook, 
    faInstagram, 
    faTwitter, 
    faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer-container">
            <h2>Stay in touch: </h2>
            <a 
                href="facebook" 
                className="facbook footer">
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
            <a 
                href="instagram" 
                className="instagram footer">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a 
                href="twitter" 
                className="twitter footer">
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
            </a>
            <a 
                href="youtube" 
                className="youtube footer">
                <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
            <a 
                href="email"
                className="email footer">
                <h3>benahink@design.com</h3>
            </a>
            <a 
                href="phone"
                className="phone# footer">
                <h3>000-000-0000</h3>
            </a>
            <div 
                className="someColor" 
                style={{backgroundImage: `url(${africanPrint})`}}>
            </div>
        </div>
    )
}

export default Footer;