import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe width="600" height="450" style={{border:0}} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrRMfuPC55zsRafiFEWj3Ejw&key=AIzaSyAYpwIS5KABEkrsVBorrQDr8M5MDt9IzYM"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 9393939393'} text2={'+91 9292929292'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'manavtech27@gmail.com'} text2={'manav27202@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'8, Navi Mumbai, Bombay'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
