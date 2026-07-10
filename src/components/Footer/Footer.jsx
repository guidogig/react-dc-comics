import './Footer.css'
import footerFeatures from '../../data/footerFeatures'
import footerNavLinks from '../../data/footerNavLinks'

function FooterFeatures() {
    return (
        <div className="footer_features">
            <ul className="container">
                {footerFeatures.map(feature => {
                    return (
                        <a key={feature.key} href={feature.href}>
                            <li>
                                <img src={feature.src} alt={feature.title} />
                                <p>{feature.title}</p>
                            </li>
                        </a>
                    )
                })}
            </ul>
        </div>
    )
}

function FooterNav() {
    return (
        <div className="footer_nav">
            <div className="container">
                <div className="footer_links">
                    {footerNavLinks.map(section => {
                        return(
                            <ul key={section.id}>
                                <li><h3>{section.title}</h3></li>
                                {section.links.map(link => {
                                    return (
                                        <li key={link.key}><a href={link.href}>{link.title}</a></li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
                <div className="footer_logo">
                    <img src="/img/dc-logo-bg.png" alt="logo-bg" />
                </div>
            </div>
        </div>
    )
}

function FooterCTA() {
    return (
        <div className="footer_CTA">
            <div className="container">
                Footer CTA
            </div>
        </div>
    )
}


function Footer() {
    return (
        <footer className='footer'>
            <FooterFeatures />
            <FooterNav />
            <FooterCTA />
        </footer>
    )
}

export default Footer