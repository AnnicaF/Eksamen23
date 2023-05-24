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

<style scoped>
h2{
    padding-top:35px;
    padding-bottom:35px;
}
p{
    padding-left:100px;
    padding-right: 100px;
    padding-bottom:100px;
}

</style>

