import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import PageSignin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="signin" element={<PageSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
