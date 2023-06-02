<template>
    <section>
      <h2>{{ heading }}</h2>
      <div class="boxes">
        <div class="box1 box">
          <h3 class="red">1</h3>
          <p>{{ items[0].text }}</p>
        </div>
        <div class="box2 box">
          <h3 class="red">2</h3>
          <p>{{ items[1].text }}</p>
        </div>
        <div class="box3 box">
          <h3 class="red">3</h3>
          <p>{{ items[2].text }}</p>
        </div>
      </div>
    </section>
  </template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
