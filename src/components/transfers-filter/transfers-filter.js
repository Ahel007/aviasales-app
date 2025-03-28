import { useSelector, useDispatch } from 'react-redux';

import transfersFilterStyles from './transfers-filter.module.scss';

const TransferFilter = () => {
  const { transfer, transfer__item, transfer__label, transfer__checkbox, transfer__title, transfer__list } =
    transfersFilterStyles;

  const transferData = [
    { label: 'Все', name: 'ALL_TRANSFER' },
    { label: 'Без пересадок', name: 'NULL_TRANSFER' },
    { label: '1 пересадка', name: 'ONE_TRANSFER' },
    { label: '2 пересадки', name: 'TWO_TRANSFER' },
    { label: '3 пересадки', name: 'THREE_TRANSFER' },
  ];

  const transferState = useSelector((state) => {
    return state.transferReducer.transfer;
  });
  const dispatch = useDispatch();

  const transfers = transferData.map(({ name, label }) => {
    const isChecked =
      transferState.ALL_TRANSFER === 'ALL_TRANSFER' || Object.keys(transferState).length === 4
        ? true
        : name === transferState[name]
          ? true
          : false;

    return (
      <li className={transfer__item} key={name}>
        <label htmlFor={name} className={transfer__label}>
          <input
            className={transfer__checkbox}
            type="checkbox"
            id={name}
            checked={isChecked}
            onChange={(e) => dispatch({ type: name, payload: e.target.checked })}
            readOnly
          />
          <span>{label}</span>
        </label>
      </li>
    );
  });

  return (
    <aside className={transfer}>
      <h1 className="visually-hidden"></h1>
      <h2 className={transfer__title}>Количество пересадок</h2>
      <ul className={transfer__list}>{transfers}</ul>
    </aside>
  );
};

export default TransferFilter;
