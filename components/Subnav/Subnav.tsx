export const Subnav = () => {
  return (
    <div className="flex mt-2 justify-between items-center border-b-gray-200 border-b-[1px] p-2">
      <h2 className="text-2xl">All Accounts</h2>
      <div className="flex items-center last:mr-5">
        <input
          type="date"
          name="Date"
          id="date"
          placeholder="From"
          className="bg-[#FCF9FF] p-4 mx-2 rounded-md"
        />
        <input
          type="date"
          name="Date"
          id="date"
          placeholder="To"
          className="bg-[#FCF9FF] p-4 mx-2 rounded-md"
        />
        <button className="border-none rounded-md bg-[#FFF5DF] w-32 h-12 py-0 mx-2 text-[#ECAA11] font-semibold text-sm">
          FILTER
        </button>
        <select
          name="select_period"
          id="select-period"
          className="bg-[#FCF9FF] p-4 mx-2 rounded-md font-semibold outline-none cursor-pointer"
        >
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
    </div>
  );
};
