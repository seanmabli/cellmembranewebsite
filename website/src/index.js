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
import { MembraneLipidsMembraneFluidity1 } from "./membranelipids/membranefluidity1";
import { MembraneLipidsMembraneFluidity2 } from "./membranelipids/membranefluidity2";
import { MembraneLipidsMembraneAsymmetry } from "./membranelipids/membraneasymmetry";

import { MembraneProteinIntegralAndPeripheral } from "./membraneproteins/integralandperipheral";

import { Navbar } from "./compodents/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div style={{maxWidth: "1250px"}}>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="/introduction" />} />
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
            path="membranefluidity1"
            element={<MembraneLipidsMembraneFluidity1 />}
          />
          <Route
            index
            path="membranefluidity2"
            element={<MembraneLipidsMembraneFluidity2 />}
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
      </Routes></div>
    </BrowserRouter>
  </React.StrictMode>
);
