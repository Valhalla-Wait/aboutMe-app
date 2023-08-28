import { useState } from "react"
import { Modal } from "../../../shared/ui/Modal"
import { FilterModal } from "./FilterModal"

export const FilterButton = ({toggleShowFilter}:{toggleShowFilter: () => void}) => {

    return(
            <button className="rounded-[25px] text-[24px] bg-active-purple px-[20px] w-min" onClick={toggleShowFilter}>Filter</button>
    )
}