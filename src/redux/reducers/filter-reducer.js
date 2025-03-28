const LOWER_FILTER = 'LOWER_FILTER';
const FAST_FILTER = 'FAST_FILTER';
const OPTIMAL_FILTER = 'OPTIMAL_FILTER';

const initialState = {
  filter: LOWER_FILTER,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOWER_FILTER:
      return { ...state, filter: LOWER_FILTER };
    case FAST_FILTER:
      return { ...state, filter: FAST_FILTER };
    case OPTIMAL_FILTER:
      return { ...state, filter: OPTIMAL_FILTER };
    default:
      return state;
  }
};

export default filterReducer;
