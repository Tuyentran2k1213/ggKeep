import { useEffect, useState } from "react";

import DraggableList from "react-draggable-lists";
import { useSelector, useDispatch } from "react-redux";
import NoteTaker from "../components/NoteTaker";
import Note from "../components/Note/Note";
import { noteData } from "../utils/types";

import { getAllNotes } from "../stores/noteAction";
import { NOTE_GETALL } from "../lib/constants/endpoints";

const MainPage = () => {
  const dispatch = useDispatch<any>();
  const nodeLists = useSelector((state: { notesReducer: { data: noteData[] } }) => state.notesReducer);

  const [noteList, setNotelist] = useState<noteData[]>([]);

  useEffect(() => {
    dispatch(getAllNotes(NOTE_GETALL));
  }, []);

  useEffect(() => {
    if(nodeLists?.data) {
      setNotelist([...nodeLists?.data]);}
  }, [nodeLists?.data]);

  return (noteList.length ? <div style={{ width: '100%', margin: "0 auto"}}>
    <div style={{ padding: "2rem 0rem", width: '100%' }}>
    <NoteTaker/>
    </div>
    <div className="drag-area">
      <h1>Pinned</h1>
    <DraggableList width={400} height={200} rowSize={3}>
          {noteList.map((item) => { if(item.pinned) return <Note key={item.id} data={item}/> })}
        </DraggableList>
      <h1>other</h1>
    <DraggableList width={400} height={200} rowSize={3}>
          {noteList.map((item) => { if(!item.pinned) return (<Note key={item.id} data={item}/>) })}
        </DraggableList>
    </div>
      </div> : <></>);
}


export default MainPage;