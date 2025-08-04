import { tabType } from "./type";

const TabCard = ({ id, index, title, theme }: tabType) => {
  const getTheme = (theme: tabType["theme"]) => {
    switch (theme) {
      case "dark":
        return "serviceCardDark";
        break;

      default:
        return "serviceCardLight";
        break;
    }
  };

  return (
    <div
      className={`shadow-sm serviceCardLight p-4 ${getTheme(theme)} `}
      key={id}
    >
      <span>{index + 1}</span>
      <h2 className="text-xl font-morabba">{title}</h2>
    </div>
  );
};

export default TabCard;
