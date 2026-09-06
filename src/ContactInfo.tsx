import emailIcon from './assets/cover/laceEmailIcon.png';
import phoneIcon from './assets/cover/lacePhoneIcon.png';
import linkedInIcon from './assets/cover/laceLinkedInIcon.png';

function ContactInfo() {
    return (
        <div className="contact-info">
            <img 
                src={emailIcon} 
                alt="unable to load email icon" 
                width="65px" 
                height="auto"/>
            <span>dhritisharma.2107@gmail.com</span>

            <img 
                src={phoneIcon} 
                alt="unable to load phone icon" 
                width="65px" 
                height="auto"/>
            <span>+44 7880 569494 </span>

            <img 
                src={linkedInIcon} 
                alt="unable to load linkedIn icon"
                width="65px" 
                height="auto"/>
            <span>linkedin.com/in/dhriti7/</span>
        </div>
    )
}

export default ContactInfo;
