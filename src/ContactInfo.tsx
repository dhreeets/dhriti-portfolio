import emailIcon from './laceEmailIcon.png';
import phoneIcon from './lacePhoneIcon.png';

function ContactInfo() {
    return (
        <div className="contact-info">
            <img src={emailIcon} alt="unable to load email icon" 
                width="55px" height="auto"/>
            <span>dhritisharma.2107@gmail.com</span>

            <img src={phoneIcon} alt="unable to load phone icon" 
                width="55px" height="auto"/>
            <span>+44 7880 569494 </span>
        </div>
    )
}

export default ContactInfo;
