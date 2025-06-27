const SpacexCard = ({ item }: any) => {
  return (
    <div className="shadow-2 rounded-lg min-h-50 w-full sm:w-50 bg-white p-4">
      <div className="bg-gray-200 w-[170px] h-[170px]">
        <img src={item.links.mission_patch} />
      </div>
      <div className="py-2">
        <div className="font-bold"> {item.mission_name}</div>
        <div> Rocket Id: {item.rocket. rocket_id}</div>
        <div> Launch year: {item.launch_year}</div>
        <div> Rocket type: {item.rocket.rocket_type}</div>
        <div> Rocket name: {item.rocket.rocket_name}</div>
      </div>
    </div>
  );
};

export default SpacexCard;
