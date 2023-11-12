import { ReactNode } from "react"

interface CardContainerProps{
    children: ReactNode,
    clasName?: string;
}

const CardContainer = ({children}: CardContainerProps) => {
  return (
    <div className="grid grid-cols-2 2xl:grid-cols-4 h-[70%] 2xl:h-[55%] gap-4 items-center">
        {children}
    </div>
  )
}

export default CardContainer
