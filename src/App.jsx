import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import NotMatch from "./pages/NotMatch";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
