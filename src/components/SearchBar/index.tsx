import { FC, memo, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClear } from 'react-icons/md';
import './SearchBar.scss';

const SearchBar: FC = () => {

  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>('');

  const handleFocus = () => { 
    setSearchMode(true);
  }

  const handleBlur = () => {
    setSearchMode(false);
  }

  const handleChange = (e: { target: { value: string } }) => {
    setSearchVal(e.target.value);
  }

  const handleClear = () => {
    setSearchVal('');
  }

  return (<label className={`search-bar ${searchMode ? 'search-bar-focus' : ''}`}>
    <div className="header-icon_menu">
    <AiOutlineSearch/>
    </div>
    <input type="text" placeholder="Search" style={{ border: 'none', background: 'transparent' }} value={searchVal} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      {searchVal=== '' ? null : (<div className="header-icon_menu" onClick={handleClear}>
    <MdOutlineClear/>
    </div>)}
    </label>)
}

export default memo(SearchBar);