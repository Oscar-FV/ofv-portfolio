interface CardTitleProps{
    title: string,
    clasName?: string
}

const CardTitle = ({title}: CardTitleProps) => {
  return (
    <div className="rounded flex justify-center items-center">
      <h1 className="font-titles text-primary-900 text-4xl 2xl:text-3xl">
        {title}
      </h1>
    </div>
  );
};

export default CardTitle;
