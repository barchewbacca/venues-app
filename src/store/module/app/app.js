import { getLocation, getVenues } from '../../../control/api';
import getPosition from '../../../util/getPositon';

const namespace = 'app';

export const SET_DEVICE_STATE = `${namespace}/setDeviceState`;

export default {
  state: {
    venues: null,
    settings: null,
    location: null,
    deviceState: null,
    section: '',
  },
  getters: {
    venues: state => state.venues && state.venues.groups[0].items,
    locationName: state => state.venues && state.venues.headerLocation,
    total: state => state.venues && state.venues.totalResults,
  },
  mutations: {
    [SET_DEVICE_STATE](state, deviceState) {
      state.deviceState = deviceState;
    },
    setVenues: (state, venues = []) => {
      state.venues = venues;
    },
    setLocation: (state, location) => {
      state.location = {
        latitude: location.lat,
        longitude: location.lon,
      };
    },
    setSection: (state, section) => {
      state.section = section;
    },
    setSettings: (state, settings) => {
      state.settings = settings;
    },
  },
  actions: {
    async getLocation({ commit }) {
      /* Main way of getting the user's position here is through the browser Web API - Geolocation API, as it is more accurate precise than the third party IP Geolocation API. http://ipinfo.io service is used as a fallback. */
      commit(
        'setLocation',
        await getPosition()
          .then(position => ({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }))
          .catch(async err => {
            console.warn(
              'IP Geolocation API is being used as a fallback because of the following issue with the Web API:',
              `${err.message}.`,
            );
            return getLocation().then(({ data }) => {
              const [lat, lon] = data.loc.split(',');
              return { lat, lon };
            });
          }),
      );
    },
    async getVenues({ commit, dispatch }) {
      await dispatch('getLocation');
      const payload = { section: this.state.app.section, ...this.state.app.location };
      getVenues(payload).then(({ data }) => commit('setVenues', data.response));
    },
  },
};
