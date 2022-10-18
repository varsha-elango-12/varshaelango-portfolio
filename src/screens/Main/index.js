import React from "react";
import SideMenu from "../../components/sideMenu";
import { ContentContainer, MainBg } from "./styled";

import MainRoute from "../../routes/";
import { BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <MainBg>
        <SideMenu />
        <ContentContainer>
          <MainRoute />
        </ContentContainer>
      </MainBg>
    </BrowserRouter>
  );
}

export default Main;
