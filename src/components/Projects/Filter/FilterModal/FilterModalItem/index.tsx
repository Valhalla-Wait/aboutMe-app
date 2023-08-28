export const FilterModalItem = ({title, callback, active}:{title:string, callback: () => void, active?: boolean}) => {
    return(
        <div onClick={callback} className={`flex w-max items-center gap-[8px] rounded-[25px] font-semibold ${active ? 'bg-active-purple' : 'bg-active-grey'} px-[20px] py-[5px] cursor-pointer`}>
            {title}
        </div>
    )
}