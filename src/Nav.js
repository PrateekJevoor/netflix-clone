import React, {useState, useEffect} from 'react';
import './Nav.css';


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);

            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("Scroll");
        };
    }, []);




    return (
        <div className = {`nav ${show && "nav__black"}`}>
            <img 
                className ="nav__logo"
                src="https://drive.google.com/thumbnail?id=1dE7079C62JsGRx3DKMSzGEXFuE28232U"
                alt = "Netflix Logo"
            />


            <img 
                className ="nav__avatar"
                src="https://drive.google.com/thumbnail?id=1J9U79nDmBnM6m-pM5e3_BzDF0f1wU1mH"
                alt = "Netflix Logo"
            />
            

            
        </div>
    );
}

export default Nav;
