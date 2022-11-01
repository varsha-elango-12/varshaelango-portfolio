import React from "react";
import { Route, Routes } from "react-router-dom";
import Connect from "../screens/connect";
import Landing from "../screens/landing";
import MyJourney from "../screens/myJourney";
import PerformativeDesign from "../screens/performativeDesign";
import CanSkinStarveForATouch from "../screens/performativeDesign/canSkinStartTouch";
import FormlessEmotion from "../screens/performativeDesign/formlessEmotion";
import ReincarnationOfViolet from "../screens/performativeDesign/reincarnationOfViolet";
import UXDesign from "../screens/uxDesigns";
import JustNameless from "../screens/uxDesigns/justNameless";
import YellowJuice from "../screens/uxDesigns/yellowJuice";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/performative-design" element={<PerformativeDesign />} />
      <Route
        path="/performative-design/reincarnation"
        element={<ReincarnationOfViolet />}
      />
      <Route
        path="/performative-design/formless-emotions"
        element={<FormlessEmotion />}
      />
      <Route
        path="/performative-design/can-skin-starve-for-a-touch"
        element={<CanSkinStarveForATouch />}
      />

      {/* ux design */}
      <Route path="/user-experience-design" element={<UXDesign />} />
      <Route
        path="/user-experience-design/sharing-codes"
        element={<JustNameless />}
      />
      <Route
        path="/user-experience-design/the-yellow-juice"
        element={<YellowJuice />}
      />
      {/* my journey */}
      <Route path="/my-journey" element={<MyJourney />} />
      {/* lets connect */}
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
}
