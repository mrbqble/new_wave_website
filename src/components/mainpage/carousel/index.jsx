import 'swiper/css';
import './carousel.css';
import { useContext } from "react";
import "swiper/css/effect-creative";
import { SwiperButtonNext } from './next';
import { SwiperButtonPrev } from './prev';
import bluearr from "../../imgs/bluearr.png";
import { useNavigate } from 'react-router-dom';
import { DefaultContext } from "../../../Context";
import { EffectCreative, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


export const Carousel = () => {

    let date;
    const navigate = useNavigate();
    const {events, setCurrent, width, months} = useContext(DefaultContext);

    const handleMoreEvent = (index) => {
        setCurrent(index)
        navigate('/event');
    };

    return (
        <Swiper
            loop
            initialSlide={1}
            slidesPerView={1}
            effect={"creative"}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            modules={[EffectCreative, Autoplay]}
            style={{
                zIndex: "1"
            }}
        >
            {events
                ? events.map((item, index) =>
                    <>{date = item.date.split('-')}
                        <SwiperSlide key={index}
                            style={{backgroundColor: "white"}}
                        >   
                            <div className='container'>
                                <div className='eventinfo'>
                                    <h1 style={{
                                        textAlign: 'left'
                                    }}>
                                        {item.title}<br/>
                                        <font>{item.subtitle}</font>
                                    </h1>
                                    <div style={{
                                        marginLeft: width > 400 ? '5vw' : ""
                                    }}>
                                        <p className='text'>{item.text}</p>
                                        <p style={{
                                            marginBottom: "4vh"
                                        }}
                                        >{item.subtext}</p>
                                        <h2 style={{marginBottom: "0px"}}>{months[parseInt(date[1]) - 1] + " " + date[2] + ", " + date[0]}</h2>
                                    </div>
                                    <a
                                        className='link'
                                        onClick={() => handleMoreEvent(index)}
                                    >
                                        LEARN MORE <img
                                            src={bluearr}
                                            className='arr'
                                            alt="blue arrow"
                                        />
                                    </a>
                                </div>
                                <div className='eventimages'>
                                    <div style={{
                                        marginRight: width > 800 ? '10vw' : "",
                                    }}>
                                        <h2 className='eventnumber'>0{index + 1}</h2>
                                        <img 
                                            alt="event"
                                            className='image'
                                            src={item.image}
                                        />
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row"
                                        }}>
                                            <SwiperButtonPrev>
                                                <img
                                                    src={bluearr}
                                                    alt="blue arr"
                                                    className='arr'
                                                    style={{
                                                        transform: "rotate(180deg)"
                                                    }}/>
                                            </SwiperButtonPrev>
                                            <SwiperButtonNext>
                                                NEXT <img
                                                    src={bluearr}
                                                    alt="blue arr"
                                                    className='arr'
                                                    style={{
                                                        marginLeft: '10px'
                                                    }}/>
                                            </SwiperButtonNext>
                                        </div>
                                    </div>
                                    {width > 800 ?
                                        <div style={{
                                                opacity: "50%"
                                            }}>
                                                <h2 className='eventnumber'>0{(index + 1) % events.length + 1}</h2>
                                                <img 
                                                    alt="event"
                                                    className='image'
                                                    src={events[(index + 1) % events.length].image}
                                                />
                                        </div>
                                        : <></>
                                    }
                                </div>
                            </div>
                        </SwiperSlide></>)
                : <></>}
            </Swiper>
    );
};