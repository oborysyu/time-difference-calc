/** Component to define city/place and get time data for it */
import { useState } from "react";
import { getDataByCity } from "../services";

function CityTimeInfo({ sendTimeData, timeOffsetReference, main }) {
  const [city, setCity] = useState("");
  const [timeData, setTimeData] = useState(null);

  //method to get data by city(place) name
  const getData = async () => {
    const rez = await getDataByCity(city);
    setTimeData(rez);
    sendTimeData(rez.timezone_offset_with_dst);
  };

  /** "main" is the panel is a panel where the user defines a reference city (or place) relative to which the time difference will be calculated */
  return (
    <div className={main ? "card" : "city"}>
      <div className="container">
        <input
          type="text"
          placeholder="Enter name of city(place)"
          onChange={(e) => setCity(e.target.value)}
        />
        {main || !timeData?.date_time ? (
          <button onClick={() => getData()}>Set</button>
        ) : null}
      </div>
      <div className="container">
        {timeData && !timeData.message ? (
          <div className="city_data">
            <div>By your request was found:</div>
            {timeData?.geo.country.length > 0 ? (
              <div>Country - {timeData?.geo.country}</div>
            ) : null}
            {timeData?.geo.country.length > 0 ? (
              <div>State - {timeData?.geo.country}</div>
            ) : null}
            {timeData?.geo.city.length > 0 ? (
              <div>City - {timeData?.geo.city}</div>
            ) : null}
            {timeData?.geo.locality.length > 0 ? (
              <div>Locality - {timeData?.geo.locality}</div>
            ) : null}
          </div>
        ) : null}
        {timeData ? (
          timeData?.message ? (
            <div className="error">{timeData?.message}</div>
          ) : (
            <>
              <div>Current time: {timeData?.date_time}</div>
              {main ? null : (
                <div>
                  Time difference: {timeData?.timezone_offset_with_dst - timeOffsetReference}h
                </div>
              )}
            </>
          )
        ) : null}
      </div>
    </div>
  );
}

export default CityTimeInfo;
