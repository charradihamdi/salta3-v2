import React, { useRef } from "react";

import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "./style.css";
import osm from "./osm-provider";
import L from "leaflet";
import data from "./TunisGeo.json";
const MapTunisia = (props) => {
  const center = {
    lat: 33.886917,
    lng: 9.537499,
  };
  const ZOOM_LEVEL = 6;
  const mapRef = useRef();
  const MarketIcon = new L.icon({
    iconUrl: require("../../../assets/icons/position.png"),
    iconSize: [35, 45],
  });
  const filteredData = data.gouvernorats.filter((item) => {
    return props.areaName.includes(item.name);
  });
  console.log(filteredData);
  return (
    <div className="App">
      <LeafletMap
        center={center}
        zoom={ZOOM_LEVEL}
        style={{ width: "100%", height: "50vh" }}
        ref={mapRef}
        className="LeafletMap"
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        {filteredData.length > 0
          ? filteredData.map((area) => {
              console.log(area.lat);
              return (
                <Marker position={[area.lat, area.long]} icon={MarketIcon}>
                  <Popup className="popup">
                    {area.accréditation.map((zone, indx) => {
                      return (
                        <li>
                          <input
                            class="checkbox-custom-label"
                            name="ADA"
                            type="checkbox"
                          />
                          <label for="a1" class="checkbox-custom-label">
                            {zone.name}
                          </label>
                        </li>
                      );
                    })}
                  </Popup>
                </Marker>
              );
            })
          : data.gouvernorats.map((area) => {
              return (
                <Marker position={[area.lat, area.long]} icon={MarketIcon}>
                  <Popup className="popup">
                    {area.accréditation.map((zone, indx) => {
                      return (
                        <li>
                          <input
                            class="checkbox-custom-label"
                            name="ADA"
                            type="checkbox"
                          />
                          <label for="a1" class="checkbox-custom-label">
                            {zone.name}
                          </label>
                        </li>
                      );
                    })}
                  </Popup>
                </Marker>
              );
            })}
      </LeafletMap>
    </div>
  );
};

export default MapTunisia;
