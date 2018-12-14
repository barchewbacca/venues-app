<style src="./FilterButton.scss" module lang="scss"></style>
<script src="./FilterButton.js"></script>

<template>
  <div :class="$style.filterButton">
    <input
      type="radio"
      :class="[$style.filterCheckbox]"
      :id="`${filterName}-button`"
      :value="filterValue"
      @change="handleChange"
      name="section-radio"
      :checked="isChecked"
    >
    <label
      :class="[$style.filterLabel, 'button button--white']"
      :for="`${filterName}-button`"
    >{{capitalizedFilterName}}</label>
  </div>
</template>
