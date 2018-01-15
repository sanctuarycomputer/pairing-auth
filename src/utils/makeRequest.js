const API_KEY = 'Ask your pair for this key';

const API_BASE = 'https://staging.brandibble.co/api/v1/brands/6';

function BrandibbleRequestException(message, response, exception, extracted) {
  this.message = `Brandibble.js: ${message || 'An unknown exception was triggered.'}`;
  this.stack = (new Error()).stack;
  this.response = response;
  this.exception = exception;
  this.extracted = extracted;
}

const FiveHundredError = {
  errors: [{
    code: 'errors.server.internal',
    title: 'Internal Server Error',
    status: 500,
  }],
};

function handleResponse(response) {
  const { status, statusText } = response;
  if (status === 500) { throw FiveHundredError; }
  if (statusText === 'NO CONTENT' || status === 204) { return true; }
  /* Store a clone so the host app can re-read the error, however
   * react native's clone doesn't seem to be defined
   */
  const requestWasSuccessful = (status >= 200 && status < 300);
  const cloned = response.clone ? response.clone() : response;
  try {
    return response.text().then((text) => {
      let parsed = {};
      if (!text) {
        if (requestWasSuccessful) return parsed;
        throw parsed;
      }
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        throw new BrandibbleRequestException('Response text could not be parsed as JSON.', cloned, e, text);
      }
      if (requestWasSuccessful) return parsed;
      throw parsed;
    });
  } catch (e) {
    throw new BrandibbleRequestException('Response could not be extracted as Text.', cloned, e);
  }
}

export default (method, path, customerToken, body) => {
  let headers = {
    'Brandibble-Api-Key': API_KEY,
    'Content-Type': 'application/json',
    'Origin': 'pairing-test.com',
  };
  if (customerToken) {
    headers = {
      ...headers,
      'Brandibble-Customer-Token': customerToken,
    }
  }
  return fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
    credentials: 'omit',
  }).then(handleResponse);
}
