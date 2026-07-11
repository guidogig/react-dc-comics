//stili
import "./App.css";

//componenti
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

//dati
import navLinks from "./data/navLinks";
import comics from "./data/comics";
import footerFeatures from "./data/footerFeatures";
import footerNavLinks from "./data/footerNavLinks";

function App() {
  return (
    <>
      <Header links={navLinks} />
      <Main comics={comics} />
      <Footer features={footerFeatures} navLinks={footerNavLinks} />
    </>
  );
}

export default App;
