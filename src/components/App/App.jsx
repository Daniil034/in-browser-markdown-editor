import Header from "../Header/Header";
import FormatStatus from "../../features/formatStatus/FormatStatus";
import DocumentBody from "../DocumentBody/DocumentBody";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <FormatStatus />
        <DocumentBody />
      </div>
      <Sidebar />
    </>
  );
};

export default App;
