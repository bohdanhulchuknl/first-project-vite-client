//global
import { Route, Routes } from "react-router-dom";

//local
import { routes } from "../utils/routes";
import Layout from "../pages/Layout";
import AuthProtect from "../components/auth/AuthProtect";

const AppRoutes = () => {
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

export default AppRoutes;
