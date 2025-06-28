import { useEffect, useState } from "react";

const useFetchSpacexData = ({
  year,
  launch_success,
  land_success,
  limit = 20,
}: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        let url = `https://api.spacexdata.com/v3/launches?limit=${limit}`;
        if(launch_success){
            url = url+ `&launch_success=${launch_success}`;
        }
        if(land_success){
            url = url+ `&land_success=${land_success}`;
        }
         if(year){
            url = url+ `&launch_year=${year}`;
        }
      //const url = `"https://api.spacexdata.com/v3/launches?limit=${limit}&launch_success=${launch_success}&land_success=${land_success}&launch_year=${year}"`;
      const res = await fetch(url, {});
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [year, launch_success, land_success]);

  return [data];
};

export default useFetchSpacexData;
