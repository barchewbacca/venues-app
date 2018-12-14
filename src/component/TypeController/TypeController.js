import FilterButton from '../FilterButton';
import { FilterNames } from '../../data/enum/configNames';

export default {
  name: 'TypeController',
  components: { FilterButton },
  data() {
    return {
      filterNames: Object.keys(FilterNames).map(key => key.toLowerCase()),
      filterValues: Object.keys(FilterNames).map(key => FilterNames[key]),
      checkedNames: [],
    };
  },
};
