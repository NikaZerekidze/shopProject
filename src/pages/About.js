import React from 'react';
import './about.css';
import  MapContainer from './Map.js'


function About()
{
    return(
        <div className="aboutPage">
            <div className="container">
                < MapContainer className="map"></MapContainer>
            </div>
            <div className="info">
                <h2 className="contact">contact us</h2>
                <h2 className="email">Email</h2>

            </div>

        </div>
        
        
        );
}

export default About;
