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
  // Main location: Mima Gardens (coordinates)
  const position: [number, number] = [-0.7730, 37.1450];

  // Nearby points of interest
  const nearbyLocations = [
    {
      position: [-0.7755, 37.1480],
      name: 'Mima Gardens Entry',
      description: 'Main entrance to the lush Mima Gardens.',
    },
    {
      position: [-0.7720, 37.1415],
      name: 'Mima Gardens Lake',
      description: 'A peaceful lake located within the gardens.',
    },
    {
      position: [-0.7800, 37.1465],
      name: 'Café Mima',
      description: 'A cozy café known for serving refreshing drinks and snacks.',
    },
    {
      position: [-0.7705, 37.1430],
      name: 'Maragua Museum',
      description: 'Museum showcasing local history and culture.',
    },
    {
      position: [-0.7760, 37.1420],
      name: 'Botanical Pavilion',
      description: 'Pavilion highlighting rare plant species.',
    },
  ];

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true} // Allow scroll zooming for better usability
        style={{ height: '100%', width: '100%' }}
      >
        {/* Switch to a more detailed map style */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {/* Main location marker for Mima Gardens */}
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            <div className="text-center">
              <strong>Mima Gardens</strong>
              <br />
              Coordinates: 0.7730° S, 37.1450° E
              <br />
              Address: Garden Road, Maragua
              <br />
              Details: A renowned botanical garden with scenic beauty and attractions.
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
