export const CHANGE_COLOR = "CHANGE_COLOR";
export const GET_STATE = "GET_STATE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
  currentColor: "",
  counter: 0
};

console.log("in reducer");

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATE:
      return { ...state };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_COLOR:
      return { ...state, currentColor: action.payload.currentColor };
    default:
      return state;
  }
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
