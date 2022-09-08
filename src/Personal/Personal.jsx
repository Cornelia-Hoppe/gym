import './personal.css';
import Team1 from './assets/team1.jpg';

const Team = () => {
    
    return (
        <>
            
                <div className='content'>
                    <h1> Vårat team</h1>
                    <ul>
                        <li>Instuktöret</li>
                        <li>Reception</li>
                        <li>Tränare</li>
                        <li>Ledning</li>
                    </ul>
                    
                
                
                </div>
            
            <div className="team ">
                
                <div className='firstRow row'>
              
                    
                    
                        {/* */}
                        <div className="box">
                        <h1>Ledning</h1>
                        <hr />
                    
                            
                            <div className="container">
                                
                                    <img src={Team1} className="img-fuid" alt='' />
                                    <h3>Sven Svensson</h3>
                                    <h6>CEO</h6>
                            <i className='fa-brands fa-facebook'></i>
                        </div>
                        
                        <div className="container">
                                
                                <img src={Team1} className="img-fuid" alt='' />
                                <h3>Sven Svensson</h3>
                                <h6>CEO</h6>
                        <i className='fa-brands fa-facebook'></i>
                        </div>

                        <div className="container">
                                
                                <img src={Team1} className="img-fuid" alt='' />
                                <h3>Sven Svensson</h3>
                                <h6>CEO</h6>
                        <i className='fa-brands fa-facebook'></i>
                        </div>


                        <div className="container">
                                
                                <img src={Team1} className="img-fuid" alt='' />
                                <h3>Sven Svensson</h3>
                                <h6>CEO</h6>
                        <i className='fa-brands fa-facebook'></i>
                        </div>



                        <div className="container">
                                
                                <img src={Team1} className="img-fuid" alt='' />
                                <h3>Sven Svensson</h3>
                                <h6>CEO</h6>
                        <i className='fa-brands fa-facebook'></i>
                        </div>



                        <div className="container">
                                
                                <img src={Team1} className="img-fuid" alt='' />
                                <h3>Sven Svensson</h3>
                                <h6>CEO</h6>
                        <i className='fa-brands fa-facebook'></i>
                        </div>

                    

                        </div>
                    {/* */}
                    
                    

                    


                </div>

                

                

                
            </div>
        </>
    );
};
export default Team;