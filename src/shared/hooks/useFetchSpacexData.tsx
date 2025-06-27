import { useEffect, useState } from "react";

const useFetchSpacexData = ({ year }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true"
      );
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return data;
};

export default useFetchSpacexData;
