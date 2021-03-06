import { CONVERSION_ERROR, CONVERSION_RESULT, CONVERSION_START } from '../actions/fetch';

const initialState = {
  isFetching: false,
  content: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONVERSION_START:
      return {
        ...state,
        isFetching: true,
      };
    case CONVERSION_RESULT:
      return {
        ...state,
        isFetching: false,
        content: action.result,
      };
    case CONVERSION_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
