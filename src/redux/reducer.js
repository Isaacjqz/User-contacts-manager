import * as types from "./actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const userReducer = (signUpState = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...signUpState,
        loading: true,
      };

    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_SUCCESS:
      return {
        ...signUpState,
        loading: false,
        currentUser: action.payload,
      };

    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...signUpState,
        loading: false,
        error: action.payload,
      };
    default:
      return signUpState;
  }
};

export default userReducer;
