import { FC, memo, useState } from 'react';

import { IoMdRefresh } from 'react-icons/io';
import { IoGridOutline, IoSettingsOutline } from 'react-icons/io5';
import { CiGrid2H } from 'react-icons/ci';

import './ExtensionBar.scss';

const ExtensionBar: FC = () => {

  const [gridtype, setGridtype] = useState<boolean>(true);

  const handleClick = () => {
    setGridtype(!gridtype);
  }

  const handleReload = () => {
    location.reload();
  }

  return (<div className='extension-bar'>
    <div className="header-icon_menu" onClick={handleReload}>
    <IoMdRefresh/>
    </div>
    <div className="header-icon_menu" onClick={handleClick}>
    {gridtype ? <IoGridOutline/> : <CiGrid2H/>}
    </div>
    <div className="header-icon_menu">
    <IoSettingsOutline/>
    </div>
  <div className='avatar'>
    <img src="https://i.pravatar.cc/50" alt="avatar" />
  </div>
    </div>)
}

export default memo(ExtensionBar);