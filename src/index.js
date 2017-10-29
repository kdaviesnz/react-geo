import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GeolocationContainer from './Geolocation-container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GeolocationContainer />, document.getElementById('root'));
registerServiceWorker();
