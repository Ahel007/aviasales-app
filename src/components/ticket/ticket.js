import { format, add } from 'date-fns';

import ticketStyles from './ticket.module.scss';

const Ticket = ({ tickets }) => {
  const {
    back__cities,
    back__duration,
    back__stops,
    there__cities,
    there__duration,
    there__stops,
    carrier,
    price,
    ticket,
  } = ticketStyles;

  let thereHours = Math.trunc(tickets.segments[0].duration / 60);
  let thereMinute = tickets.segments[0].duration % 60;
  let backHours = Math.trunc(tickets.segments[1].duration / 60);
  let backMinute = tickets.segments[1].duration % 60;

  const thereDate = `${format(new Date(tickets.segments[0].date), 'HH:mm')} - ${format(add(new Date(tickets.segments[0].date), { hours: thereHours, minutes: thereMinute }), 'HH:mm')}`;
  const backDate = `${format(new Date(tickets.segments[1].date), 'HH:mm')} - ${format(add(new Date(tickets.segments[1].date), { hours: backHours, minutes: backMinute }), 'HH:mm')}`;

  return (
    <article className={ticket}>
      <div className={price}>{`${tickets.price} P`}</div>
      <div className={carrier}>
        <img src={`http://pics.avs.io/110/36/${tickets.carrier}.png`} width={110} height={36} />
      </div>
      <div className={there__cities}>
        <p>{`${tickets.segments[0].origin} – ${tickets.segments[0].destination}`}</p>
        <span>{thereDate}</span>
      </div>
      <div className={there__duration}>
        <p>В ПУТИ</p>
        <span>{`${thereHours}ч ${thereMinute}м`}</span>
      </div>
      <div className={there__stops}>
        <p>
          {tickets.segments[0].stops.length === 1
            ? `${tickets.segments[0].stops.length} пересадка`
            : tickets.segments[0].stops.length === 0
              ? 'Без пересадок'
              : `${tickets.segments[0].stops.length} пересадки`}
        </p>
        <span>{tickets.segments[0].stops.join(', ')}</span>
      </div>
      <div className={back__cities}>
        <p>{`${tickets.segments[1].origin} – ${tickets.segments[1].destination}`}</p>
        <span>{backDate}</span>
      </div>
      <div className={back__duration}>
        <p>В ПУТИ</p>
        <span>{`${backHours}ч ${backMinute}м`}</span>
      </div>
      <div className={back__stops}>
        <p>
          {tickets.segments[1].stops.length === 1
            ? `${tickets.segments[1].stops.length} пересадка`
            : tickets.segments[1].stops.length === 0
              ? 'Без пересадок'
              : `${tickets.segments[1].stops.length} пересадки`}
        </p>
        <span>{tickets.segments[1].stops.join(', ')}</span>
      </div>
    </article>
  );
};

export default Ticket;
