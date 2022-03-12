import { IconContext } from "react-icons/lib"
import {FiTwitter, FiMail} from 'react-icons/fi'
import {FaWordpressSimple} from 'react-icons/fa'
import Link from "next/link"

const ContactCard = ({padding, size, backgroundColor}) => {
    return(
        <div className="contact" >
            <Link passHref={true} href="https://twitter.com/surajondev">
                <div className="contactCard" style={{padding, backgroundColor}}>
                    <IconContext.Provider value={{ color: "#ffa97a", size}}>
                        <FiTwitter />
                    </IconContext.Provider>
                </div>
            </Link>
            <Link passHref={true} href="https://surajondev.com/">
                <div className="contactCard" style={{padding, backgroundColor}}>
                    <IconContext.Provider value={{ color: "#ffa97a", size}}>
                        <FaWordpressSimple />
                    </IconContext.Provider>
                </div>
            </Link>
            <Link passHref={true} href="mailto:@surajvishwakarma625@gmail.com">
                <div className="contactCard" style={{padding, backgroundColor}}>
                    <IconContext.Provider value={{ color: "#ffa97a", size}}>
                        <FiMail />
                    </IconContext.Provider>
                </div>
            </Link>
        </div>
    )
}

export default ContactCard