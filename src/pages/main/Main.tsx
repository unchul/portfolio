import React from 'react';
import styled from 'styled-components';

import BackgroundImg from "../../assets/3.png";
import Introduction from '../../components/introduction/Introduction';


const Main = () => {
    return (
        <StCotainer>
            <Introduction/>
        </StCotainer>
    );
};

export default Main;

const StCotainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url(${BackgroundImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
`;