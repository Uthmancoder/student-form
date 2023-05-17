import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Studentregister from './Components/Studentregister';
import "bootstrap/dist/css/bootstrap.min.css"
import PassinginfoviaProps from './PassinginfoviaProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   {/* <PassinginfoviaProps myclass="card border w-25 p-3 m-3 shadow bg-info text-light" text="todaytodaytodaytodaytodaytodaytodaytodaytodaytodaytoday"/> 
   <PassinginfoviaProps myclass = "bg-secondary card border w-25 p-3 m-3 shadow  text-light" text="yesterdayyesterdayyesterdayyesterdayyesterdayyesterdayyesterdayyesterdayyesterday"/>  */}
  <Studentregister/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
