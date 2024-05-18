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
                    { this.renderLink('/history', 'History') }
                </ul>
            </nav>
        );
    }

    renderLogo() {
        return (
            <img src='logo_transparent.png' alt='Connect4' className='logo' />
        )
    }

    renderTitle() {
        return (
            <div className='title'>
                { this.renderLogo() }
                <h1 className='title'>Connect4</h1>
            </div>
        )
    }

    render() {
        return (
        <header className='Header'>
            { this.renderTitle() }
            { this.renderNavigation() }
        </header>
        );
    }
}

export default Header;
