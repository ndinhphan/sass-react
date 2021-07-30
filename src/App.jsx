/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles/_app.scss";

import Footer from "./components/Footer/index";
import NavBar from "./components/NavBar/index";
import Homepage from "./page/Homepage";
// import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
