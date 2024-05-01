/** Component  to display list of cities and time data of these */
import { useState } from "react";
import CityTimeInfo from "./CityTimeInfo";

function CityTimeInfoList({ timeOffsetReference }) {
  const [citiesList, setCitiesList] = useState([]);

  //function to add new CityTimeInfo component in the list
  const onAddBtnClick = (event) => {
    setCitiesList(
      citiesList.concat(
        <CityTimeInfo
          key={citiesList.length}
          sendTimeData={() => {}}
          timeOffsetReference={timeOffsetReference}
          main={false}
        />
      )
    );
  };

  //function to clear list of cities
  const onRemoveBtnClick = (event) => {
    setCitiesList([]);
  };

  return (
    <div>
      {citiesList.length > 0 ? <hr /> : null}
      {citiesList}
      <hr />
      <div className="cities_list">
        <button onClick={onAddBtnClick}>Add place</button>
        <button onClick={onRemoveBtnClick}>Clear list</button>
      </div>
    </div>
  );
}

export default CityTimeInfoList;
