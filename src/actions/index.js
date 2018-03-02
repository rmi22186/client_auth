import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password});
    // Submit email/password to the server

    // If request is good ...
    // - Update state to indiscate user is authenticated
    // - Save the JWT token
    // - redirect to the route '/feature'

    // if request is bad
    // - show an error to a user
  }
}
