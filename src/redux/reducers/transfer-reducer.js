const ALL_TRANSFER = 'ALL_TRANSFER';
const NULL_TRANSFER = 'NULL_TRANSFER';
const ONE_TRANSFER = 'ONE_TRANSFER';
const TWO_TRANSFER = 'TWO_TRANSFER';
const THREE_TRANSFER = 'THREE_TRANSFER';

const initialState = {
  transfer: { ALL_TRANSFER, NULL_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER },
};

const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TRANSFER:
      if (action.payload) {
        return {
          ...state,
          transfer: { ...state.transfer, ALL_TRANSFER, NULL_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER },
        };
      } else {
        return { ...state, transfer: {} };
      }
    case NULL_TRANSFER:
      if (action.payload) {
        return { ...state, transfer: { ...state.transfer, NULL_TRANSFER } };
      } else {
        const deletedAll = Object.fromEntries(
          Object.entries(state.transfer).filter(([key]) => key !== ALL_TRANSFER && key !== NULL_TRANSFER)
        );
        return { ...state, transfer: { ...deletedAll } };
      }
    case ONE_TRANSFER:
      if (action.payload) {
        return { ...state, transfer: { ...state.transfer, ONE_TRANSFER } };
      } else {
        const deletedAll = Object.fromEntries(
          Object.entries(state.transfer).filter(([key]) => key !== ALL_TRANSFER && key !== ONE_TRANSFER)
        );
        return { ...state, transfer: { ...deletedAll } };
      }
    case TWO_TRANSFER:
      if (action.payload) {
        return { ...state, transfer: { ...state.transfer, TWO_TRANSFER } };
      } else {
        const deletedAll = Object.fromEntries(
          Object.entries(state.transfer).filter(([key]) => key !== ALL_TRANSFER && key !== TWO_TRANSFER)
        );
        return { ...state, transfer: { ...deletedAll } };
      }
    case THREE_TRANSFER:
      if (action.payload) {
        return { ...state, transfer: { ...state.transfer, THREE_TRANSFER } };
      } else {
        const deletedAll = Object.fromEntries(
          Object.entries(state.transfer).filter(([key]) => key !== ALL_TRANSFER && key !== THREE_TRANSFER)
        );
        return { ...state, transfer: { ...deletedAll } };
      }
    default:
      return state;
  }
};

export default transferReducer;
