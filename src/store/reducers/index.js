import {v4} from 'uuid'
import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_ERROR,
  SET_ITEM,
  SET_TITLE
} from "../actions/actionTypes";

const initialState = {
    items: [],
    title: '',
    item: '',
    edit: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      const newItem = {
        id: v4(),
        value: state.title
      };
      return {
        ...state,
        items: state.items.concat(newItem),
        title: '',
        error: ''
      };
    case EDIT_ITEM:
      let editList = [...state.items];
      let editIndex = editList.indexOf(state.item);
      if(editIndex !== -1) {
        editList[editIndex].value = state.title;
        return {
          ...state,
          edit: true,
          items: editList
        }
      } else {
        return  {
          ...state
        }
      }
    case DELETE_ITEM:
      let newList = [...state.items];
      let index = newList.indexOf(state.item);
      if (index !== -1) {
        newList.splice(index, 1);
        return {
          ...state,
          items: newList
        };
      } else {
        return {
          ...state
        };
      }
    case SET_TITLE:
      return {
        ...state,
        title: action.title
      };
    case SET_ITEM:
      return {
        ...state,
        item: action.item,
        error: ''
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};


