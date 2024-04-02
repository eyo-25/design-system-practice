interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({
  iconPath,
  alt,
  onClick,
}: IIconButtonProps) {
  return (
    <button onClick={onClick} className="w-3 h-3">
      <img alt={alt} src={iconPath} />
    </button>
  );
}
