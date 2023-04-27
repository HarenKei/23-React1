import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CommentList from "./Chapter_05/CommentList";
import NotificationList from "./Chapter_06/NotificationList";
import Accommodate from "./Chapter_07/Accommodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_10/LandingPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <LandingPage/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
