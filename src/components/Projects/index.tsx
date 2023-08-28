import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import TaskTrackerImg from "/tracker.jpg"

const projects = [
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        githib: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        githib: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        githib: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        githib: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        githib: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        githib: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        githib: 'https:link'
    },
]

enum Technologies {
    react = 'React',
    redux = 'Redux',
    js = 'JavaScript',
    ts = 'TypeScript',
    styledComponents = 'Styled Components',
    html = 'HTML',
    css = 'CSS',
    scss = 'SCSS',
    tailwind = 'Tailwind',
    vite = 'Vite',
    effector = 'Effector',
    antDesign = 'Ant-Design',
    node = 'Node.js',
    express = 'Express',
    nest = 'Nest',
    graphql = 'GraphQL',
    prisma = 'Prisma',
    sequalize = 'Sequalize',
    sql = 'SQL',
    postgres = 'PostgreSQL',
}

// const projects = [
//     {
//         title: 'Task-Tracker-App',
//         stack: [
//             Technologies.react,
//             Technologies.redux,
//             Technologies.styledComponents,
//             Technologies.ts
//         ]
//     },
//     {
//         title: 'Task-Tracker-Back',
//         stack: [
//             Technologies.node,
//             Technologies.nest,
//             Technologies.graphql,
//             Technologies.prisma,
//             Technologies.postgres,
//             Technologies.ts
//         ]
//     }
// ]
export const Projects = () => {
    const [filter, setFilter] = useState<Technologies | null>(null)
    const filterValues = Object.values(Technologies)
    return (
        <div className="block-conteiner">
            <span className="block-subtitle">Projects</span>
            <span className="block-title">Мои пет-проекты:</span>
            <select>
                {filterValues.map((tech, i) => <option key={i}>{tech}</option>)}
            </select>
            <div className="flex justify-center flex-wrap">
                {projects.map(({title, stack, img}) => <ProjectItem title={title} previewImg={img} stack={stack}/>)}
               {/* <ProjectItem title="Task-Tracker-App" previewImg="/" stack={['React', 'Redux', 'TypeScript', 'Styled-components']}/>
               <ProjectItem title="Task-Tracker-App" previewImg="/" stack={['React', 'Redux', 'TypeScript', 'Styled-components']}/>
               <ProjectItem title="Task-Tracker-App" previewImg="/" stack={['React', 'Redux', 'TypeScript', 'Styled-components']}/> */}
            </div>
        </div>
    );
}
