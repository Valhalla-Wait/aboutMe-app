const frontendSkills = [
    'HTML',
    'CSS, SCSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux (+toolkit)',
    'Ant-Design',
    'Tailwind',
    'Styled-components',
    'Vite',
    'Effector',
]
const backendSkills = [
    'TypeScript',
    'Node.js',
    'Express.js',
    'Nest',
    'GraphQL',
    'Prisma',
    'Sequalize',
    'SQL',
    'PostgreSQL',
    'MySQL',
    'PHP'
]
export const Skills = () => {
    return (
        <div className="block-conteiner">
            <span className="block-subtitle">Skills</span>
            <span className="block-title">Технологии с которыми я работал:</span>
            <div className="flex items-center">
                <div className="grid gap-[15px]">
                    <span className="text-blue-text font-bold text-[28px]">Frontend:</span>
                    <ul className="grid gap-[10px]">
                        {frontendSkills.map((skill, index) => <li className="text-[21px]" key={index}>- {skill}</li>)}
                    </ul>
                </div>
                <div className="grid gap-[15px]">
                <span className="text-pink-text font-bold text-[28px]">Backend:</span>
                    <ul className="grid gap-[10px]">
                    {backendSkills.map((skill, index) => <li className="text-[21px]" key={index}>- {skill}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
