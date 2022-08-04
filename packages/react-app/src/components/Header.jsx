import React from "react";
import { useLocation } from "react-router-dom";

// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  const location = useLocation();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "1.2rem" }}>
      <div className="header-logo">
        <img src="/logo.svg" alt="logo" style={{ display: location.hash === "#contract" ? "block" : "none" }} />
      </div>
      {props.children}
    </div>
  );
}
