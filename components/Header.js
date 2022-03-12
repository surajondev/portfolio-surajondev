import { Heading, Link } from '@chakra-ui/react'
import {MdLightMode} from 'react-icons/md'
import { IconContext } from "react-icons";

const Header = () => {
    return(
        <div className="headerBody">
            <div className="container">
                <Heading size="lg">SurajOnDev</Heading>
                <li>
                    <Link href='https://surajondev.com/' _focus={{outline:"none"}} _hover={{border:"none"}}>
                        <ul className='listItem'>Skill</ul>
                    </Link>
                    <Link href='https://surajondev.com/' _focus={{outline:"none"}} _hover={{border:"none"}}>
                        <ul className='listItem'>Work</ul>
                    </Link>
                    <Link href='https://surajondev.com/' _focus={{outline:"none"}} _hover={{border:"none"}}>
                        <ul className='listItem'>Blog</ul>
                    </Link>
                    <Link href='https://surajondev.com/' _focus={{outline:"none"}} _hover={{border:"none"}}>
                        <ul className='listItem'>Contact</ul>
                    </Link>
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