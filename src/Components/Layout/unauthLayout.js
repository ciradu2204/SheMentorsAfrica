import React from "react";
import Navbar from "../Navbar";

export default function AnauthLayout({ children }) {
  return (
    <div>
     <Navbar/>
      <div>{children}</div>
    </div>
  );
}
