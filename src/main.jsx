//global imports
import ReactDOM from "react-dom/client";

//local imports
import Providers from "./components/Providers.jsx";
import App from "./App.jsx";

//styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Providers>
    <App/>
  </Providers>
);
