import emailIcon from './laceEmailIcon.png';

function ContactInfo() {
    return (
        <div className="email-info">
            <img src={emailIcon} alt="unable to load email icon" 
                width="55px" height="auto"/>
            <span>dhritisharma.2107@gmail.com</span>
        </div>
    )
}

export default ContactInfo;
