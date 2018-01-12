export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';

const _initializeApplication = payload => {
  return { type: INITIALIZE_APPLICATION, payload };
}

export const initializeApplication = () => dispatch => {
  const payload = new Promise(resolve => resolve());
  return dispatch(_initializeApplication(payload));
}
