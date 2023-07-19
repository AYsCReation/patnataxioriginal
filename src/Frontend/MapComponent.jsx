import React, { useEffect, useState } from 'react';
import { GoogleMap, DirectionsRenderer, Marker, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

const MapComponent = ({ fromLocation, toLocation }) => {
  const [map, setMap] = useState(null);
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const defaultCenter = {
    lat: 25.60797070347284,
    lng: 85.00295726756117,
  };

  const [fromCoordinates, setFromCoordinates] = useState(null);
  const [toCoordinates, setToCoordinates] = useState(null);
  const [directions, setDirections] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);

  useEffect(() => {
    if (typeof window.google !== 'undefined' && !directionsService) {
      setDirectionsService(new window.google.maps.DirectionsService());
    }
  }, [directionsService, fromLocation, toLocation]);

  useEffect(() => {
    const fetchCoordinates = async (locationString) => {
      try {
        const apiKey = 'AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0';
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            locationString
          )}&key=${apiKey}`
        );

        if (response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry.location;
          return { lat, lng };
        }
      } catch (error) {
        console.error('Error fetching location coordinates:', error);
      }
      return null;
    };

    const getCoordinates = async () => {
      if (fromLocation) {
        const fromCoordinates = await fetchCoordinates(fromLocation);
        setFromCoordinates(fromCoordinates);
      }
      if (toLocation) {
        const toCoordinates = await fetchCoordinates(toLocation);
        setToCoordinates(toCoordinates);
      }
    };

    getCoordinates();
  }, [fromLocation, toLocation]);

  useEffect(() => {
    const fetchDirections = async () => {
      if (fromCoordinates && toCoordinates && directionsService && map) {
        const directionsRequest = {
          origin: fromCoordinates,
          destination: toCoordinates,
          travelMode: 'DRIVING',
        };

        directionsService.route(directionsRequest, (response, status) => {
          if (status === 'OK') {
            setDirections(response);
          } else {
            console.log('Directions request failed with status:', status);
          }
        });
      }
    };

    fetchDirections();
  }, [fromCoordinates, toCoordinates, directionsService, map]);
  console.log(directionsService);
  return (
    <div style={{ width: '100%', height: '500px' }}>
      
        <GoogleMap googleMapsApiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0"
          mapContainerStyle={mapContainerStyle}
          center={fromCoordinates || defaultCenter}
          zoom={fromCoordinates ? 10 : 8}
          onLoad={(map) => setMap(map)}
        >
          {fromCoordinates && <Marker position={fromCoordinates} label="A" />}
          {toCoordinates && <Marker position={toCoordinates} label="B" />}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    
    </div>
  );
};

export default MapComponent;
