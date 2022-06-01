import { CHANGE_GREETING_SUCCESS } from './action';

const initialState = 'Default';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GREETING_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
