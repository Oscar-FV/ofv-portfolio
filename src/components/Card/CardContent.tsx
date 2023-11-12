interface CardContentProps {
  text: string,
  clasName?: string
}

const CardContent = ({ text }: CardContentProps) => {
  return <p className="py-3 font-body text-body text-sm mt-3">{text}</p>;
};

export default CardContent;
