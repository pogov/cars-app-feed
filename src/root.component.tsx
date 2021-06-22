import React from "react";
import Feed from "./feed/Feed";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Feed />
    </BrowserRouter>
  );
}
