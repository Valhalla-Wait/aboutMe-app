import { NavBar } from "./NavBar/index"

export const Header = () => {
    return(
        <div className="flex px-[72px] h-[88px] items-center"> 
            <div className="mr-[48px] text-[21px] font-bold">Михаил З.</div>
            <NavBar />
        </div>
    )
}