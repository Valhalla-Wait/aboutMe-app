export const StackItem= ({title, callback, removed}:{title:string, callback?: () => void, removed?: boolean}) => {
    return(
        <div onClick={callback} className="flex items-center gap-[8px] w-max rounded-[25px] font-semibold bg-active-purple px-[10px] w-min">
            {title} {(removed && callback) && <div className="text-[18px] hover:bg-active-grey duration-200 bg-grey b w-min h-min leading-[20px] px-[5px] pb-[2px] rounded-[20px]" onClick={(e) => {
                e.stopPropagation()
                callback()
            }}>	&times;</div>}
        </div>
    )
}