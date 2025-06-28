const SpacexCard = ({ item }: any) => {
  return (
    <div className="shadow rounded-lg min-h-50 w-full sm:w-55 bg-white p-4">
      <div className="bg-gray-200 w-full  text-center">
        <img className="m-auto w-full p-3" src={item.links.mission_patch_small} />
      </div>
      <div className="py-2 text-sm">
        <div className="font-bold text-lg text-blue-300 py-1"> {item.mission_name}</div>
        <div > <span className="font-bold">Rocket Id:</span> {item.rocket. rocket_id}</div>
        <div > <span className="font-bold">Launch year:</span>  {item.launch_year}</div>
        <div > <span className="font-bold">Rocket type:</span>  {item.rocket.rocket_type}</div>
        <div > <span className="font-bold">Rocket name:</span>  {item.rocket.rocket_name}</div>
      </div>
    </div>
  );
};

export default SpacexCard;
