import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./home";
import { Summary } from "./summary/summary";

import { IntroductionLocationOfMembrane } from "./introduction/locationofmembrane";
import { IntroductionAmphipathicity } from "./introduction/amphipathicity";
import { IntroductionMembraneComposition } from "./introduction/membranecomposition";

import { MembraneLipidsAmphipathicity } from "./membranelipids/amphipathicity";
import { MembraneLipidsLipidStruture1 } from "./membranelipids/lipidstructure1";
import { MembraneLipidsMembraneFluidity } from "./membranelipids/membranefluidity";
import { MembraneLipidsMembraneAsymmetry } from "./membranelipids/membraneasymmetry";

import { MembraneProteinIntegralAndPeripheral } from "./membraneproteins/integralandperipheral";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/introduction">
          <Route path="" element={<Navigate to="membranecomposition" />} />
          <Route
            index
            path = "membranecomposition"
            element={<IntroductionMembraneComposition />}
          />
          <Route
            path="locationofmembrane"
            element={<IntroductionLocationOfMembrane />}
          />
          <Route
            path="amphipathicity"
            element={<IntroductionAmphipathicity />}
          />
        </Route>
        <Route path="/membranelipids">
          <Route
            index
            path="amphipathicity"
            element={<MembraneLipidsAmphipathicity />}
          />
          <Route
            index
            path="lipidstructure1"
            element={<MembraneLipidsLipidStruture1 />}
          />
          <Route
            index
            path="membranefluidity"
            element={<MembraneLipidsMembraneFluidity />}
          />
          <Route
            index
            path="membraneasymmetry"
            element={<MembraneLipidsMembraneAsymmetry />}
          />
        </Route>
        <Route path="/membraneproteins">
          <Route
            index
            path="integralandperipheral"
            element={<MembraneProteinIntegralAndPeripheral />}
          />
        </Route>
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
