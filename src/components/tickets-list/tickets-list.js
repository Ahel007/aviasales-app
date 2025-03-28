import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTickets } from '../../services/aviasales-services';
import Spinner from '../spinner';
import Ticket from '../ticket';

import ticketsListStyles from './tickets-list.module.scss';

const TicketsList = () => {
  const { 'tickets-list': ticketList, 'tickets-list__button': ticketList__button } = ticketsListStyles;

  const transferState = useSelector((state) => {
    return state.ticketsReducer;
  });
  const slicedCounter = useSelector((state) => {
    return state.ticketsReducer.slicedCounter;
  });
  const filterTransfer = useSelector((state) => {
    return state.transferReducer.transfer;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickets());
  }, []);

  const viewTransferFilter = (ticket) => {
    const convertationObj = {
      NULL_TRANSFER: 0,
      ONE_TRANSFER: 1,
      TWO_TRANSFER: 2,
      THREE_TRANSFER: 3,
    };
    return (
      convertationObj[filterTransfer.NULL_TRANSFER] === ticket.segments[0].stops.length ||
      convertationObj[filterTransfer.ONE_TRANSFER] === ticket.segments[0].stops.length ||
      convertationObj[filterTransfer.TWO_TRANSFER] === ticket.segments[0].stops.length ||
      convertationObj[filterTransfer.THREE_TRANSFER] === ticket.segments[0].stops.length ||
      convertationObj[filterTransfer.NULL_TRANSFER] === ticket.segments[1].stops.length ||
      convertationObj[filterTransfer.ONE_TRANSFER] === ticket.segments[1].stops.length ||
      convertationObj[filterTransfer.TWO_TRANSFER] === ticket.segments[1].stops.length ||
      convertationObj[filterTransfer.THREE_TRANSFER] === ticket.segments[1].stops.length
    );
  };

  let viewTickets = null;
  if (transferState.tickets !== undefined) {
    viewTickets = transferState.tickets.filter(viewTransferFilter).map((ticket, i) => (
      <li key={i}>
        <Ticket tickets={ticket} />
      </li>
    ));
  }

  return (
    <ul className={ticketList}>
      {transferState.loading ? <Spinner /> : null}
      {transferState.error && viewTickets.length === 0 ? <li>{'Билеты не найдены, повторите попытку'}</li> : null}
      {(viewTickets.length !== 0 && !transferState.loading) || !transferState.error ? (
        viewTickets.slice(0, slicedCounter)
      ) : (
        <li>{'По заданному фильтру, билетов не найдено.'}</li>
      )}
      {slicedCounter < viewTickets.length ? (
        <button className={ticketList__button} onClick={() => dispatch({ type: 'SLICED_COUNTER' })}>
          Показать еще 5 билетов!
        </button>
      ) : null}
    </ul>
  );
};

export default TicketsList;
