import Image from "next/image"

export const TechImage = ({src}: {src: string}) => {
    return(
        <Image 
        src={src} 
        width={40} 
        height={40} 
        alt='tech-icon' 
        style={
            {padding: "0.5rem", marginLeft: "1rem"}} /> 
    )
}