import logo from '../../img/logo icon PNG.png';

const Hero = () => {

    return (
        <section className="container2 flex-space-between">
                <div className='hero'>
                    <h1>tech<span>brains</span></h1>
                    <p>
                        Um blog para todos. Escrever. Ler.
                        Comentar. Contribuir. Aprender.
                        Conectar.
                    </p>
                    <button className='btn-hero'>Começar a escrever</button>
                </div>

                <div>
                    <img src={logo} alt="logo" className='logo_hero' />
                </div>
        </section>
    );

}

export default Hero;