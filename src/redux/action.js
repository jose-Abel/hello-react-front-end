export const CHANGE_GREETING_SUCCESS = 'rails-react-hello-world/CHANGE_GREETING_SUCCESS';
export const CHANGE_GREETING_FAILURE = 'rails-react-hello-world/CHANGE_GREETING_FAILURE';

export const changeGreetings = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/random_greetings');
    const data = await response.json();

    dispatch({ type: CHANGE_GREETING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CHANGE_GREETING_FAILURE, err });
  }
};
