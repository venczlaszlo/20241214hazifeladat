import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Kutya from './Kutya';

const root = ReactDOM.createRoot(document.getElementById('root'));

let kutya1 = {
  nev: "Bubu",
  faj: "Shar pei - Francia bulldog",
  szin: "sötétszürke"
}

root.render(<Kutya Kutya={kutya1}></Kutya>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
