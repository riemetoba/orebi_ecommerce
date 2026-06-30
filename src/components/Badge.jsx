const Badge = ({ badgeText, className }) => {
  return (
    <div
      className={`w-auto sm:w-[92px] py-1 sm:py-2.25 bg-deepBlack text-white px-2.5 sm:px-7.5 font-bold text-[10px] sm:text-sm font-DM text-center ${className}`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;