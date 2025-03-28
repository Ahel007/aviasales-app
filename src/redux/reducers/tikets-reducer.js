const TICKETS_REQUEST = 'TICKETS_REQUEST';
const TICKETS_SUCCESS = 'TICKETS_SUCCESS';
const TICKETS_ERROR = 'TICKETS_ERROR';

const LOWER_FILTER = 'LOWER_FILTER';
const FAST_FILTER = 'FAST_FILTER';
const OPTIMAL_FILTER = 'OPTIMAL_FILTER';

const SLICED_COUNTER = 'SLICED_COUNTER';

const initialState = {
  tickets: [],
  loading: false,
  error: false,
  slicedCounter: 5,
  stop: false,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKETS_REQUEST:
      return { ...state, loading: true };
    case TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets.sort((a, b) => a.price - b.price)],
        error: false,
        loading: false,
        stop: action.payload.stop,
      };
    case TICKETS_ERROR:
      return { ...state, error: true, loading: false };

    case LOWER_FILTER:
      return { ...state, tickets: [...state.tickets].sort((a, b) => a.price - b.price) };
    case FAST_FILTER:
      return {
        ...state,
        tickets: [...state.tickets].sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        ),
      };
    case OPTIMAL_FILTER:
      return {
        ...state,
        tickets: [...state.tickets].sort(
          (a, b) =>
            (a.price + a.segments[0].duration + a.segments[1].duration) / 2 -
            (b.price + (b.segments[0].duration + b.segments[1].duration)) / 2
        ),
      };

    case SLICED_COUNTER:
      return { ...state, slicedCounter: state.slicedCounter + 5 };

    default:
      return state;
  }
};

export default ticketsReducer;
