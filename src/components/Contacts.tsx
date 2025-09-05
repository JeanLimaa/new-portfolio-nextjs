import Image from "next/image"

export const Contacts = () => {
    return (
        <div className="social-media">
            <a target="_blank" href="https://github.com/JeanLimaa"><Image width={20} height={100} src="/redes-sociais/github.svg" alt="github de jean" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/jeanlimaa/"><Image width={20} height={100} src="/redes-sociais/linkedin.svg" alt="linkedin de jean" /></a>
            <a target="_blank" href="mailto:jeansantoslima17@gmail.com"><Image width={20} height={100} src="/redes-sociais/email.svg" alt="email de jean" /></a>
        </div>
    )
}