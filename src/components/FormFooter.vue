<template>
  <div class="payment-actions">
    <a class="return">Return to Shipping</a>
    <a @click="onClick" class="finish">Finish Order
      <img class="ml-2" src="../assets/icons/indir.png" alt="arrow">
    </a>
  </div>
</template>

<script>
export default {
  name: "FormFooter",
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped>


.payment-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e1e8ee;
  color: #86939e;
}

.payment-actions > a {
  flex: 1 1 50%;
  padding: 1em;
  text-underline-mode: none;
  font-weight: 500;
  text-align: center;
  color: #86939e;
  text-decoration: none !important;
  cursor: pointer;


}

.payment-actions > a:hover {
  color: #86939e;
  text-decoration: none !important;


}

.payment-actions > a + a {
  border-left: 1px solid #e1e8ee;
  text-decoration: none !important;

}

.payment-actions > a.finish {
  color: #7dc855;
  text-decoration: none !important;

}

</style>