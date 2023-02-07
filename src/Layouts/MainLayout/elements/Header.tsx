import { memo } from "react";
import { AiOutlineMenu } from 'react-icons/ai';

import SearchBar from "../../../components/SearchBar";
import ExtensionBar from "../../../components/ExtensionBar";

const Header = () => {
  return (<header className="header">
    <div className="header-icon">
      <div className="header-icon_menu">
      <AiOutlineMenu style={{ height: '1.1rem', width: '1.1rem', padding: '0.5rem' }} />
      </div>
      <a href="#" className="header-icon_homelink">
      <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"/>
      <p>Keep</p>
      </a>
    </div>
    
    <div className="header-searchbar">
      <SearchBar/>
    </div>

    <div className="header-extension">
      <ExtensionBar/>
    </div>
  </header>)
}

export default memo(Header);