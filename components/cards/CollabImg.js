import { Link, Image } from "@chakra-ui/react"

const CollabImg = ({link, src, alt}) => {
    return(
        <Link href={link} passhref _focus={{boxBorder:"none"}}>
            <Image
                borderRadius='full'
                boxSize="80px"
                src={src}
                alt={alt}
            />
        </Link>
    )
}

export default CollabImg