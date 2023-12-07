import "sanitize.css";
import "uno.css";
import AgoraRTC, { AgoraRTCErrorCode } from "pub-test-kaku";
import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

AgoraRTC.setLogLevel(/* DEBUG */ 0);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
