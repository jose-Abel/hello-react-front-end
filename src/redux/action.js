export const CHANGE_GREETING_SUCCESS = 'rails-react-hello-world/CHANGE_GREETING_SUCCESS';
export const CHANGE_GREETING_FAILURE = 'rails-react-hello-world/CHANGE_GREETING_FAILURE';

const baseURL = '/random_greetings';

export const changeGreetings = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseURL}`);
    const data = await response.json();

    dispatch({ type: CHANGE_GREETING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CHANGE_GREETING_FAILURE, err });
  }
};
