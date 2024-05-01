import { useState } from "react";
import CityTimeInfo from "./components/CityTimeInfo";
import CityTimeInfoList from "./components/CityTimeInfoList";

function App() {
  const [timeOffsetReference, setTimeOffsetReference] = useState(null);

  //function to get time offset from reference city
  function handleTimeDataReference(data) {
    setTimeOffsetReference(data);
  }
  
  return (
    <>
      <div className="main_city">
        <h4>Place with designated reference time</h4>
        <CityTimeInfo sendTimeData={handleTimeDataReference} main={true} />
      </div>
      {/* Do not display list of places(cities) without information about reference city */}
      {timeOffsetReference ? <CityTimeInfoList timeOffsetReference={timeOffsetReference} /> : null}
    </>
  );
}

export default App;
