// How to use the makeRequest helper:
//
//import makeRequest from '../../utils/makeRequest';
//makeRequest('GET', '/allergens').then(response => {
//  console.log(response);
//}).catch(err => {
//  console.log(err);
//});

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';

const _initializeApplication = payload => {
  return { type: INITIALIZE_APPLICATION, payload };
}

export const initializeApplication = () => dispatch => {
  const payload = new Promise(resolve => resolve());
  return dispatch(_initializeApplication(payload));
}
