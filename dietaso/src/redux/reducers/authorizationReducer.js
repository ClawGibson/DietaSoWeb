import { ADD_AUTHORIZATIONS } from '../Constants';

const initialState = {
  token: '',
  isLoggedIn: false,
  username: '',
  id: '',
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTHORIZATIONS:
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true,
        username: action.payload.name,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default authorizationReducer;
