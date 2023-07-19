import React, { useState, useEffect } from 'react'
import "../Frontend/Style/PhoneMap.css"
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
const PhoneMap = ({ setShowModal, fromLocation, toLocation }) => {
    const onClose = () => {
        setShowModal(false);
    }
    const [directions, setDirections] = useState(null);
    const [distance, setDistance] = useState(null);
  const [travelTime, setTravelTime] = useState(null);
    useEffect(() => {
        calculateDirections();
    }, []);
    const calculateDirections = () => {
        const directionsService = new window.google.maps.DirectionsService();
        const origin = fromLocation; // Replace with your origin address
        const destination = toLocation; // Replace with your destination address

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                    setDistance(result.routes[0].legs[0].distance.text);
                    calculateTravelTime(result.routes[0].legs[0].duration.value);
                }
            }
        );
    };
    const calculateTravelTime = duration => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const formattedTime = `${hours} hours ${minutes} minutes`;
        setTravelTime(formattedTime);
      };
    return (
        <>
            <div className="modal-map">
                <div className="modal-content-map">
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                    <div className='mapCustomer'>
                        {directions && (
                            <div className="map-container">

                                <GoogleMap googleMapsApiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0"
                                    mapContainerStyle={{ height: '300px', width:'300px' }}
                                    zoom={12}
                                    center={directions ? directions.routes[0].legs[0].start_location : null}
                                >
                                    <DirectionsRenderer directions={directions} />
                                </GoogleMap>

                            </div>)
}
               </div></div></div>
        </>
    )
}

export default PhoneMap