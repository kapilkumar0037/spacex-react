import "./App.css";
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
