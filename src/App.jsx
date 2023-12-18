import "./App.css";
// import CryForHelp from "./components/CryForHelp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MidSection2 from "./components/MidSection2";
import Midsection3 from "./components/MidSection3";
import Midsection from "./components/Midsection";

function App() {
  return (
    <>
      {/* <div className="lg:hidden block">
        <CryForHelp />
      </div>
      <div className="hidden lg:block"> */}
      <div className=" flex flex-col w-full h-screen ">
        <Header />
        <Midsection />
        <MidSection2 />
        <Midsection3 />
        <Footer />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
