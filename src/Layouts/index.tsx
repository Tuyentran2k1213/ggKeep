import { FC } from "react";
import MainLayout from "./MainLayout";
import MainPage from "./MainPage";

const Layout: FC = () => {
  return (<>
  <MainLayout>
    <MainPage/>
  </MainLayout>
  </>)
}

export default Layout;