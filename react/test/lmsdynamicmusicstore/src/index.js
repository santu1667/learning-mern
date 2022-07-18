import React from 'react';
import {createRoot} from 'react-dom/client';
import Routing from './component/routing';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);