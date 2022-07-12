import './carousel.css';
import cinema from '../imgs/3.png';
import sea from '../imgs/4.png';
import third from "../imgs/nw.png";
import { useState } from 'react';
import bluearr from "../imgs/bluearr.png";
import bluearr2 from "../imgs/bluearr2.png";

const Carousel = () => {

    const events = [
        {
            name: <span><font>Charity</font><br/>film screening</span>,
            text: 'The most powerful screening about rational usage and technological progress - Join the comedy movie session " a hundred things and nothing more"!',
            subtext: 'Watch movies and help us to save the nature Every bought ticket is about 2 planted trees or 6400 liters of cleaned plastic waste! The craziest thing we do is nothing :)',
            date: <span>August <font>19th 2022</font></span>,
            img: cinema,
        }, 
        {
            name: <span><font>Second</font><br/>event</span>,
            text: 'hjkals hdgka hreio gduahi ldhsglj khgd lhaj;l skdnglkaigsdijklMDgjakh dgiualHKNgIUSYET9PQ AIOHE KDLNSGKSIU ADGF IUOjkals dfhgj d fgkh dfjgk',
            subtext: 'sdghaou idgfyuetO UJBCZUD YG TFOAIU JKNDGK JSH ADOU GYHujsd nkja bhfdu ygauye ghkl jnd gkjh ao yet ryp[OIPs dhgAEYGR8YA UGEYFGIETFIYUKAGS sfgsh dfkhgsj sdfsjk',
            date: <span>September <font>21st 2022</font></span>,
            img: sea,
        },
        {
            name: <span><font>Third</font><br/>event</span>,
            text: 'hjkals hdgka hreio gduahi ldhsglj khgd lhaj;l skdnglkaigsdijklMDgjakh dgiualHKNgIUSYET9PQ AIOHE KDLNSGKSIU ADGF IUOjkals dfhgj d fgkh dfjgk',
            subtext: 'sdghaou idgfyuetO UJBCZUD YG TFOAIU JKNDGK JSH ADOU GYHujsd nkja bhfdu ygauye ghkl jnd gkjh ao yet ryp[OIPs dhgAEYGR8YA UGEYFGIETFIYUKAGS sfgsh dfkhgsj sdfsjk',
            date: <span>October <font>30th 2022</font></span>,
            img: third,
        }
    ];

    const [current, setCurrent] = useState(0);

    const handleNextEvent = () => {
        setCurrent((current + 1) % events.length);
    };

    const handlePrevEvent = () => {
        setCurrent(current ? (current - 1) % events.length : events.length - 1);
    }

    return (
        <div className='container'>
            <div className='eventinfo'>
                <h1 style={{marginBottom: '40px', textAlign: 'left'}}>{events[current].name}</h1>
                <div style = {{marginLeft: '5vw', marginBottom: '6vh'}}>
                    <p className='text'>{events[current].text}</p>
                    <p style={{marginBottom: '40px'}}>{events[current].subtext}</p>
                    <h2>{events[current].date}</h2>
                </div>
                <a href="/more" className='link'>LEARN MORE <img src={bluearr} alt="blue arrow" className='arr'/></a>
            </div>
            <div className='eventimages'>
                <div style={{marginRight: '10vw'}}>
                    <h2 className='eventnumber'>0{current + 1}</h2>
                    <img src={events[current].img} alt="event" className='image'/>
                    <div>
                        <button
                            className='link'
                            style={{backgroundColor: 'white'}}
                            onClick={() => handlePrevEvent()}    
                        ><img src={bluearr2} alt="blue arr" className='arr'/></button>
                        <button
                            className='link'
                            style={{backgroundColor: '#D0D5FF'}}
                            onClick={() => handleNextEvent()}    
                        >NEXT <img src={bluearr} alt="blue arr" className='arr' style={{marginLeft: '10px'}}/></button>
                    </div>
                </div>
                <div>
                    <h2 className='eventnumber'>0{(current + 2) <= events.length ? current + 2 : 1}</h2>
                    <img src={events[(current + 1) % events.length].img} alt="event" className='image'/>
                </div>
            </div>
        </div>
    );
}
 
export default Carousel;