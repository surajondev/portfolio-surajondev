import { Heading } from '@chakra-ui/react'
import {MdLightMode} from 'react-icons/md'
import { IconContext } from "react-icons";

const Header = () => {
    return(
        <div className="headerBody">
            <div className="container">
                <Heading size="lg">SurajOnDev</Heading>
                <li>
                    <ul className='listItem'>About</ul>
                    <ul className='listItem'>Experience</ul>
                    <ul className='listItem'>Services</ul>
                    <ul className='listItem'>Contact</ul>
                </li>
                <IconContext.Provider value={{ color: "#FFA97A", className: "themeSwitch", size:"1.5em"}}>
                    <div>
                        <MdLightMode />
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Header