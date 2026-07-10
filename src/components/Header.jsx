//stili
import "./Header.css";

function Header({ links }) {
  return (
    <header className="header">
      <div className="container">
        <img src="./img/dc-logo.png" alt="dc-logo" />
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.key}>
                  <a href={link.href}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
