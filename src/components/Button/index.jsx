import P from 'prop-types';
import { useContext } from 'react';
import { PeriodContext } from '../../context/ContextPeriod';
import './styles.css';

const handleClick = (e, setPeriod) => {
  document.querySelector('button.selected').classList.remove('selected');
  e.target.classList = 'selected';
  setPeriod(e.target.value);
};

export const Button = ({ text, selected = null }) => {
  const { setPeriod } = useContext(PeriodContext);

  return (
    <button onClick={(e) => handleClick(e, setPeriod)} value={text} className={selected}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  selected: P.string,
};
