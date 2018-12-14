<style src="./VenueItem.scss" module lang="scss"></style>
<script src="./VenueItem.js"></script>

<template>
  <div :class="$style.venueItem">
    <div
      :class="$style.venueThumb"
      :style="{ 'background-image': 'url(' + options.venue.categories[0].icon.prefix + '88' + options.venue.categories[0].icon.suffix + ')' }"
    ></div>
    <div :class="$style.venueInfo">
      <h2 :class="$style.venueTitle">{{options.venue.name}}</h2>
      <p
        :class="[$style.infoRow, $style.categoryRow]"
        v-for="category in options.venue.categories"
        :key="category.id"
      >
        <span>{{category.name}}</span>
      </p>
      <p :class="$style.infoRow">
        <span>{{options.venue.location.distance}} m</span> &#183;
        <span>{{options.venue.location.address}}</span>
      </p>
    </div>
  </div>
</template>
