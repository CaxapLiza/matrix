const initialState = {
  N: 3,
  M: 3,
  matrix: Array(3).fill(Array(3).fill(0)),
  N2: 3,
  M2: 3,
  matrix2: Array(3).fill(Array(3).fill(0)),
};

const matrixReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_N":
      return { ...state, N: action.payload };
    case "SET_M":
      return { ...state, M: action.payload };
    case "SET_MATRIX":
      return { ...state, matrix: action.payload };
    case "SET_N2":
      return { ...state, N2: action.payload };
    case "SET_M2":
      return { ...state, M2: action.payload };
    case "SET_MATRIX2":
      return { ...state, matrix2: action.payload };
    default:
      return state;
  }
};

export default matrixReducer;
