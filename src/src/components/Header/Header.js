import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';

class Header extends PureComponent {
    renderLink = (to, text) => {

        return (
            <li key={ to }>
                <Link to={ to }>{ text }</Link>
            </li>
        );
    };

    renderNavigation() {
        return (
            <nav>
                <ul>
                    { this.renderLink('/', 'Home') }
                    { this.renderLink('/play', 'Play') }
                </ul>
            </nav>
        );
    }

    render() {
        return (
        <header className='Header'>
            <h1>Connect4</h1>
            { this.renderNavigation() }
        </header>
        );
    }
}

export default Header;
