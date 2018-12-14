<style src="./VenueList.scss" module lang="scss"></style>
<script src="./VenueList.js"></script>

<template>
  <div :class="$style.venueList">
    <div :class="$style.venueListHeader">
      <h1 :class="$style.title">
        Showing
        <strong>{{venues && venues.length}}</strong> of
        <strong>{{total}}</strong> venues found nearby in
        <strong>{{locationName}}</strong>
      </h1>
    </div>
    <ul>
      <div v-for="item in venues" :key="item.venue.id">
        <VenueItem :options="item"/>
      </div>
    </ul>
  </div>
</template>
