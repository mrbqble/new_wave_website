import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import "./map.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPlaces } from "../../../../actions/add";
import { useEffect } from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css';
import { useContext } from "react";
import { DefaultContext } from "../../../../Context";


export const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCb-h-VW0-BVlhuHFuXcD_v07Cn6NnMKcQ"
    });
    const {width} = useContext(DefaultContext);

    const [places, setPlaces] = useState([]);

    const [longtitude, setLongtigtide] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [zoom, setZoom] = useState(12);
    const [current, setCurrent] = useState({lat: 0, lng: 0})

    useEffect(() => {
        navigator.geolocation.watchPosition(function(position) {
            getPlaces(position.coords.latitude, position.coords.longitude).then((response) => {
                setPlaces(response);
            });
            setCurrent({lat: position.coords.latitude, lng: position.coords.longitude})
            setLatitude(position.coords.latitude);
            setLongtigtide(position.coords.longitude);
        });
    }, [])

    function handleZoomChanged(newZoom) {
        setZoom(newZoom);
    }

    const handleActivePlace = (item) => {
        setLatitude(item.geometry.location.lat);
        setLongtigtide(item.geometry.location.lng);
        setZoom(16);
    }

    var rad = function(x) {
        return x * Math.PI / 180;
    };

    const  getDistance = (p1, p2) => {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat - p1.lat);
        var dLong = rad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };

    if(!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="reg map" style={{paddingTop: "8vh"}}>
                <div
                    style={{
                        position: "absolute",
                        justifySelf: "flex-end",
                        top: "8vh"
                    }}
                >
                    <Swiper
                        slidesPerView={width > 400 ? 3 : 1}
                        spaceBetween={-50}
                        loop
                        style={{
                            height: width > 400 ? "45vw" : "100vw",
                        }}
                        direction={width > 400 ? "vertical" : "horizontal"}
                        centeredSlides={true}
                    >
                        {places
                            ? places.map((item, index) => 
                                <SwiperSlide key={index}>
                                    <div 
                                        className="place"
                                        onClick={() => handleActivePlace(item)}
                                    >
                                        <h3 style={{maxHeight: "1.2em", lineHeight: "1.2em", overflow: "hidden"}}>{item.name}</h3>
                                        <span style={{maxHeight: "1.3em", overflow: "hidden"}}>{item.vicinity}</span>
                                        <span style={{color: item.opening_hours ? "green" : "red", fontWeight: "500"}}>{item.opening_hours ? "Open now" : "Closed"}</span>
                                        <span>{(getDistance(current, item.geometry.location) / 1000).toFixed(1)} km</span>
                                        <span>{item.rating} <Rater total={5} rating={item.rating} interactive={false}/></span>
                                        <a className="cert btn" style={{padding: "10px", fontSize: "14px"}} href={`https://www.google.com/maps/dir/${current.lat},${current.lng}/${item.name}/@${latitude},${longtitude}z`} target="_blank">Show way</a>
                                    </div>
                                </SwiperSlide>
                            )
                            : <></>
                        }
                    </Swiper>
                </div>
                <GoogleMap
                    onZoomChanged={handleZoomChanged}
                    zoom={zoom}
                    center={{lat: latitude, lng: longtitude}}
                    mapContainerClassName="map-container"
                    style={{
                        zIndex: "-1"
                    }}
                >
                    {places
                        ? places.map((item, index) => 
                            <Marker key={index} position={{lat: item.geometry.location.lat, lng: item.geometry.location.lng}}/>
                        )
                        : <></>
                    }
                </GoogleMap>
            </div>
        );
    }
};