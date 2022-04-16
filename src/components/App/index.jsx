import { useEffect, useState } from 'react';

import { TrackingCard } from '../TrackingCard';
import { UserCard } from '../UserCard';
import './styles.css';

const data = require('../../services/data/data.json');

export const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  // console.log(periodContext);

  useEffect(() => {
    setUserInfo(data);
  }, []);

  return (
    <div id="app">
      <UserCard />
      <section className="user-info">
        {userInfo.map((info, index) => (
          <TrackingCard info={info} key={String(info.title + index).replace(' ', '')} />
        ))}
      </section>
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
};
