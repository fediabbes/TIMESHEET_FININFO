import { GET_ONE_USER, GET_USERS } from "../Types/UserTypes";

const initialState = {
  users: [],
  oneUser: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_ONE_USER:
      return {...state, oneUser: action.payload}  
    default:
      return state;
  }
};

export default UserReducer;
