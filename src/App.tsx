import { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import useStyles from "./style";

const getLocationDetails = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          latLng: [40.1772, 44.50349],
          zoom: 9,
          geometry: [40.1772, 44.50349],
        }),
      1000
    );
  });
};

interface IMapOptions {
  latLng: number[],
  zoom: number,
  geometry: number[]
};

const App = () => {
  const [mapOptions, setMapOptions] = useState<any>();
  const classes = useStyles();

  useEffect(() => {
    getLocationDetails().then((res) => {
      setMapOptions(res);
    });
  }, []);

  if (mapOptions) {
    const { latLng, zoom, geometry } : IMapOptions = mapOptions;

    return (
      <YMaps>
        <div className={classes.root}>
          
          <Map defaultState={{ center: latLng, zoom }} className={classes.map}>
            <Placemark geometry={geometry}/>
          </Map>
        </div>
      </YMaps>
    );
  }

  return null;
};

export default App;
