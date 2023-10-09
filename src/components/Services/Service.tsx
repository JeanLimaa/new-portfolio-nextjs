import Image from "next/image"

interface ServiceProps {
    techName: string,
    src: string
}

export const Service = ({techName, src}: ServiceProps) => {
    //Desenvolvimento Web
    return (
        <div className="services-box">
            <Image alt={techName} height={65} width={65} src={src} />
            <h3>{techName}</h3>
        </div>
    )
}