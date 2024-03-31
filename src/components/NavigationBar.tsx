import IconButton from "./IconButton";

interface NavigationBarProps {
  isDarkMode: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDarkMode,
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: NavigationBarProps) {
  return (
    <div className="flex justify-between w-full">
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            alt="뒤로가기 버튼"
            iconPath={`/back-button${isDarkMode ? "-white" : ""}.svg`}
            onClick={onBackButtonClick}
          ></IconButton>
        )}
        {showTitle && (
          <h1
            className={`text-2xl ${isDarkMode ? "text-white" : "text-primary"}`}
          >
            {title}
          </h1>
        )}
      </div>
      {showCloseButton && (
        <IconButton
          alt="닫기버튼"
          iconPath={`/delete-button${isDarkMode ? "-white" : ""}.svg`}
          onClick={onCloseButtonClick}
        ></IconButton>
      )}
    </div>
  );
}
