import { mapGetters } from 'vuex';
import VenueItem from '../VenueItem';

export default {
  name: 'VenueList',
  components: {
    VenueItem,
  },
  computed: {
    ...mapGetters(['venues', 'total', 'locationName']),
  },
};
