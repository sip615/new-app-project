import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav";
import Subnav from "../src/components/Subnav";
import Sidebar from "../src/components/Sidebar";

function App() {
  return (
    <div>
      <Nav/>
      <Subnav/>
      <Sidebar/>
    </div>
  );
}

export default App;
