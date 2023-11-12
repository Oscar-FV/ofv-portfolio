import { ReactNode } from "react"

interface CardFooterProps{
    children: ReactNode,
    className?: string
}

const CardFooter = ({children}: CardFooterProps) => {
  return (
    <div className="flex justify-end items-end mt-6">
      {children}
    </div>
  )
}

export default CardFooter
