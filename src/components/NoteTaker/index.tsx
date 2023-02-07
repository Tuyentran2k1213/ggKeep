import { FC, memo, useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { createNote } from "../../stores/noteAction";
import { NOTE_CREATE } from "../../lib/constants/endpoints";

import { AiOutlineCheckSquare } from "react-icons/ai";
import { BiPaint }from 'react-icons/bi';
import { MdOutlineImage } from "react-icons/md";
import { BsPinFill, BsPin } from "react-icons/bs";

import './NoteTaker.scss';

const NoteTaker: FC = () => {
  const dispatch = useDispatch<any>();

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const [edit, setEdit] = useState<boolean>(false);
  const [pin, setPin] = useState<boolean>(false);

  const handleChangemode = () => {
    setEdit(!edit);
  }
  const handleChangepin = () => {
    setPin(!pin);
  }
  const handleAdd = async () => {
    await dispatch(createNote(NOTE_CREATE, { title: titleRef.current?.value, description: textRef.current?.value, pinned: pin }));
    await setEdit(false);
  }

  return (edit ? (<div className="input-note">
    <div className="input-note-edit_mode">
    <div className="input-note-edit_title">
      <input ref={titleRef} type="text" placeholder="Title" />
      <div className="header-icon_menu" onClick={handleChangepin}>
        {pin ? <BsPinFill/> : <BsPin/>}
      </div>
    </div>
    <div className="input-note-edit_text">
      <textarea ref={textRef} placeholder="Take a note..." name="newtext" rows={5}></textarea>
    </div>
    <div className="input-note-edit_button">
      <button onClick={handleAdd}> Add </button>
      <button onClick={handleChangemode}> Close </button>
    </div>
    </div>
    </div>) : (<div className="input-note" onClick={handleChangemode}>
      <div className="input-note_text">
      Take a note...
    </div>

    <div className="input-note_extension">
      <div className="header-icon_menu">
        <AiOutlineCheckSquare/>
      </div>
      <div className="header-icon_menu">
        <BiPaint/>
      </div>
      <div className="header-icon_menu">
        <MdOutlineImage/>
      </div>

    </div>
    </div>)
  )
}

export default memo(NoteTaker);