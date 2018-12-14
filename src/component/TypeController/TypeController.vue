<style src="./TypeController.scss" module lang="scss"></style>
<script src="./TypeController.js"></script>

<template>
  <div :class="$style.typeController">
    <h2 :class="$style.filterTitle">I'm looking for:</h2>
    <div :class="$style.filterList">
      <FilterButton
        v-for="(filterName, index) in filterNames"
        :key="`filter-${index}`"
        :filterName="filterName"
        :filterValue="filterValues[index]"
        :checkedArray="checkedNames"
        :isChecked="index === 0"
      />
    </div>
  </div>
</template>
