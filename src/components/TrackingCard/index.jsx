import P from 'prop-types';
import { PeriodList } from '../PeriodList';
import './styles.css';

export const TrackingCard = ({ className, title, content, setPeriod, period }) => {
  return (
    <div className={className}>
      <div className="card-info">
        <header>
          <h1>{title}</h1>
          <PeriodList setPeriod={setPeriod} />
        </header>
        <div className="card-content">
          <h2 className="card-value">{content.current}hrs</h2>
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
