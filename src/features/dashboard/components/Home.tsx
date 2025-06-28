import { useState } from "react";
import SpacexCard from "../../../shared/components/card";
import Filters from "../../../shared/components/Filters";
import useFetchSpacexData from "../../../shared/hooks/useFetchSpacexData";
import { YEARS } from "../constants/general.constants";

const Home = () => {
  const [year, setYear] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  const [landSuccess, setLandSuccess] = useState("");
  const [spaceXData] = useFetchSpacexData({ year: year,   land_success: landSuccess.toLowerCase(), launch_success: launchSuccess.toLowerCase() });
console.log(launchSuccess);
  const years = YEARS;
  return (
    <div className="flex gap-x-[20px] flex-wrap sm:flex-nowrap">
      <div className="bg-white rounded-lg shadow min-w-[200px] max-w-[200px]">
        <h3 className="font-bold px-4 pt-4">Filters</h3>
        <Filters
          filterLabel="Launch year"
          items={years}
          selected={year}
          setCallback={setYear}
        />
        <Filters
          filterLabel="Successful Launch"
          items={["True", "False"]}
          selected={launchSuccess}
          setCallback={setLaunchSuccess}
        />
        <Filters
          filterLabel="Successful Landing"
          items={["True", "False"]}
          selected={landSuccess}
          setCallback={setLandSuccess}
        />
        <button className={`px-4 py-1 m-4 rounded bg-black text-white  hover:bg-[#7cba01] text-sm` } onClick={()=>{
            setYear('');
            setLandSuccess('');
            setLaunchSuccess('');
            }}>
            Reset
          </button>
      </div>
      <div className="flex flex-wrap gap-5 flex-col sm:flex-row justify-center">
        {spaceXData.map((card, index) => (
          <SpacexCard key={index} item={card} />
        ))}
      </div>
    </div>
  );
};
export default Home;
