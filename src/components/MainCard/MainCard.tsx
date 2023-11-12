import {ReactNode} from 'react';
import './MainCard.css'

interface MainCardProps {
    children: ReactNode;
}

const MainCard = ({children}: MainCardProps) => {
  return (
    <section className="flex flex-col justify-center w-full h-[65%] 2xl:h-full bg-accent-50 rounded-[45px] card-shadow px-[10%] transition-height ease-in-out duration-300">
        {children}
    </section>
  )
}

export default MainCard
