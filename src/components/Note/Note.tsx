import { FC, MouseEvent, memo, useEffect, useState } from "react";

import { BsPin, BsPinFill, BsCheckCircleFill } from "react-icons/bs";

import { noteData } from "../../utils/types";
import Modals from "../Modals";
import './Note.scss';

interface Noteprops {
  data: noteData;
}

const Note: FC<Noteprops> = ({ data }) => {

  const [pinned, setPinned] = useState<boolean | undefined>(data?.pinned);
  const [notedata, setNotedata] = useState<noteData>();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const handlePined = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setPinned(!pinned);
  }

  useEffect(() => {
    setNotedata(data);
  }, [data])

  return (<>
  <div className="drag-area_note" style={{ background: 'transparent', opacity: open ? 0 : 1 }} onClick={handleOpen}>
    <div className="inner-note">
      <BsCheckCircleFill className="note-check_icon"/>
      <div className="note-title">
        <div className="note-title_text">{notedata?.title}</div>
        <div className="header-icon_menu" onClick={handlePined}>
        {pinned ? <BsPinFill/> : <BsPin/>}
      </div>
      </div>
      <div className="note-content">
        {notedata?.description}
      </div>
    </div>
  </div>
  <Modals data={data} handleClose={handleClose} open={open}/>
  </>)
}

export default memo(Note);