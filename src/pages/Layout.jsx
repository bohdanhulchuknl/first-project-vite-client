//global
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
//local
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="grow bg-slate-100">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
