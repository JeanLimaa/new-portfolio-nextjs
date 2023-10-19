import Image from "next/image"

interface SkillProps {
    techName: string,
    src: string
}

export const Skill = ({techName, src}: SkillProps) => {
    return (
        <div className="skill-box">
            <Image alt={techName} height={65} width={65} src={src} />
            <h3>{techName}</h3>
        </div>
    )
}