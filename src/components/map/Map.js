import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => {
  return (
    <div>
      <Icon icon={locationIcon} className="" />

      <p> {text}</p>
    </div>
  );
};
const Map = () => {
  const location = {
    adresse: "1600 Amphitheatre Parkway, Mountain View, californie.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div
      className="Map"
      style={{ height: "50vh", width: "80%", marginLeft: "200px" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.adresse}
        />
      </GoogleMapReact>
    </div>
  );
};
export default Map;
