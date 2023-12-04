import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-amber-200">Header</header>
      <main className="grow container mx-auto bg-slate-400">
        <Outlet />
      </main>
      <footer className="bg-amber-200">Footer</footer>
    </div>
  );
};

export default Layout;
