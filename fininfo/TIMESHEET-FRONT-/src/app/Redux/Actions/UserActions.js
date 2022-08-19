import axios from "axios";
import { GET_USERS, GET_ONE_USER } from "../Types/UserTypes";

export const get_users = () => async (dispatch) => {
  try {
    const res = await axios.get("/users");
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const get_one_user = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/users/${id}`);
    dispatch({ type: GET_ONE_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const add_user = (newUser) => async (dispatch) => {
  try {
    await axios.post("/users", newUser);
    dispatch(get_users());
  } catch (error) {
    console.log(error);
  }
};

export const delete_user = (id) => async (dispatch) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(get_users());
  } catch (error) {
    console.log(error);
  }
};

export const delete_all_user=()=> async(dispatch)=> {
  try {
    await axios.delete('/users')
    dispatch(get_users())
  } catch (error) {
    console.log(error)
  }
}
export const update_user = (id, updated) => async (dispatch) => {
  try {
    await axios.put(`/users/${id}`, updated);
    dispatch(get_users());
  } catch (error) {
    console.log(error);
  }
};
