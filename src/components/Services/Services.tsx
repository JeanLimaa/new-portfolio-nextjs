import { Service } from "./Service"

export const Services = () => {
    return(
        <section className="services" id="services">
        <h2 className="heading">Habilidades em Desenvolvimento de <span>Software</span></h2>
        <div className="services-container">
            <Service techName={"JavaScript"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} />
            <Service techName={"Typescript"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} />
            <Service techName={"React.js"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} />
            <Service techName={"Next.js"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"} />
            <Service techName={"Node.js"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} />
            <Service techName={"MongoDB (NoSQL)"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} />
            <Service techName={"PostgreSQL (SQL)"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"} />
            <Service techName={"TailwindCSS"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} />
            <Service techName={"MaterialUI"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"} />
            <Service techName={"Bootstrap"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} />
        </div>
    </section>
    )
}