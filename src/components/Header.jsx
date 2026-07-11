//stili
import "./Header.css";

/* qui ho creato un dumb component che é eslusivamente di presentazione 
del singolo link all'interno dell'header. Si potrebbe fare la stessa cosa con, ad es, le card dei fumetti in Main.jsx */
const HeaderLink = ({ link }) => (
  <li>
    <a href={link.href}>{link.title}</a>
  </li>
);

function Header({ links }) {
  return (
    <header className="header">
      <div className="container">
        <img src="./img/dc-logo.png" alt="dc-logo" />
        <nav>
          <ul>
            {links.map((link) => (
              <HeaderLink key={link.key} link={link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
