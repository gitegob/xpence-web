export const BudgetCard = () => {
  return (
    <div>
      <div className="bg-[#FCF9FF] rounded-lg w-full h-36 flex flex-col items-center justify-center mt-4">
        <div className="text-4xl font-semibold text-[#5E419A]">56,748 Rwf</div>
        <div className="text-xs mt-2 text-gray-500 font-semibold">
          14 Feb 2020 - Now
        </div>
      </div>
      <div className="flex">
        <button className="basis-1/2 bg-[#FFF5DF] text-[#ECAA11] font-semibold py-2 rounded-tl-md rounded-bl-md">
          EXPENSE
        </button>
        <button className="basis-1/2 bg-[#ECAA11] text-[#FFF5DF] font-semibold py-2 rounded-tr-md rounded-br-md">
          INCOME
        </button>
      </div>
    </div>
  );
};
