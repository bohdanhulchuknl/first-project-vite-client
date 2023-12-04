//global
import { Route, Routes } from "react-router-dom";

//local
import Layout from "./pages/Layout";
import AuthProtect from "./components/auth/AuthProtect";
import { routes } from "./utils/routes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.protect ? (
                  <AuthProtect>
                    <route.element />
                  </AuthProtect>
                ) : (
                  <route.element />
                )
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default App;
