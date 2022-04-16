import P from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { PeriodContext } from '../../context/ContextPeriod';
import { TrackingCard } from '../TrackingCard';

export const TrackingCardAll = ({ info, className }) => {
  const { period } = useContext(PeriodContext);
  const [periodPerCard, setPeriodPerCard] = useState(period);

  useEffect(() => {
    setPeriodPerCard(period);
  }, [period]);

  if (periodPerCard != period) {
    switch (periodPerCard) {
      case 'monthly': {
        return (
          <TrackingCard
            title={info.title}
            className={className}
            content={info.timeframes.monthly}
            period={periodPerCard}
            setPeriod={setPeriodPerCard}
          />
        );
      }
      case 'weekly': {
        return (
          <TrackingCard
            title={info.title}
            className={className}
            content={info.timeframes.weekly}
            period={periodPerCard}
            setPeriod={setPeriodPerCard}
          />
        );
      }
      case 'daily': {
        return (
          <TrackingCard
            title={info.title}
            className={className}
            content={info.timeframes.daily}
            period={periodPerCard}
            setPeriod={setPeriodPerCard}
          />
        );
      }
    }
  }

  return period == 'monthly' ? (
    <TrackingCard
      title={info.title}
      className={className}
      content={info.timeframes.monthly}
      period={periodPerCard}
      setPeriod={setPeriodPerCard}
    />
  ) : period == 'weekly' ? (
    <TrackingCard
      title={info.title}
      className={className}
      content={info.timeframes.weekly}
      period={periodPerCard}
      setPeriod={setPeriodPerCard}
    />
  ) : period == 'daily' ? (
    <TrackingCard
      title={info.title}
      className={className}
      content={info.timeframes.daily}
      period={periodPerCard}
      setPeriod={setPeriodPerCard}
    />
  ) : (
    <p> Not found</p>
  );
};

TrackingCardAll.propTypes = {
  info: P.node.isRequired,
  className: P.string.isRequired,
};
