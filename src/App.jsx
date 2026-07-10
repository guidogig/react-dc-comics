//stili
import "./App.css";

//componenti
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

//dati
import footerFeatures from "./data/footerFeatures";
import footerNavLinks from "./data/footerNavLinks";
import navLinks from "./data/navLinks";

function App() {
  return (
    <>
      <Header links={navLinks} />
      <Main />
      <Footer features={footerFeatures} navLinks={footerNavLinks} />
    </>
  );
}

export default App;
