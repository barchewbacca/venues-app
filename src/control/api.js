import getStore from '../store/store';
import { getValue } from '../util/injector';
import getTimestamp from '../util/timestampFormatter';
import { GATEWAY, CLIENT_ID, CLIENT_SECRET } from '../data/Injectables';

export const getLocation = () =>
  (locationEndpoint =>
    locationEndpoint
      ? getValue(GATEWAY).get(locationEndpoint)
      : Promise.reject(new Error('locationEndpoint is not specified')))(
    getStore().state.app.settings.locationEndpoint,
  );

export const getVenues = payload =>
  (venuesEndpoint =>
    venuesEndpoint
      ? getValue(GATEWAY).get(
          `${venuesEndpoint}?ll=${payload.latitude},${payload.longitude}&sortByDistance=1&section=${
            payload.section
          }&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${getTimestamp()}`,
        )
      : Promise.reject(new Error('venuesEndpoint is not specified')))(
    getStore().state.app.settings.venuesEndpoint,
  );
