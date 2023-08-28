import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import TaskTrackerImg from "/tracker.jpg"
import FunnelIcon from "@heroicons/react/24/outline/FunnelIcon"
import { FilterButton } from "./Filter";
import { Modal } from "../../shared/ui/Modal";
import { FilterModal } from "./Filter/FilterModal";

const projects = [
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        github: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        github: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        github: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        github: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        github: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        github: 'https:link'
    },
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript'
        ],
        github: 'https:link'
    },
]

// enum Technologies {
//     react = 'React',
//     redux = 'Redux',
//     js = 'JavaScript',
//     ts = 'TypeScript',
//     styledComponents = 'Styled Components',
//     html = 'HTML',
//     css = 'CSS',
//     scss = 'SCSS',
//     tailwind = 'Tailwind',
//     vite = 'Vite',
//     effector = 'Effector',
//     antDesign = 'Ant-Design',
//     node = 'Node.js',
//     express = 'Express',
//     nest = 'Nest',
//     graphql = 'GraphQL',
//     prisma = 'Prisma',
//     sequalize = 'Sequalize',
//     sql = 'SQL',
//     postgres = 'PostgreSQL',
// }

const technologies = [
    'React',
'Redux',
'JavaScript',
'TypeScript',
'Styled Components',
'HTML',
'CSS',
'SCSS',
'Tailwind',
'Vite',
'Effector',
'Ant-Design',
'Node.js',
'Express',
'Nest',
'GraphQL',
'Prisma',
'Sequalize',
'SQL',
'PostgreSQL',
]

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
    const [stackList, setStackList] = useState(technologies.map((item, index) => ({
        id: index,
        title: item,
    })))
    const [isShowFilterModal, setIsShowFilterModal] = useState(false)
    const [filteredProjects, setFilteredProjects] = useState(projects)

    const setFilteredStack = (filteredStack: any[]) => setFilteredProjects(() => {
        const newArr = projects.filter(project => filteredStack.forEach((value) => {
            if(project.stack.includes(value.title)) return true
        }))
        return newArr
    })

    const toggleShowFilterModal = () => setIsShowFilterModal(prev => !prev)
    return (
        <div className="block-conteiner">
            <span className="block-subtitle">Projects</span>
            <span className="block-title">Мои пет-проекты:</span>
            <FilterButton toggleShowFilter={toggleShowFilterModal}/>
            {isShowFilterModal && <FilterModal confirmFilter={(filteredStack: any[]) => setFilteredStack(filteredStack)} stackItems={stackList} />}
            <div className="flex justify-center flex-wrap">
            {/* <Modal>
                hello
            </Modal> */}
                {filteredProjects.map(({title, stack, img, github}) => <ProjectItem title={title} previewImg={img} github={github} stack={stack}/>)}
            </div>
        </div>
    );
}
