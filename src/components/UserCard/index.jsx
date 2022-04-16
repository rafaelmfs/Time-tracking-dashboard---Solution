import { PeriodMenu } from '../PeriodMenu';
import { UserInfo } from '../UserInfo';
import './styles.css';

export const UserCard = () => {
  return (
    <section className="user-card">
      <UserInfo />
      <PeriodMenu />
    </section>
  );
};
