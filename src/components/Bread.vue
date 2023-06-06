<template>
    <nav class="breadcrumbs">
      <ol>
        <li v-for="(crumb, index) in crumbs" :key="index">
          <a v-if="crumb.url" :href="crumb.url">{{ crumb.title }}</a>
          <span v-else>{{ crumb.title }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Bread",
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    computed: {
      crumbs() {
        return this.items.map((item) => ({
          title: item.title,
          url: item.url,
        }));
      },
    },
  };
  </script>
  
  