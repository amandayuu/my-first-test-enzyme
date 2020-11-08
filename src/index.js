import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent/MyComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
