export type FilterProps = {
  items: string[];
  filterLabel?: string;
  selected?: string;
  setCallback: (x: string)=> void;
};

const Filters = ({ items, filterLabel, selected, setCallback }: FilterProps) => {
  return (
    <div className="px-4 py-2 w-full">
      <div className="m-auto py-2 w-[120px] text-sm text-center">
        <div>{filterLabel}</div>
        <hr className="text-gray-300 border-1 mt-1"></hr>
      </div>
      <div className="flex flex-wrap justify-between gap-y-2.5">
        {items.map((item: string) => (
          <button key={item} className={`px-4 py-1 rounded  hover:bg-[#7cba01] text-sm ${item===selected? 'bg-[#7cba01]': 'bg-[#c5e09b]'}` } onClick={()=>{
            setCallback(item);
            }}>
            {item}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Filters;
