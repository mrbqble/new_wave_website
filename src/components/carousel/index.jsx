import './carousel.css';
import { useContext } from "react";
import bluearr from "../imgs/bluearr.png";
import { useState, useEffect } from 'react';
import { DefaultContext } from "../../Context";
import { useNavigate } from 'react-router-dom';

export const Carousel = () => {

    const {setEvent, events, current, setCurrent} = useContext(DefaultContext);
    const navigate = useNavigate();

    const handleNextEvent = () => {
        setCurrent((current + 1) % events.length);
    };

    const handlePrevEvent = () => {
        setCurrent(current ? (current - 1) % events.length : events.length - 1);
    };

    const handleMoreEvent = () => {
        setEvent(events[current]);
        navigate('/event');
    };

    return (
        <div className='container'>
            {events
            ? <>
                <div className='eventinfo'>
                    <h1 style={{
                        textAlign: 'left'
                    }}>
                        {events[current].title}<br/>
                        <font>{events[current].subtitle}</font>
                    </h1>
                    <div style={{
                        marginLeft: '5vw'
                    }}>
                        <p className='text'>{events[current].text}</p>
                        <p style={{
                            marginBottom: "4vh"
                        }}
                        >{events[current].subtext}</p>
                        <h2>
                            {events[current].month} <font>{events[current].day}</font>
                        </h2>
                    </div>
                    <a
                        className='link'
                        onClick={() => handleMoreEvent()}
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
                        marginRight: '10vw'
                    }}>
                        <h2 className='eventnumber'>0{current + 1}</h2>
                        <img 
                            alt="event"
                            className='image'
                            src={events[current].image}
                        />
                        <div>
                            <button
                                className='link'
                                style={{
                                    backgroundColor: 'white'
                                }}
                                onClick={() => handlePrevEvent()}    
                            >  
                                <img
                                    src={bluearr}
                                    alt="blue arr"
                                    className='arr'
                                    style={{
                                        transform: "rotate(180deg)"
                                    }}/>
                            </button>
                            <button
                                className='link'
                                style={{
                                    backgroundColor: '#D0D5FF'
                                }}
                                onClick={() => handleNextEvent()}    
                            >
                                NEXT <img
                                    src={bluearr}
                                    alt="blue arr"
                                    className='arr'
                                    style={{
                                        marginLeft: '10px'
                                    }}/>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className='eventnumber'>0{(current + 2) <= events.length ? current + 2 : 1}</h2>
                        <img
                            alt="event"
                            className='image'
                            src={events[(current + 1) % events.length].image}
                            style={{
                                opacity: "50%"
                            }}
                        />
                    </div>
                </div>
            </> : <></>}
        </div>
    );
};