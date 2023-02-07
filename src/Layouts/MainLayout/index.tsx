import { memo, FC } from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

interface mainprop {
  children?: JSX.Element | JSX.Element[] | string
}

const MainLayout: FC<mainprop> = ({ children }) => {
  return (<>
  <Header/>
  {children}
  <Footer/>
  </>)
}

export default memo(MainLayout);