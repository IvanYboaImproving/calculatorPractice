//Import librarys needed
import React from 'react';
import { createRoot } from 'react-dom/client';

//Import components needed
import App from './App';
//New way to invoke root class from ../public/index.html
const container = document.getElementById('root')
const root = createRoot(container);

//Use components
root.render(
    <App/>
);
