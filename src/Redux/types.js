export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const NEW_POST = "NEW_POST";
export const LIKE = "LIKE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGE_ID = "GET_MESSAGE_ID";
export const GET_LOGOUT = "GET_LOGOUT";
export const GET_USER = "GET_USER";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS";
export const GET_USER_BY_ID_FAIL = "GET_USER_BY_ID_FAIL";
export const MAIN_PAGE = "MAIN_PAGE";
export const DELETE_USER = "DELETE_USER";
export const UNLIKE = "UNLIKE";
export const PATCH_PASSWORD = "PATCH_PASSWORD";
export const PATCH_ABOUT = "PATCH_ABOUT";
export const IS_LOGGING_IN = "IS_LOGGING_IN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const TO_LOGIN = "TO_LOGIN";
export const TO_REGISTER = "TO_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const UNLIKE_MESSAGE = "UNLIKE_MESSAGE";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";

export const addMessage = text => {
  return {
    type: ADD_MESSAGE,
    text
  };
};

export const likeMessage = (tweet, user) => {
  return {
    type: LIKE_MESSAGE,
    payload: { tweet, user }
  };
};

export const unlikeMessage = tweet => {
  return {
    type: UNLIKE_MESSAGE,
    payload: tweet
  };
};