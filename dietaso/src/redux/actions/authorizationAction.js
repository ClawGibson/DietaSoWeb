import { ADD_AUTHORIZATIONS } from '../Constants';

export const addAuthorizationAction = (payload) => {
  return {
    type: ADD_AUTHORIZATIONS,
    payload,
  };
};
