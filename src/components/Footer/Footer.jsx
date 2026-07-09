import './Footer.css'
import footerFeatures from '../../data/footerFeatures'

function FooterFeatures() {
    return (
        <div className="footer_features">
            <div className="container">
                <ul>
                    {footerFeatures.map(feature =>{
                        return (
                            <li key={feature.key}>
                                <img src={feature.src} alt={feature.title} />
                                <p>{feature.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

function FooterNav() {
    return (
        <div className="footer_nav">
            <div className="container">
                Footer Nav
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