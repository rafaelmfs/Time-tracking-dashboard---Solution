import { useEffect, useState } from 'react';

import { PeriodContextProvider } from '../../context/ContextPeriod';
import { TrackingCardAll } from '../TrackingCardAll';
import { UserCard } from '../UserCard';
import './styles.css';

const data = require('../../services/data/data.json');

export const App = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    setUserInfo(data);
  }, []);

  return (
    <div id="app">
      <PeriodContextProvider>
        <main className="container">
          <section className="user-section">
            <UserCard />
          </section>
          <section className="user-tracking">
            {userInfo.map((info, index) => (
              <TrackingCardAll
                info={info}
                key={String(info.title + index).replace(' ', '')}
                className={String(info.title + '-card')
                  .toLowerCase()
                  .replace(' ', '-')}
              />
            ))}
          </section>
        </main>
        <footer className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </footer>
      </PeriodContextProvider>
    </div>
  );
};
