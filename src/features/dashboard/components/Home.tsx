import { useEffect } from "react";
import SpacexCard from "../../../shared/components/card";
import { Cards } from "../constants/general.constants";
import useFetchSpacexData from "../../../shared/hooks/useFetchSpacexData";

const Home = () => {
  const spaceXData = useFetchSpacexData("");
  console.log(spaceXData);
  return (
    <>
      <div className="flex flex-wrap gap-10 flex-col sm:flex-row">
        {spaceXData.map((card) => (
          <SpacexCard item={card} />
        ))}
      </div>
    </>
  );
};
export default Home;
