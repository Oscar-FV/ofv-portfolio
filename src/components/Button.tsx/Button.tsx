interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="font-body text-xs text-primary-900 border-2 border-primary-900 py-1 px-2
                hover:bg-primary-900 hover:text-secondary transition ease-in"
    >
      {text}
    </button>
  );
};

export default Button;
