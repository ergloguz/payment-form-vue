<template>
  <div class="form-group success">
    <input :value="code" @input="updateCode($event.target.value)"
           class="form-control  "  :id="id" type="text"
           name="ccnum" value="4542 9931 9292 2293"/>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["code","id"],
  methods: {
    updateCode(code) {
      this.$emit('input', code)
    }
  }
}
</script>

<style scoped>


.form-control {
  border-color: #e1e8ee;
  border-width: 2px;

  &:focus {
    box-shadow: none !important;
  }
}


.is-valid {
  border-color: #7dc855;

  &:focus {
    box-shadow: none;
  }
}

.is-valid,
.is-invalid {
  background-position: calc(100% - 1.1em) center;
  background-repeat: no-repeat;

  &:focus {
    box-shadow: none;
  }

}


</style>