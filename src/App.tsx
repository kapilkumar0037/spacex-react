import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./core/components/Header";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./AppRoutes";

function App() {

  return (
    <div >
      <RouterProvider  router={appRouter}/>

    </div>
  );
}

export default App;
