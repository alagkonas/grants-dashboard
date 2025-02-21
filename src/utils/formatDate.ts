export const formatDate = (date: Date | undefined): string => {

  if (!date) return "";

  const month = date.toLocaleString("en-US", { month: "long" });

  const day = date.getDate();

  const getOrdinalSuffix = (dayNum: number): string => {
    if (dayNum > 3 && dayNum < 21) return "th";
    switch (dayNum % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
    }
  };

  return `${month} ${day}${getOrdinalSuffix(day)}`;
};
