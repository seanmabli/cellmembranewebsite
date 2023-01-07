import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./introduction/home";
import { Summary } from "./summary/summary";
import { Simulation } from "./summary/simulation";

import { IntroductionLocationOfMembrane } from "./introduction/locationofmembrane";
import { IntroductionMembraneComposition } from "./introduction/membranecomposition";

import { MembraneLipidsAmphipathicity } from "./membranelipids/amphipathicity";
import { MembraneLipidsLipidStruture } from "./membranelipids/lipidstructure";
import { MembraneLipidsMembraneFluidity } from "./membranelipids/membranefluidity";
import { MembraneLipidsMembraneAsymmetry } from "./membranelipids/membraneasymmetry";

import { MembraneProteinIntegralAndPeripheral } from "./membraneproteins/integralandperipheral";

import { Navbar } from "./compodents/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Navigate to="/introduction" />} />
        <Route path="/introduction">
          <Route path="" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route
            index
            path="membranecomposition"
            element={<IntroductionMembraneComposition />}
          />
          <Route
            path="locationofmembrane"
            element={<IntroductionLocationOfMembrane />}
          />
        </Route>
        <Route path="/membranelipids">
          <Route path="" element={<Navigate to="amphipathicity" />} />
          <Route
            index
            path="amphipathicity"
            element={<MembraneLipidsAmphipathicity />}
          />
          <Route
            index
            path="lipidstructure"
            element={<MembraneLipidsLipidStruture />}
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
          <Route path="" element={<Navigate to="integralandperipheral" />} />
          <Route
            index
            path="integralandperipheral"
            element={<MembraneProteinIntegralAndPeripheral />}
          />
        </Route>
        <Route path="/summary">
          <Route path="" element={<Navigate to="summary" />} />
          <Route path="summary" element={<Summary />} />
          <Route path="simulation" element={<Simulation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
