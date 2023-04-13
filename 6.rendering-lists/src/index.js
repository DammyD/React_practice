import React from 'react';
import ReactDOM from 'react-dom/client';
import FilteredListApp from './components/FilteredListApp';
import ListApp from './components/ListApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListApp />
    <FilteredListApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

