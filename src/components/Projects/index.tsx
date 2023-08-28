import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import TaskTrackerImg from "/tracker.jpg"
import BidsImg from "/bids.jpg"
import AboutMeImg from "/aboutme.jpg"
import NodeImg from "/node.jpg"
import JsImg from "/js.jpg"
import { FilterButton } from "./Filter";
import { FilterModal } from "./Filter/FilterModal";

const projects = [
    {
        title: 'Task-Tracker',
        img: TaskTrackerImg,
        stack: [
            'React',
            'Redux',
            'TypeScript',
            'Styled Components',
            'Ant-Design'
        ],
        github: 'https://github.com/Valhalla-Wait/Task-Tracker-App'
    },
    {
        title: 'Task-Manager (backend)',
        img: NodeImg,
        stack: [
            'TypeScript',
            'Node.js',
            'Nest',
            'PostgreSQL',
            'GraphQL',   
            'Prisma',

        ],
        github: 'https://github.com/Valhalla-Wait/task-manager_backend'
    },
    {
        title: 'Documents App (backend)',
        img: NodeImg,
        stack: [
            'TypeScript',
            'Node.js',
            'Express',
            'Sequalize',
            'PostgreSQL'
        ],
        github: 'https://github.com/Valhalla-Wait/application-documents_back'
    },
    {
        title: 'Documents App',
        img: BidsImg,
        stack: [
            'React',
            'Redux',
            'Ant-Design',
            'TypeScript',
            'Styled Components'
        ],
        github: 'https://github.com/Valhalla-Wait/application-documents_front'
    },
    {
        title: 'AboutMe App',
        img: AboutMeImg,
        stack: [
            'Tailwind',
            'Vite',
            'React',
            'TypeScript',
        ],
        github: 'https://github.com/Valhalla-Wait/aboutMe-app'
    },
    {
        title: 'Weather App',
        img: JsImg,
        stack: [
            'React',
            'Redux',
            'JavaScript'
        ],
        github: 'https://github.com/Valhalla-Wait/Weather-forecast-App'
    },
]

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

export const Projects = () => {
    const [stackList, setStackList] = useState(technologies.map((item, index) => ({
        id: index,
        title: item,
    })))
    const [isShowFilterModal, setIsShowFilterModal] = useState(false)
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [filterStack, setFilterStack] = useState<any[]>([])
    

    const setFilteredStack = (filteredStack: any[]) => {
        setFilteredProjects(() => {
            if(!filteredStack.length){
                return projects
            }else{
                setFilterStack(filteredStack)
                const newArr = projects.filter(project => project.stack.find(item => filteredStack.map(stackItem => stackItem.title).includes(item)))
                return newArr
            }
            
        })
        setIsShowFilterModal(prev => !prev)
    }

    const toggleShowFilterModal = () => setIsShowFilterModal(prev => !prev)
    return (
        <div className="block-conteiner">
            <span className="block-subtitle">Projects</span>
            <span className="block-title">Мои пет-проекты:</span>
            <FilterButton toggleShowFilter={toggleShowFilterModal}/>
            {isShowFilterModal && <FilterModal selectedFilter={filterStack} confirmFilter={(filteredStack: any[]) => setFilteredStack(filteredStack)} stackItems={stackList} />}
            <div className="flex justify-center flex-wrap">
                {filteredProjects.map(({title, stack, img, github}) => <ProjectItem title={title} previewImg={img} github={github} stack={stack}/>)}
            </div>
        </div>
    );
}
