import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PRESENTATION
// latitude and longitude are passed in by the owner, GeolocationContainer.
const Geolocation = ({latitude, longitude}) => (
    <div>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
    </div>
)

Geolocation.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
}

export default Geolocation;
