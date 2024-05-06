import React from "react";
import ReactDOM from 'react-dom/client';//herramienta para renderizar
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp  subTitle={123} /> */}
        <CounterApp value={10}></CounterApp>
    </React.StrictMode>
);