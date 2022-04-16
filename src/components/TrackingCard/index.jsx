import P from 'prop-types';
import { PeriodList } from '../PeriodList';

export const TrackingCard = ({ className, title, content, setPeriod, period }) => {
  return (
    <div className={className}>
      <div className="card-info">
        <header>
          <h4>{title}</h4>
          <PeriodList setPeriod={setPeriod} />
        </header>
        <div className="card-content">
          <h1 className="card-value">{content.current}hrs</h1>
          {period == 'daily' && <p className="prev-value">Yesterday - {content.previous}hrs</p>}
          {period == 'weekly' && <p className="prev-value">Last Week - {content.previous}hrs</p>}
          {period == 'monthly' && <p className="prev-value">Last Month - {content.previous}hrs</p>}
        </div>
      </div>
    </div>
  );
};

TrackingCard.propTypes = {
  className: P.string.isRequired,
  title: P.string.isRequired,
  period: P.string.isRequired,
  content: P.object.isRequired,
  setPeriod: P.func.isRequired,
};
