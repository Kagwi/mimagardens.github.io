import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up the default marker icon with correct size and anchor
const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component to handle map auto-centering on resize or position changes
const RecenterMap = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const LocationMap = () => {
  // Updated coordinates (0.7780° S, 37.1467° E)
  const position: [number, number] = [-0.7780, 37.1467];

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true} // Allow scroll zooming for better usability
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            <div className="text-center">
              <strong>Mima Gardens & Restaurant</strong>
              <br />
              Coordinates: 0.7780° S, 37.1467° E
            </div>
          </Popup>
        </Marker>
        <RecenterMap position={position} />
      </MapContainer>
    </div>
  );
};

export default LocationMap;
