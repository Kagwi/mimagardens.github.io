import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ScaleControl } from 'react-leaflet';
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
  // Main location coordinates (0.7780° S, 37.1467° E)
  const position: [number, number] = [-0.7780, 37.1467];

  // Other nearby locations to display on the map
  const nearbyLocations = [
    {
      position: [-0.7810, 37.1445],
      name: 'Landmark 1',
      description: 'A historical site with scenic views.',
    },
    {
      position: [-0.7790, 37.1500],
      name: 'Restaurant 1',
      description: 'Popular restaurant known for local cuisine.',
    },
    {
      position: [-0.7750, 37.1435],
      name: 'Park 1',
      description: 'A serene park for outdoor activities and relaxation.',
    },
  ];

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true} // Allow scroll zooming for better usability
        style={{ height: '100%', width: '100%' }}
      >
        {/* Switch to a more detailed map style */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {/* Main location marker */}
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            <div className="text-center">
              <strong>New Location</strong>
              <br />
              Coordinates: 0.7780° S, 37.1467° E
              <br />
              Address: Some Street, Maragua
              <br />
              Details: A major point of interest in the region.
            </div>
          </Popup>
        </Marker>

        {/* Nearby location markers */}
        {nearbyLocations.map((location, index) => (
          <Marker key={index} position={location.position} icon={defaultIcon}>
            <Popup>
              <div className="text-center">
                <strong>{location.name}</strong>
                <br />
                {location.description}
              </div>
            </Popup>
          </Marker>
        ))}

        <RecenterMap position={position} />

        {/* Add a scale bar for map distance */}
        <ScaleControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

export default LocationMap;
