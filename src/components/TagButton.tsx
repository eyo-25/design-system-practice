interface ITagButtonProps {
  onClick: () => void;
  children: string;
  isChecked: boolean;
}

export default function TagButton({
  onClick,
  children,
  isChecked,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "bg-dark-opacity text-white";

  return (
    <button
      className={`px-[10px] text-sm font-medium rounded-tag-button border-white border h-[33px] ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
