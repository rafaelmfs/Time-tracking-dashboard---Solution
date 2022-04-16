import { App } from '../../components/App';
import { PeriodContextProvider } from '../../context/ContextPeriod';
import './styles.css';

export const Home = () => {
  return (
    <PeriodContextProvider>
      <App />
    </PeriodContextProvider>
  );
};
