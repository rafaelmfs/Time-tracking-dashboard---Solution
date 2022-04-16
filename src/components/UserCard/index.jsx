import { PeriodMenu } from '../PeriodMenu';
import { UserInfo } from '../UserInfo';

export const UserCard = () => {
  return (
    <section className="user-card">
      <UserInfo />
      <PeriodMenu />
    </section>
  );
};
