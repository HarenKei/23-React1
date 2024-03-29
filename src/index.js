import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";
import Calculator from "./chapter_12/Calculator";
import ProfileCard from "./chapter_13/ProfileCard";
import MainContent from "./chapter_14/MainContent";
import DarkOrLight from "./chapter_14/DarkOrLight";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <DarkOrLight/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
