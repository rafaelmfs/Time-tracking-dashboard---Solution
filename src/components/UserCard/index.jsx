import { PeriodMenu } from '../PeriodMenu';
import { UserInfo } from '../UserInfo';
import './styles.css';

export const UserCard = () => {
  return (
    <div className="user-card">
      <UserInfo />
      <PeriodMenu />
    </div>
  );
};
