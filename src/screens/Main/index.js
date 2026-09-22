import React, { useEffect } from "react";
import SideMenu from "../../components/sideMenu";
import { ContentContainer, MainBg } from "./styled";

import MainRoute from "../../routes/";
import { BrowserRouter, useLocation } from "react-router-dom";
import { startLinkTracking, trackPageView } from "../../analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, location.search);
  }, [location.pathname, location.search]);

  useEffect(() => startLinkTracking(), []);

  return null;
}

function Main() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
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
