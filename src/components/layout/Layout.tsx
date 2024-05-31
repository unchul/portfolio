import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../sideBar/SideBar";

const Layout = () => {
  return (
    <StLayout>
      <StContent>
        <SideBar />
        <Outlet />
      </StContent>
    </StLayout>
  );
};

export default Layout;

const StLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
`;

const StContent = styled.div`
  display: flex;
`;
