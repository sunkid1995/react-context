import React from 'react';
import ReactDOM from 'react-dom';

// containers
import App from './containers/app';

// service worker
import * as serviceWorker from './serviceWorker';

// context
import StoreContext from './context/store';

// css
import './index.css';

const renderApp = () => {
  return (
    <React.StrictMode>
      <StoreContext>
        <App />
      </StoreContext>
    </React.StrictMode>
  );
};

ReactDOM.render(renderApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
