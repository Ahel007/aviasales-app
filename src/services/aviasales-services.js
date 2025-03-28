const TICKETS_REQUEST = 'TICKETS_REQUEST';
const TICKETS_SUCCESS = 'TICKETS_SUCCESS';
const TICKETS_ERROR = 'TICKETS_ERROR';

export const getTickets = () => {
  return (dispatch) => {
    dispatch({ type: TICKETS_REQUEST });

    fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          })
          .then((data) => {
            dispatch({ type: TICKETS_SUCCESS, payload: data });
          })
          .catch(() => {
            dispatch({ type: TICKETS_ERROR });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
