import { StackItem } from "../../../shared/ui/StackItem";

export const ProjectItem = ({
    title,
    stack,
    previewImg,
    github
}:{
    title: string,
    stack: string[],
    previewImg: string,
    github: string
}) => {
    return (
        <div className="cursor-pointer max-w-[300px] w-full m-[20px] overflow-hidden bg-grey rounded-[18px] duration-200 hover:scale-110">
            <div>
                <img src={previewImg} alt="" />
            </div>
            <div className="p-[10px]">
                <div className="font-bold">{title}</div>
                <div>GitHub: <a className="underline" href={github}>{github}</a></div>
                <div className="flex flex-wrap gap-[5px] mt-[12px]">{stack.map(item => <StackItem title={item} />)}</div>
            </div>
        </div>
    );
}