import VueTypes from 'vue-types';

export default {
  name: 'FilterButton',
  props: {
    filterName: VueTypes.string,
    filterValue: VueTypes.string,
    checkedArray: VueTypes.array,
    isChecked: VueTypes.bool,
  },
  computed: {
    capitalizedFilterName() {
      return this.filterName.charAt(0).toUpperCase() + this.filterName.slice(1);
    },
  },
  methods: {
    handleChange(event) {
      const checkbox = event.target;
      const apply = checkbox.checked;
      this.$store.commit('setSection', apply ? checkbox.value : '');
      this.$store.dispatch('getVenues');
    },
  },
};
