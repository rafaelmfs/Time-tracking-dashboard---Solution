/* eslint-disable react/prop-types */
// import P from 'prop-types';
import { useContext } from 'react';
import { PeriodContext } from '../../context/ContextPeriod';

export const TrackingCard = ({ info }) => {
  const { period } = useContext(PeriodContext);
  console.log(period);
  console.log('Entrei no compornente');

  return period == 'monthly' ? (
    <div>
      <h4>{info.title}</h4>
      <h1>{info.timeframes.monthly.current}</h1>
      <p> Last Month {info.timeframes.monthly.previous}</p>
    </div>
  ) : period == 'weekly' ? (
    <div>
      <h4>{info.title}</h4>
      <h1>{info.timeframes.weekly.current}</h1>
      <p> Last weeek {info.timeframes.weekly.previous}</p>
    </div>
  ) : period == 'daily' ? (
    <div>
      <h4>{info.title}</h4>
      <h1>{info.timeframes.daily.current}</h1>
      <p> Yesterday {info.timeframes.daily.previous}</p>
    </div>
  ) : (
    <p> Not found</p>
  );
};

// TrackingCard.propTypes = {
//   info: P.object.isRequired,
// };
