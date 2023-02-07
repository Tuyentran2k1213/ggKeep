import Fetch_Data from "../lib/hooks/useAxios";
import { noteData } from "../utils/types";
import { GET_NOTES, UPDATE_NOTE } from "./constant";

const fetch_data = new Fetch_Data();

export const getAllNotes = (enpoint: string) => {
  return (dispatch: (arg0: { type: string; payload: noteData[]; }) => void) => {
    fetch_data.fetchdata_get(enpoint)
              .then((res: noteData[]) => {
                dispatch({
                  type: GET_NOTES,
                  payload: res
                })
              })
              .catch((err) => console.log(err));
  };
};

export const createNote = (endpoint: string, data: noteData) => {
  return (dispatch: (arg0: { type: string; payload: noteData[]; }) => void) => {
    fetch_data.fetchdata_post(endpoint, data)
              .then((results) => {
                fetch_data.fetchdata_get(endpoint)
                          .then(res => {
                            dispatch({
                              type: GET_NOTES,
                              payload: res
                            })
                          })
              })
  }
}

export const deleteNote = (endpoint: string) => {
  return (dispatch: (arg0: { type: string; payload: noteData[]; }) => void) => {
    const promise = [fetch_data.fetchdata_delete(endpoint), fetch_data.fetchdata_get(endpoint)];
          Promise.all(promise)
              .then((res) => {
                  if(res[0] && res[1]){
                    dispatch({
                      type: UPDATE_NOTE,
                      payload: res[1]
                    })
                  }
                })
              .catch((err) => console.log(err));
  }
}

export const updateNote = (endpoint: string, data: noteData) => {
  return (dispatch: (arg0: { type: string; payload: noteData[]; }) => void) => {
    const promise = [fetch_data.fetchdata_put(endpoint, data), fetch_data.fetchdata_get(endpoint)];
      Promise.all(promise)
              .then((res) => {
                if(res[0] && res[1]){
                  dispatch({
                    type: UPDATE_NOTE,
                    payload: res[1]
                  })
                }})
              .catch((err) => console.log(err));
  }
}