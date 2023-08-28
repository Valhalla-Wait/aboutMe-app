import { useState } from "react"
import { Modal } from "../../../../shared/ui/Modal"
import { FilterModalItem } from "./FilterModalItem"

export const FilterModal = ({stackItems, confirmFilter}:{stackItems:any[], confirmFilter: (filteredStack: any[]) => void}) => {
    const [selectedStack, setSelectedStack] = useState<any[]>([])
    
    const toggleActiveStackItem = (id: number) => {

        const isSelected = !!(selectedStack.find(item => item.id === id))
        if(isSelected) {
            setSelectedStack(prev => prev.filter(item => !(item.id === id)))
        }else{
            const selectItem = stackItems.find(item => item.id === id)
           
            setSelectedStack(prev => [...prev, selectItem])
        }
    }
    console.log(selectedStack)
    return(
        <Modal>
            <div className="max-w-[600px] bg-grey h-min p-[30px] rounded-[20px] grid gap-[25px]">
                <div className="text-center font-bold text-[24px]">Выберите критерии</div>
                <div className="flex items-center flex-wrap gap-[8px]">Выбрано: {selectedStack.map(item => <FilterModalItem title={item.title} active callback={() => toggleActiveStackItem(item.id)}/>)}</div>
                <div className="flex items-center flex-wrap gap-[8px]">Доступно: {stackItems.filter(i => !(selectedStack.find(j => i.id === j.id ))).map(item => <FilterModalItem title={item.title} callback={() => toggleActiveStackItem(item.id)} />)}</div>
                <button className="justify-self-center pb-[2px] rounded-[25px] text-[24px] bg-active-purple px-[20px] w-min" onClick={() => confirmFilter(selectedStack)}>Применить</button>
            </div>
        </Modal>
    )
}