export default function Nav {
    return (
        <div>
            <nav className='nav-bar'>
                <img src={ require('./ytLogo.png') } alt='youtube-logo' />
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to="/About">About</Link>
                </ul>
            </nav>
        </div>
    )
}