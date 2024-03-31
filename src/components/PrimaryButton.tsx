type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  isDisabled: boolean;
  theme: PrimaryButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-mono100 text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  isDisabled,
  theme,
  children,
  onClick,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`
        w-full
        rounded-default
        h-[59px]
        ${color[theme]}
        ${disabledStyle}
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
