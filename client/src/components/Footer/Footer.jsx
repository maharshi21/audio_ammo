import "./Footer.scss";
import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
<div className="footer-content">
<div className="col"> 
<div className="title">About</div>
<div className="text"> We made an organization to bring you items you will become hopelessly enamored with; to allow you to make your very own space, to take advantage of those concealed abilities and make your own looks and accumulations; to enable you to impart your manifestations to companions to understand that second conclusion, to move or be enlivened; and to enable you to shop such that you will discover hypnotizing.</div>
</div>

<div className="col"> 
<div className="title">Contact</div>
<div className="c-item ">
    <FaLocationArrow/>
    <div className="text">
        MT Factories, Mill Road, Chandni Chowk, New Delhi , 380015  </div>
</div>

<div className="c-item ">
    <FaMobileAlt/>
    <div className="text"> +91 9458321478
     </div>
</div>

<div className="c-item ">
    <FaEnvelope/>
    <div className="text">
        Email: mtstores24@gmail.com </div>
</div>
</div>

<div className="col">
<div className="title">Categories</div>
<div className="text"> Headphones </div>
<div className="text"> Smart Watches </div>
<div className="text"> Bluetooth Speakers</div>
<div className="text"> Wireless Earbuds </div>
<div className="text"> Home Theatre</div>
<div className="text"> Projectors </div>
</div>


 <div className="col">
<div className="title">Pages </div>   
<div className="text"> Home </div>
<div className="text"> About </div>
<div className="text"> Privacy Policy </div>
<div className="text"> Returns </div>
<div className="text"> Terms & Conditions </div>
<div className="text"> Contact us </div>
</div>
</div>
<div className="bottom-bar">
<div className="bottom-bar-content">
    <div className="text">
        MT STORES 2023 CREATED BY MT DEV. PREMIUM E-COMMERCE SOLUTIONS 
    </div>
    <img src={payment} />

    </div>
    </div>
     
    </footer>
};

export default Footer;
