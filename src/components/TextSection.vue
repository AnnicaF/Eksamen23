<template>
        <h2>
            {{ heading }}
        </h2>
        <p>
            {{ text }}
        </p>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
    },
    text: {
      type: String,
    }
  }
}
</script>


