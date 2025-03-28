import logo from '../../image/logo.svg';
import TransferFilter from '../transfers-filter';
import TicketsFilter from '../tickets-filter';
import TicketsList from '../tickets-list';

import appStyles from './app.module.scss';

const App = () => {
  const { header, content } = appStyles;

  return (
    <div className="app">
      <header className={header}>
        <a href="#">
          <img alt="Logo" src={logo} />
        </a>
      </header>
      <main className={content}>
        <TransferFilter />
        <section className="tickets">
          <TicketsFilter />
          <TicketsList />
        </section>
      </main>
    </div>
  );
};

export default App;
