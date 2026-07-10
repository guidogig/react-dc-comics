import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import footerFeatures from "./data/footerFeatures";
import footerNavLinks from "./data/footerNavLinks";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer features={footerFeatures} navLinks={footerNavLinks} />
    </>
  );
}

export default App;
