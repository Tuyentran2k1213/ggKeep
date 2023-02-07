import { acctionType, noteData } from "../utils/types";
import { UPDATE_NOTE, GET_NOTES } from "./constant";

interface noteListData {
  data?: noteData[];
}

const initialState = {};

export const notesReducer = (
  state: noteListData = initialState,
  action: acctionType,
) => {  
  switch (action.type) {
    case GET_NOTES:
      return { data: [...action.payload] };
    case UPDATE_NOTE:
      return { data: action.payload };
    default:
      return state;
  }
};