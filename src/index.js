import reportWebVitals from './reportWebVitals';

import store from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';




let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
   
  <BrowserRouter>
    <React.StrictMode>
      <App state={state} store={store}  />
    </React.StrictMode>
   </BrowserRouter>
);
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

reportWebVitals();


