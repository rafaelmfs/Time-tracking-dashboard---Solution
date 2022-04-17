import P from 'prop-types';
import { useState } from 'react';
import './styles.css';

export const PeriodList = ({ setPeriod }) => {
  const [onOff, setOnOff] = useState(false);

  return (
    <div className="period-list">
      <span onClick={() => setOnOff((prevState) => !prevState)}>
        {!onOff && (
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        )}
        {onOff && (
          <svg fill="#BBC0FF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21px" height="21px">
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
          </svg>
        )}
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
  );
};

PeriodList.propTypes = {
  setPeriod: P.func.isRequired,
  selected: P.bool,
};
