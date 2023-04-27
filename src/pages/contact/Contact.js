import './Contact.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Contact() {
  const positions = [
    {
      latitude: 28.1565146,
      longitude: -15.4196774
    }
  ];

  return (
    <MapContainer center={[28.1565146, -15.4196774]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((p, index) =>
        <Marker key={index} position={[p.latitude, p.longitude]}>
          <Popup>
            <img src='/assets/img/logo.png' alt='logo' height={50} width={100}/>
            <br></br>
            CarsAndBikes <br /> Concesionario
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Contact;
