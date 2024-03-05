import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '85vh',
};

const center = {
    lat: 19.076090,
    lng: 72.877426,
};

const MapContainer = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyALNVcKJR_nYq2RY0DbLFa1T-LM-iVTYvU">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;


// AIzaSyALNVcKJR_nYq2RY0DbLFa1T-LM-iVTYvU
