import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {

    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem 
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon'
                        label='Adevnture'
                        path='/services'
                        />

                        <CardItem 
                        src='images/img-2.jpg'
                        text='Travel through the Islands of Bali in Private Cruise'
                        label='Luxury'
                        path='/services'
                        /> 
                    </ul>

                    <ul className='cards__items'>

                        <CardItem 
                        src='images/img-8.jpg'
                        text='Ride through the Sahara on a Camel'
                        label='Adevnture'
                        path='/services'
                        />

                        <CardItem 
                        src='images/img-4.jpg'
                        text='Rent a private island with your friends'
                        label='Luxury'
                        path='/services'
                        /> 
                        </ul>

                </div>

            </div>
        </div>


    );
    
}

export default Cards;