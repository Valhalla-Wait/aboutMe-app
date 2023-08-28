export const ProjectItem = ({
    title,
    stack,
    previewImg
}:{
    title: string,
    stack: string[],
    previewImg: string
}) => {
    return (
        <div className="cursor-pointer max-w-[300px] w-full m-[20px] overflow-hidden bg-grey rounded-[18px] duration-200 hover:scale-110">
            <div>
                <img src={previewImg} alt="" />
            </div>
            <div className="p-[10px]">
                <div>{title}</div>
                <div>stack: {stack.join(', ')}</div>
            </div>
        </div>
    );
}