import iconStar from '../../svg/icon-star.svg';
import profile  from '../../img/profile.png';

const Posts = () => {
    return(
        <main className='container flex'>
            <div className='best-posts'>
                <img src={iconStar} alt="icone estrela" />
                <h2>Os melhores e mais bem votados posts do mês.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
            </div>

            <div className="posts">
                <div className='post-infos'>

                    <h6 className='data'>14 NOV 2023</h6>

                    <h6 className='tema'>TECNOLOGIA</h6>

                    <h3>O que tem de novo no PS5? Muitas novidades? </h3>

                    <p className='descricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>

                    <div className='profile'>

                        <div className='foto-profile'>
                            <img src={profile} alt="foto perfil" />
                        </div>

                        <div className='profile-infos'>
                            <h6>Hitalo Albuquerque</h6>
                            <p>Autor</p>
                        </div>

                        
                    </div>
                    
                </div>

                <div className="line-bottom"></div>

                <div className='post-infos'>

                    <h6 className='data'>14 NOV 2023</h6>

                    <h6 className='tema'>TECNOLOGIA</h6>

                    <h3>O que tem de novo no PS5? Muitas novidades? </h3>

                    <p className='descricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>

                    <div className='profile'>

                        <div className='foto-profile'>
                            <img src={profile} alt="foto perfil" />
                        </div>

                        <div className='profile-infos'>
                            <h6>Hitalo Albuquerque</h6>
                            <p>Autor</p>
                        </div>

                    </div>
                </div>
            </div>


            
        </main>
    );
}

export default Posts;