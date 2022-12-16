import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from './home';
import { IntroductionLocationOfMembrane } from './introduction/locationofmembrane';
import { IntroductionAmphipathicity } from './introduction/amphipathicity';

import { MembraneLipidsAmphipathicity } from './membranelipids/amphipathicity';
import { MembraneLipidsLipidStruture1 } from './membranelipids/lipidstructure1';
import { MembraneLipidsMembraneFluidity } from './membranelipids/membranefluidity';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/introduction">
          <Route path="" element={<Navigate to="locationofmembrane" />} />
          <Route index path="locationofmembrane" element={<IntroductionLocationOfMembrane />} />
          <Route path="amphipathicity" element={<IntroductionAmphipathicity />} />
        </Route>
        <Route path="/membranelipids">
          <Route index path="amphipathicity" element={<MembraneLipidsAmphipathicity />} />
          <Route index path="lipidstructure1" element={<MembraneLipidsLipidStruture1 />} />
          <Route index path="membranefluidity" element={<MembraneLipidsMembraneFluidity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
