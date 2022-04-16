import P from 'prop-types';
import { useState } from 'react';

export const PeriodList = ({ setPeriod }) => {
  const [onOff, setOnOff] = useState(false);
  return (
    <div>
      <span onClick={() => setOnOff((prevState) => !prevState)}>
        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            fill="#BBC0FF"
            fillRule="evenodd"
          />
        </svg>
      </span>
      {onOff && (
        <ul>
          <li
            onClick={() => {
              setPeriod('daily');
              setOnOff(false);
            }}
          >
            Daily
          </li>
          <li
            onClick={() => {
              setPeriod('weekly');
              setOnOff(false);
            }}
          >
            Weekly
          </li>
          <li
            onClick={() => {
              setPeriod('monthly');
              setOnOff(false);
            }}
          >
            Monthly
          </li>
        </ul>
      )}
    </div>
    // <select className="select-period" onChange={(e) => setPeriod(e.target.value)}>
    //   <option value="daily" selected={state}>
    //     Daily
    //   </option>
    //   <option value="weekly" selected={state}>
    //     Weekly
    //   </option>
    //   <option value="monthly" selected={state}>
    //     Monthly
    //   </option>
    // </select>
  );
};

PeriodList.propTypes = {
  setPeriod: P.func.isRequired,
  selected: P.bool,
};
