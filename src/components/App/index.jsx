import { useEffect, useState } from 'react';

const data = require('../../services/data/data.json');

export const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [periodSelected, setPeriodSelected] = useState('monthly');

  useEffect(() => {
    setUserInfo(data);
  }, []);

  return (
    <div>
      <select defaultValue={periodSelected} onChange={(e) => setPeriodSelected(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      {periodSelected == 'monthly' &&
        userInfo.map((info, index) => {
          return (
            <div key={info.title + index}>
              <p>{info.title}</p>
              {console.log('Period', 'Monthly')}
              {console.log('title', info.title)}
              {console.log(info.timeframes.monthly)}
            </div>
          );
        })}
      {periodSelected == 'weekly' &&
        userInfo.map((info, index) => {
          return (
            <div key={info.title + index}>
              <p>{info.title}</p>
              {console.log('Period', 'Weekly')}
              {console.log('title', info.title)}
              {console.log(info.timeframes.weekly)}
            </div>
          );
        })}
      {periodSelected == 'daily' &&
        userInfo.map((info, index) => {
          return (
            <div key={info.title + index}>
              <p>{info.title}</p>
              {console.log('Period', 'Daily')}
              {console.log('title', info.title)}
              {console.log(info.timeframes.daily)}
            </div>
          );
        })}
      Report for Jeremy Robson Daily Weekly Monthly Work 5hrs {/*<!-- daily -->*/}
      Previous - 7hrs {/*<!-- daily -->*/}
      32hrs {/*<!-- weekly -->*/}
      Previous - 36hrs {/*<!-- weekly -->*/}
      103hrs {/*<!-- monthly -->*/}
      Previous - 128hrs {/*<!-- monthly -->*/}
      Play 1hr {/*<!-- daily -->*/}
      Previous - 2hrs {/*<!-- daily -->*/}
      10hrs {/*<!-- weekly -->*/}
      Previous - 8hrs {/*<!-- weekly -->*/}
      23hrs {/*<!-- monthly -->*/}
      Previous - 29hrs {/*<!-- monthly -->*/}
      Study 0hrs {/*<!-- daily -->*/}
      Previous - 1hr {/*<!-- daily -->*/}
      4hrs {/*<!-- weekly -->*/}
      Previous - 7hrs {/*<!-- weekly -->*/}
      13hrs {/*<!-- monthly -->*/}
      Previous - 19hrs {/*<!-- monthly -->*/}
      Exercise 1hr {/*<!-- daily -->*/}
      Previous - 1hr {/*<!-- daily -->*/}
      4hrs {/*<!-- weekly -->*/}
      Previous - 5hrs{/* <!-- weekly -->*/}
      11hrs {/*<!-- monthly -->*/}
      Previous - 18hrs{/* <!-- monthly -->*/}
      Social 1hr {/*<!-- daily -->*/}
      Previous - 3hrs {/*<!-- daily -->*/}
      5hrs {/*<!-- weekly -->*/}
      Previous - 10hrs{/* <!-- weekly -->*/}
      21hrs {/*<!-- monthly -->*/}
      Previous - 23hrs {/*<!-- monthly -->*/}
      Self Care 0hrs{/* <!-- daily -->*/}
      Previous - 1hr {/*<!-- daily -->*/}
      2hrs {/*<!-- weekly -->*/}
      Previous - 2hrs {/*<!-- weekly -->*/}
      7hrs{/* <!-- monthly -->*/}
      Previous - 11hrs{/* <!-- monthly -->*/}
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
};
