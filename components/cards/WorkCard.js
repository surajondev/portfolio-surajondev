import Image from "next/image"
import { Heading, Button, Tag, Link } from "@chakra-ui/react"

const WorkCard = ({title, img, link, tag, href}) => {
    return(
        <div className="skillContainer workCardContainer">
            <Heading mb="1em" size="md">{title}</Heading>
            <Image alt={title} className="workImg" height="112px" width="245px" src={img}></Image>
            <div style={{marginTop:"1em"}}>
                <Link href={link} isExternal _hover={{ border:"none"}}>
                    <Button className="downloadCV" borderColor='#ffa97a' color="white" variant='outline' size="md" _hover={{ borderColor:"#cc8762", color:"#cc8762" }}>
                        {href}
                    </Button>
                </Link>
                <Tag ml="10px" mt="1em" size="md" variant='solid' colorScheme='pink'>
                    {tag}
                </Tag>
            </div>
        </div>
    )
}

export default WorkCard