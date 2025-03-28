import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './reducers/filter-reducer';
import transferReducer from './reducers/transfer-reducer';
import ticketsReducer from './reducers/tikets-reducer';

const store = configureStore({ reducer: { filterReducer, transferReducer, ticketsReducer } });

export default store;
