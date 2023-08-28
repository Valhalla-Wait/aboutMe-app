export const StackItem= ({title}:{title:string}) => {
    return(
        <div className="flex items-center gap-[8px] w-max rounded-[25px] font-semibold bg-active-purple px-[10px]">
            {title}
        </div>
    )
}