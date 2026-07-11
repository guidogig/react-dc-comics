//stili
import "./Footer.css";

function Footer({ features, navLinks }) {
  return (
    <footer className="footer">
      <FooterFeatures features={features} />
      <FooterNav navLinks={navLinks} />
      <FooterCTA />
    </footer>
  );
}

export default Footer;

function FooterFeatures({ features }) {
  return (
    <div className="footer_features">
      <ul className="container">
        {features.map(({ key, href, title, src }) => (
          <a key={key} href={href}>
            <li>
              <img src={src} alt={title} />
              <p>{title}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

function FooterNav({ navLinks }) {
  return (
    <div className="footer_nav">
      <div className="container">
        {navLinks.map(({ id, title, className, links }) => (
          <section key={id} className={className}>
            <h3>{title}</h3>
            <ul>
              {links.map(({ key, content, href }) => (
                <li key={key}>
                  <a href={href}>{content}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <div className="footer_logo">
          <img src="/img/dc-logo-bg.png" alt="logo-bg" />
        </div>
      </div>
    </div>
  );
}

function FooterCTA() {
  return (
    <div className="footer_CTA">
      <div className="container">Footer CTA</div>
    </div>
  );
}
