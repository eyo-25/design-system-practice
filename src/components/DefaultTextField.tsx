import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  placeholder: string;
  value: string;
  isError: boolean;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick: () => void;
}

export default function DefaultTextField({
  value,
  errorMessage,
  iconPath,
  iconAlt,
  placeholder,
  isError,
  id,
  onChange,
  onIconClick,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
        text-primary
        border-b
        ${borderColor}
      `}
      >
        <input
          id={id}
          className="outline-none"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
