import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  SET_TITLE,
  SET_ITEM,
  SET_EDIT,
  SET_ERROR
} from './actionTypes'


export const addItem = () => ({
  type: ADD_ITEM,
});
export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  item: item
});
export const editItem = (item) => ({
  type: EDIT_ITEM,
  item: item
});
export const setTitle = (title) => ({
  type: SET_TITLE,
  title: title
});
export const setItem = (item) => ({
  type: SET_ITEM,
  item: item
});
export const setEdit = () => ({
  type: SET_EDIT
});
export const setError = (error) => ({
  type: SET_ERROR,
  error: error
});
