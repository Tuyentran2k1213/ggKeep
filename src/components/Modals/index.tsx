import { FC, memo, useRef, MouseEvent, useState } from "react";

import { Modal } from "antd";
import { BsCheckCircleFill, BsPin, BsPinFill } from "react-icons/bs";

import { NOTE_EDIT } from "../../lib/constants/endpoints";
import Fetch_Data from "../../lib/hooks/useAxios";
import { noteData } from "../../utils/types";
import './Modal.scss';

interface modalProp {
  handleClose: () => void;
  open: boolean;
  data: noteData
}

const Modals: FC<modalProp> = ({ handleClose, open, data }) => {
  const fetch_data = new Fetch_Data();

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const [pin, setPin] = useState<boolean | undefined>(data?.pinned);

  const handleStopDrag = (e: MouseEvent) => {
    e.stopPropagation()
  }
  const handlePin = () => {
    setPin(!pin);
  }
  const handleOke = () => {
    fetch_data.fetchdata_put(NOTE_EDIT(data.id), { ...data, title: titleRef.current ? titleRef.current?.value : data.title, description: textRef.current ? textRef.current?.value : data?.description, pinned: pin });
  }

  return (<div className="note-modal">
    <Modal className="note-modal_component" closable={false} open={open} onCancel={handleClose} onOk={handleOke} centered>
    <div className="input-note-edit_mode">
    <div className="input-note-edit_title">
      <input ref={titleRef} onMouseDown={handleStopDrag} type="text" defaultValue={data?.title} placeholder="Title" />
      <div className="header-icon_menu" onClick={handlePin}>
        {pin ? <BsPinFill/> : <BsPin/>}
      </div>
    </div>
    <div className="input-note-edit_text">
      <textarea ref={textRef} onMouseDown={handleStopDrag} placeholder="Take a note..." defaultValue={data?.description} name="newtext" rows={10}></textarea>
    </div>
    </div>
    </Modal>
  </div>)
}

export default memo(Modals);