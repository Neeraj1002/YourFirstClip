import { Briefcase, Users } from "lucide-react"; // Make sure lucide-react is installed!

const Card = ({ title, count, iconType, onClick }) => {
  // Ensure that iconType is a string
  const IconComponent = iconType === "portfolio" ? Briefcase : Users;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-lg font-semibold text-gray-700 mb-3">{title}</div>

      <div
        className="bg-gray-700 hover:bg-gray-500 shadow-lg rounded-xl p-6 flex flex-col items-center justify-center 
        w-40 h-40 sm:w-48 sm:h-48 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-[24px]"
        onClick={onClick}
      >
        <div className="text-[28px] font-bold text-white">{count}</div>
      </div>
    </div>

  );
};

export default Card;
