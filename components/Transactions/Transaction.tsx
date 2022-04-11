import { FiEdit2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionType } from "../../utils/interfaces";

export const Transaction = ({ type }: any) => {
  return (
    <div className="flex p-4 items-center justify-between">
      <div className="flex items-center">
        <div
          className={`${
            type === TransactionType.EXPENSE ? "bg-[#E85C5C]" : "bg-[#5E419A]"
          } h-1 w-1 rounded-full mr-6`}
        ></div>
        <div
          className={`font-semibold ${
            type === TransactionType.EXPENSE
              ? "text-gray-400"
              : "text-[#5E419A]"
          } tracking-wider text-base`}
        >
          {type === TransactionType.EXPENSE ? "- " : "+ "}500,000Rwf
        </div>
      </div>
      <div className="text-gray-500 font-light">14 Feb 2021</div>
      <div className="uppercase font-extrabold">Food</div>
      <div className="text-gray-500 font-light">
        Boy&apos;s night at Marriott Hotel Kigali
      </div>
      <div className="flex justify-center items-center mr-6">
        <div className="p-2 bg-[#EEE4F8] rounded-lg mx-1 cursor-pointer text-purple-800">
          <FiEdit2 />
        </div>
        <div className="p-2 bg-[#FFEEF4] rounded-lg mx-1 cursor-pointer text-pink-600">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};
