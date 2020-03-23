export const GET_REPOS = "my-awesome-app/repos/LOAD";
export const GET_REPOS_SUCCESS = "my-awesome-app/repos/LOAD_SUCCESS";
export const GET_REPOS_FAIL = "my-awesome-app/repos/LOAD_FAIL";

export const GET_REPO_INFO = "my-awesome-app/repos/INFO";
export const GET_REPO_INFO_SUCCESS = "my-awesome-app/repos/INFO_SUCCESS";
export const GET_REPO_INFO_FAIL = "my-awesome-app/repos/INFO_FAIL";

export const GET_USER = "my-awesome-app/repos/USER";
export const CHANGE_COLOR = "CHANGE_COLOR";
export const GET_STATE = "GET_STATE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const GET_USER_SUCCESS = "my-awesome-app/repos/USER_SUCCESS";
export const GET_USER_FAIL = "my-awesome-app/repos/USER_FAIL";

const initialState = {
  repos: [],
  repoInfo: {},
  user: {},
  currentColor: "",
  counter: 0
};

console.log("in reducer");

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATE:
      return { ...state };
    case INCREMENT:
      console.log("in increment at reducer");
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      console.log("in decrement at reducer");
      return { ...state, counter: state.counter - 1 };
    case CHANGE_COLOR:
      return { ...state, currentColor: action.payload.currentColor };
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: "Error getting repos info" };
    case GET_REPO_INFO:
      return { ...state, loadingInfo: true };
    case GET_REPO_INFO_SUCCESS:
      return { ...state, loadingInfo: false, repoInfo: action.payload.data };
    case GET_REPO_INFO_FAIL:
      return {
        ...state,
        loadingInfo: false,
        errorInfo: "Error getting repo info"
      };
    case GET_USER:
      return { ...state, loadingProfile: true };
    case GET_USER_SUCCESS:
      return { ...state, loadingProfile: false, user: action.payload.data };
    case GET_USER_FAIL:
      return {
        ...state,
        loadingProfile: false,
        errorUser: "Error getting user info"
      };
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}

export function getStateFunction() {
  return {
    type: GET_STATE
  };
}

export function changeColorFunction(currentColor) {
  return {
    type: CHANGE_COLOR,
    payload: {
      currentColor: currentColor
    }
  };
}

export function getRepoDetail(user, repo) {
  return {
    type: GET_REPO_INFO,
    payload: {
      request: {
        url: `/repos/${user}/${repo}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/users/${user}`
      }
    }
  };
}

export function increaseCounter() {
  return {
    type: "INCREMENT"
  };
}

export function decreaseCounter() {
  return {
    type: "DECREMENT"
  };
}
