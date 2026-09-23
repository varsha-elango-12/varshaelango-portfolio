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
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <MainBg>
        <SideMenu />
        <ContentContainer
          as="main"
          id="main-content"
          tabIndex="-1"
          aria-label="Portfolio content"
        >
          <MainRoute />
        </ContentContainer>
      </MainBg>
    </BrowserRouter>
  );
}

export default Main;
