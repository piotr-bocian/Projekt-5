import { httpMethods } from '../httpMethods/httpMethods';

const httpReducer = (initialState, action) => {
  switch (action.type) {
    case httpMethods.GET:
      return { ...initialState, request: httpMethods.GET };
    case httpMethods.POST:
      return httpMethods.POST;
    case httpMethods.DELETE:
      return { ...initialState, request: httpMethods.DELETE };
    case httpMethods.PUT:
      return {
        ...initialState,
        request: httpMethods.PUT,
        validate: action.validate,
        payload: action.payload,
      };
    default:
      return initialState;
  }
};

export default httpReducer;
