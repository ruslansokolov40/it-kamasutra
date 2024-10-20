import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './storeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(

    <BrowserRouter>
      <React.StrictMode>
        <StoreContext.Provider value={store}>
          <App />
          {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store} /> */}
        </StoreContext.Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

renderEntireTree();

store.subscribe(() => {
  renderEntireTree();
});

reportWebVitals();


