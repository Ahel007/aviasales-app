import { useSelector, useDispatch } from 'react-redux';

import ticketsFilterStyles from './tickets-filter.module.scss';

const TicketsFilter = () => {
  const {
    fast,
    selected,
    'tickets-filter__item': ticketsFilter__item,
    'tickets-filter__button': ticketsFilter__button,
    'tickets-filter': ticketsFilter,
  } = ticketsFilterStyles;

  const buttonsData = [
    { label: 'Самый дешевый', name: 'lower', filter: 'LOWER_FILTER' },
    { label: 'Самый быстрый', name: fast, filter: 'FAST_FILTER' },
    { label: 'Оптимальный', name: 'optimal', filter: 'OPTIMAL_FILTER' },
  ];

  const filterState = useSelector((state) => state.filterReducer.filter);
  const dispatch = useDispatch();

  const buttons = buttonsData.map(({ name, label, filter }) => {
    const clazz = filterState === filter ? selected : null;

    return (
      <li key={name} className={ticketsFilter__item}>
        <button onClick={() => dispatch({ type: filter })} className={`${ticketsFilter__button} ${name} ${clazz}`}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className={ticketsFilter}>{buttons}</ul>;
};

export default TicketsFilter;
