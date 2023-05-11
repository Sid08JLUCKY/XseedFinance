import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/navbar';
import SipCal from './Non-Components/sip calculator';
import FDCal from './Non-Components/fd calculator';
import DreamCal from './Non-Components/dream cal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <NavBar /> */}
    {/* <SipCal /> */}
    {/* <FDCal /> */}
    <DreamCal />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

