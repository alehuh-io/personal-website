import Logo from './Logo';

export default function Header() {
    return (
        <header className='header' id='top'>
            <a href='#home' className='logo' aria-label='home'>
                <Logo />
            </a>

            <nav className="navbar">
                <a href="#about">.about-me()</a>
                <a href="#portfolio">.portfolio()</a>
                <a href="#contact">.contact()</a>
            </nav>
        </header>
    );
}

