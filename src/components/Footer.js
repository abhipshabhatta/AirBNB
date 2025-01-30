import logo from '../assets/key-logo-footer.svg';
import LangComponents from './langComponents';

const Footer = () => {
    return (
        <footer className="footer">
        <a href="/" className="footer-logo">
            <span>KeyNest</span>
            <img src={logo} alt="KeyNest logo"
        /></a>
        <p>&copy; 2024 KeyNest</p>
        <LangComponents />
    </footer>
    );
};

export default Footer;