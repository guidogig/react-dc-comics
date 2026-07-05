import './Footer.css'
import FooterFeatures from './FooterFeatures'
import FooterNav from './FooterNav'
import FooterCTA from './FooterCTA'


function Footer() {
    return (
        <footer className='footer'>
            <FooterFeatures/>
            <FooterNav/>
            <FooterCTA/>
        </footer>
    )
}

export default Footer