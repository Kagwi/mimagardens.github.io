import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMap = () => {
  // Maragua coordinates
  const position: [number, number] = [-0.8347935813715642, 37.12847722767733];

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          <div className="text-center">
            <strong>Mima Gardens</strong>
            <br />
            Kenol-Murang'a Highway, Maragua
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;