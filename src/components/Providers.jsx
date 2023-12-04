//global
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
//local
import { store } from "../app/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
        <>
          <Toaster />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
