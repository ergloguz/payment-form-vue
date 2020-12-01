<template>
  <component :is="tag" :class="size">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'method',
      validator: function (value) {
        return ['title', 'green',"method"].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin: 0;
  padding: 1.8em 2em;
  font-size: 1.2em;
  line-height: 1.2;
  color: #5e6977;
}

.method {
  padding-top: 0.25em;
  font-size: 1em;
}

.green {
  color: #7dc855 !important;
  cursor: pointer;
}

</style>