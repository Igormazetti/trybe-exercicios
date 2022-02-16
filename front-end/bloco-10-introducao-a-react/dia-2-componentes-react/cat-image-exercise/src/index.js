import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image";

ReactDOM.render(
  <React.StrictMode>
    <Image
      source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
      alternativeText="Cute cat staring"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
