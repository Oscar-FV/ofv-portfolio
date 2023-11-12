import { ReactNode } from "react";

interface CardProps{
    children: ReactNode,
    className?: string
}

// ${isReadMore ? "h-[120%]" : "h-[100%]"}

const Card = ({children, className}: CardProps) => {

  return (
    <div
      className={`2xl:col-span-2 bg-secondary rounded-lg shadow flex justify-center overflow-y-hidden 
        ${className}`}
    >
      <div className="w-[90%] my-5 gap-1">
        {children}
      </div>
    </div>
  );
};

export default Card;
