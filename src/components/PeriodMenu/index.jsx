import { Button } from '../Button';
import './styles.css';

export const PeriodMenu = () => {
  return (
    <div className="period-menu">
      <Button text={'daily'} />
      <Button text={'weekly'} />
      <Button text={'monthly'} selected={'selected'} />
    </div>
  );
};
