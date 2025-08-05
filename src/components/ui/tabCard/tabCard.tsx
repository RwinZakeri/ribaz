import { tabType } from "./type";

const TabCard = ({ id, index, title, theme, className }: tabType) => {
  const getTheme = (theme: tabType["theme"]) => {
    switch (theme) {
      case "dark":
        return "serviceCardDark ";
        break;
      case "orange":
        return "serviceCardOrange ";
        break;

      default:
        return "serviceCardLight";
        break;
    }
  };

  return (
    <div
      className={`shadow-sm p-4 w-full ${getTheme(theme)} ${className}`}
      key={id}
    >
      <span>{index + 1}</span>
      <h2 className="text-xl font-morabba">{title}</h2>
    </div>
  );
};

export default TabCard;
