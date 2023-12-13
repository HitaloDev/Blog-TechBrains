import logo from '../../img/logo icon PNG.png';

const Header = () => {

    return (
        <header>
            <nav>
                <div className='logo'>
                    <a href='#'> 
                        <img src={logo} alt='Logo techbrains'/>
                    </a>
                </div>

                <ul className='menu'>
                    <li> <a href="#">Sobre</a></li>
                    <li> <a href="#">Contato</a></li>
                </ul>
                
            </nav>

            <div className='bx'></div>

            <div className='flex-start-row'>
                <div className='search'>
                    <form className='flex'>
                        <input type="text" name='search' placeholder='Buscar...'/>
                        <button className='btn-search'></button>
                    </form>
                </div>
            
                <div className="cta-desktop">
                    <a href="" className='btn'>Login</a>
                </div>

                <div className="cta-mobile">
                    <a href="" className='link'>Login</a>
                </div>

            </div>
        </header>
    )

}

export default Header;