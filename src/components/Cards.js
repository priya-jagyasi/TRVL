import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Demo1 from './CreateMap';
import './CreateMap.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        label="Adventure"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        path="/services"/>
                        <CardItem
                        src="images/img-2.jpg"
                        label="Luxury"
                        text="Travel through the islands of Bali in a Private Cruise"
                        path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        label="Mystery"
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        path="/services"/>
                        <CardItem
                        src="images/img-4.jpg"
                        label="Adventure"
                        text="Experience Football on top of the Himalayan Mountains"
                        path="/services"/>
                        <CardItem
                        src="images/img-8.jpg"
                        label="Adrenaline"
                        text="Ride through the Sahara Desert on a guided camel tour"
                        path="/services"/>
                    </ul>
                    </div>
                    <div className="newStyle">
                    {/* <div className="map"> */}
                        <Demo1/>
                        </div>
                    {/* </div> */}
                </div>              
            </div>
            
        </div>
    )
}

export default Cards;
