import { useEffect } from "react";
import { BrowserRouter } from "react-router";
import { listen } from "./redux/listener";
import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
