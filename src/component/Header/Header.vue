<style src="./Header.scss" module lang="scss"></style>
<script src="./Header.js"></script>

<template>
  <header :class="$style.header">
    <div class="container">
      <div :class="$style.inner">
        <TypeController/>
      </div>
    </div>
  </header>
</template>
