import { INITIALIZE_APPLICATION } from '../actions/applicationActions';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

const initialState = {
  initializeStatus: Status.IDLE
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${INITIALIZE_APPLICATION}_PENDING`:   return { ...state, initializeStatus: Status.PENDING };
    case `${INITIALIZE_APPLICATION}_FULFILLED`: return { ...state, initializeStatus: Status.FULFILLED };
    case `${INITIALIZE_APPLICATION}_REJECTED`:  return { ...state, initializeStatus: Status.REJECTED };
    default: return state;
  }
}
