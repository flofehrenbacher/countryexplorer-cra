import * as React from "react";

import ReactMapGL from "react-map-gl";

interface MyMapProps {
  latlng: [number, number];
}

export function MyMap({ latlng }: MyMapProps) {
  const MapboxToken = undefined;
  const [viewport, setViewport] = React.useState({
    latitude: latlng[0],
    longitude: latlng[1],
    zoom: 2
  });
  return (
    <>
      {MapboxToken ? (
        <ReactMapGL
          mapStyle={"mapbox://styles/flofehrenbacher/cjv9q5s9i2e751fs1vioouty7"}
          height={"100%"}
          width={"100%"}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          onViewportChange={(viewport: any) => setViewport({ ...viewport })}
          zoom={viewport.zoom}
          mapboxApiAccessToken={MapboxToken}
        />
      ) : (
        <p>no mapbox token was provided</p>
      )}
    </>
  );
}
