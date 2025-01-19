export type CategorysType = 'all' | 'Front-End' | 'Back-End' | 'DevOps'

interface TechsInterface {
    [techName: string]: {url: string, category: CategorysType[]}
}

export const techsInfo: TechsInterface = {
    Javascript: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: ['Front-End', 'Back-End'] },
    Typescript: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: ['Front-End', 'Back-End'] },
    NestJS: {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", category: ['Back-End'] },
    NextJs: { url: '/nextjs.svg', category: ['Front-End'] },
    React: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: ['Front-End'] },
    /* Redux: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', category: ['Front-End'] }, */
    Nodejs: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: ['Back-End'] },
    MongoDB: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: ['Back-End'] },
    PostgreSQL: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: ['Back-End'] },
    MySQL: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: ['Back-End'] },
    Prisma: { url: 'https://img.icons8.com/color/48/prisma-orm.png', category: ['Back-End'] },
    TailwindCss: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: ['Front-End'] },
    MaterialUI: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', category: ['Front-End'] },
    Bootstrap: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: ['Front-End'] },
/*     Python: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: ['Back-End', 'Data Science'] },
    OpenCV: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', category: ['Computer Vision'] },
    MediaPipe: { url: 'https://viz.mediapipe.dev/logo.png', category: ['Computer Vision'] }, */
    Css: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: ['Front-End'] },
    Html: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: ['Front-End'] },
    Git: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: ['DevOps'] },
    GitHub: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', category: ['DevOps'] },
    BitBucket: { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg', category: ['DevOps'] }
};

export const techsArray = Object.entries(techsInfo).map(([name, infos]) => ({
    name,
    url: infos.url,
    category: infos.category
}));