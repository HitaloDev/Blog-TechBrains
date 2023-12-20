import imgCard from '../../img/img-card1.png';
import imgCard2 from '../../img/img-card2.png';
import imgCard3 from '../../img/img-card3.png';

const MoreVisited = () => {
    return (
        <div className="container">
            <h2 className='card-h2'>Mais vistos</h2>
            <div className="cards flex-space-between">
                
                <div className="card">
                    <div className="thumb">
                        <a href="#">
                            <img src={imgCard} alt="imagem card" />
                        </a>
                    </div>

                    <div className="card-text">
                        <h6 className='data'>20 DEZ 2023</h6>
                        <h6 className='tema'>TECNOLOGIA</h6>
                        
                        <h3>O que tem de novo no PS5? Muitas novidades? </h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>

                        <a href="#">Ler mais</a>
                    </div>

                    
                </div>

                <div className="card">
                    <div className="thumb">
                        <a href="#">
                            <img src={imgCard2} alt="imagem card" />
                        </a>
                    </div>

                    <div className="card-text">
                        <h6 className='data'>20 DEZ 2023</h6>
                        <h6 className='tema'>TECNOLOGIA</h6>
                        
                        <h3>O que tem de novo no PS5? Muitas novidades? </h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>

                        <a href="#">Ler mais</a>
                    </div>

                    
                </div>

                <div className="card">
                    <div className="thumb">
                        <a href="#">
                            <img src={imgCard3} alt="imagem card" />
                        </a>
                    </div>

                    <div className="card-text">
                        <h6 className='data'>20 DEZ 2023</h6>
                        <h6 className='tema'>TECNOLOGIA</h6>
                        
                        <h3>O que tem de novo no PS5? Muitas novidades? </h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>

                        <a href="#">Ler mais</a>
                    </div>

                    
                </div>

            </div>
            
        </div>
    );
}

export default MoreVisited; 