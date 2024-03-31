interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({
  iconPath,
  iconAlt,
  text,
  onClick,
}: ICategoryButtonProps) {
  return (
    <button
      className={`
        flex
        flex-col
        items-center
        rounded-button-default
        border
        border-primary
        text-primary
        text-base
        font-bold
        px-[22px]
        py-4
    `}
      onClick={onClick}
    >
      <img alt={iconAlt} src={iconPath} className="w-10 h-10" />
      <p>{text}</p>
    </button>
  );
}
