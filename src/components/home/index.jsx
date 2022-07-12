import './home.css';
import bluarr from "../imgs/bluearr.png";
import story from "../imgs/1.png";
import plasticInSea from "../imgs/plastic_in_sea.png";
import plasticbottles from "../imgs/plastic_bottles.png";
import beach from "../imgs/2.png";
import Carousel from "../carousel/index";
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const stats = [
        {
            text: 'Together we clean forests, mountains, ravines, rivers, lakes, reservoirs, canyons and many other nature landmarks  to save the genuine beauty of the Earth.',
            number: '1,000',
            subtext: <span>Volunteers against<br/>environmental issues</span>
        },
        {
            text: 'Together we plant trees to restore the lungs of our Planet. We save forests to let them save the biodiversity, control the water level and climate, protect us from drought and winds.',
            number: '10,000',
            subtext: <span>Planted trees, that absorbe<br/>about 120 kg of CO2.</span>
        },
        {
            text: 'Each volunteer made a significant contribution for the sustainable future - they have showed how the small steps can solve a global problem.',
            number: '100,000+',
            subtext: <span>Liters of trash was collected<br/>by our volunteers</span>
        }
    ];

    const cards = [
        {
            img: plasticInSea,
            title: 'It takes from 100 to 200 years for Plastic to decompose.',
            text: 'Once the plastic is in the ground it breaks down into small particles and emits chemicals into the environment like Bisphenol A. These chemicals are spread by groundwater or other  water sources nearby, harming those who drink it.',
        },
        {
            img: plasticbottles,
            title: 'In the United States, Bisphenol A is found in 95% of adults in urine. ',
            text: 'Microplastic from the water spreads in our body by the blood. Plasticizers are associated with loss of fertility, disorders of puberty, reproduction and other health problems.',
        },
        {
            img: beach,
            title: 'Every $1 donated to our community would clean up 2400 liters of plastic trash',
            button: 'DONATE NOW',
        },
    ];

    return (
        <div className='home'>
            <div className='first'>
                <div className='head'>
                    <p className='header'>THINK   ECO<br/>LOGICALLY</p>
                    <a onClick={() => navigate('/reg')} className='button'>JOIN OUR COMMUNITY</a>
                </div>
                <div className='subtext'>
                    <p>Take a small step to save our Planet with us.</p>
                </div>
            </div>

            <div className='second block'>
                <h1>We save the <font>nature.</font><br/>Together.</h1>
                <h2>How do we tackle with environmental issues?</h2>
                <div className='stats'>
                    {stats.map((item, index) =>
                        <div key = {index} className="statblock" style={{justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'}}>
                            <p style = {{marginBottom: '20px'}}>{item.text}</p>
                            <p className='number'>{item.number}</p>
                            <p className='subparag' style={{fontWeight: '600'}}>{item.subtext}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className='third block'>
                <div>
                    <h1 style={{textAlign: 'left'}}><font>"</font>A person who has<br/>collected a bag of<br/>other people's<br/>garbage will never<br/>throw out his own.<font>"</font></h1>
                    <a href="/story" className='link'>WATCH OUR STORY <img src={bluarr} alt="blue arrow" style={{width: '10px', height: '15px', alignItems: 'center'}}/></a>
                </div>
                <div style={{textAlign: 'center', fontWeight: '600'}}>
                    <img src={story} alt="founder" style={{height: '320px', width: '480px'}}/>
                    <p style = {{marginTop: '5px'}}>...ecology starts from our mind.</p>
                    <p style = {{marginTop: '5px'}}>OUR FOUNDER: ZINAENUR ISLAM</p>
                </div>
            </div>

            <div className='fourth block'>
                <h1>Why ecology <font>matters?</font></h1>
                <h2>You probably are concerned about your health.<br/>We are concerned about it too.</h2>
                <h3 style={{marginTop: '30px', marginBottom: '0px'}}>According to the World Wildlife Fund (WWF), from 5 to 12 million tons of plastic ends up in the oceans annually</h3>
                <div className='facts'>
                    {cards.map((item, index) => 
                        <div className='card' key={index}>
                            {index % 2 === 0
                            ? <>
                                <img src={item.img} alt="card" style={{height: '350px', width: '595px', marginRight: '30px'}}/>
                                <div style={{width: '30vw', textAlign: 'left'}}>
                                    <h3>{item.title}</h3>
                                    {item.button ? <><a href="/donate" className='button'>{item.button}</a> </> : <><p>{item.text}</p></>}
                                </div>
                            </>
                            : <>
                                <div style={{width: '30vw', textAlign: 'left'}}>
                                    <h3>{item.title}</h3>
                                    {item.button ? <><a href="/donate" className='button'>{item.button}</a></> : <><p>{item.text}</p></>}
                                </div><img src={item.img} alt="card" style={{height: '350px', width: '595px', marginLeft: '30px'}}/>
                            </>}    
                        </div>
                    )}
                </div>
            </div>
            <div className='fifth block'>
                <h1>Upcoming <font>events</font></h1>
                <Carousel/>
            </div>
        </div>
    );
}
export default Home;
