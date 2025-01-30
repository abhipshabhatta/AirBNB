import logo from "../assets/key-logo.svg"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header class="header">
			<nav>
				<a href="./" class="header-logo">
					<span>KeyNest</span>
					<img src={logo} alt="KeyNest logo"
				/></a>
				<ul>
					<li>
					<Link to="/">Home</Link>					</li>
					<li>
					<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
    )
}

export default NavBar